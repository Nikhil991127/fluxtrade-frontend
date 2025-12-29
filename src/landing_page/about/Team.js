import React from "react";

const teamMembers = [
  {
    name: "Nikhil Sharma",
    role: "Founder, CEO",
    image: "media/images/niikhil.jpg",
    description:
      "The company was founded to overcome the challenges faced by traders and investors. Since its inception, it has played a key role in transforming the Indian broking industry.",
    isFounder: true,
  },
  {
    name: "Janvi",
    role: "Co-founder, CFO",
    image: "media/images/janvi.jpeg",
    description:
      "Janvi is an astute and experienced investor and heads financial planning. An avid reader, she enjoys strategy games like chess.",
  },
  {
    name: "Raghav",
    role: "Co-founder, CFO",
    image: "media/images/raghav.jpeg",
    description:
      "Raghav oversees operations and compliance. He holds multiple financial certifications and enjoys cycling and adventure sports.",
  },
];

function Team() {
  const founder = teamMembers.find(m => m.isFounder);
  const others = teamMembers.filter(m => !m.isFounder);

  return (
    <section className="container my-5">
      
      {/* Founder Section */}
      <div className="row align-items-center gy-4 mb-5">
        <div className="col-12 col-lg-4 text-center">
          <img
            src={founder.image}
            alt={founder.name}
            className="img-fluid rounded-circle mb-3"
            style={{ maxWidth: "220px" }}
          />
          <h4 className="mb-1">{founder.name}</h4>
          <p className="text-muted">{founder.role}</p>
        </div>

        <div className="col-12 col-lg-8">
          <h2 className="mb-3">People</h2>
          <p className="text-muted">{founder.description}</p>
        </div>
      </div>

      {/* Other Team Members */}
      <div className="row gy-5">
        {others.map((member, index) => (
          <div key={index} className="col-12 col-md-6 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="img-fluid rounded-circle mb-3"
              style={{ maxWidth: "180px" }}
            />
            <h4 className="mb-1">{member.name}</h4>
            <p className="text-muted">{member.role}</p>
            <p className="text-muted px-3">
              {member.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Team;
