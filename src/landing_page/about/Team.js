import React from "react";
import { Monogram } from "../Illustrations";

const teamMembers = [
  {
    name: "Aanya Rao",
    role: "Founder, CEO",
    description:
      "Aanya spent six years building exchange infrastructure before starting Fluxtrade to fix what she saw as a broken relationship between brokers and traders: too much noise, not enough respect for people's attention or money.",
    isFounder: true,
  },
  {
    name: "Kabir Malhotra",
    role: "Co-founder, CTO",
    description:
      "Kabir leads engineering and owns the matching engine end to end. Previously built low-latency systems for a commodities desk; unwinds by restoring old mechanical keyboards.",
  },
  {
    name: "Devika Menon",
    role: "Co-founder, Head of Risk",
    description:
      "Devika built the real-time risk engine and the Guardrails feature. She holds a background in quantitative finance and spends weekends running long-distance trails.",
  },
];

function Team() {
  const founder = teamMembers.find(m => m.isFounder);
  const others = teamMembers.filter(m => !m.isFounder);

  return (
    <section className="section-flux">
      <div className="container">

        {/* Founder Section */}
        <div className="card-flux mb-5">
          <div className="row align-items-center gy-4">
            <div className="col-12 col-lg-4 text-center">
              <div className="d-flex justify-content-center mb-3">
                <Monogram name={founder.name} tone="accent" />
              </div>
              <h4 className="mb-1">{founder.name}</h4>
              <p className="mb-0" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)" }}>{founder.role}</p>
            </div>

            <div className="col-12 col-lg-8">
              <div className="eyebrow">Leadership</div>
              <h2 className="display-flux-md mb-3">People</h2>
              <p>{founder.description}</p>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="row gy-4">
          {others.map((member, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="card-flux text-center">
                <div className="d-flex justify-content-center mb-3">
                  <Monogram name={member.name} tone={index % 2 === 0 ? "coral" : "accent"} size={140} />
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="mb-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)" }}>{member.role}</p>
                <p className="px-3 mb-0">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
