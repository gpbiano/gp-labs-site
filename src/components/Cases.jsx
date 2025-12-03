import Reveal from "./Reveal.jsx";

const cases = [
  {
    badge: "Funil WhatsApp + site",
    title: "Criatório com vendas organizadas no digital",
    text:
      "Reorganização do funil de atendimento, criação de site institucional, fluxos de mensagens e acompanhamento mensal de resultados.",
    metric: "Maior controle de pedidos e relacionamento com clientes.",
    icon: "⇧",
  },
  {
    badge: "Serviços / consultoria",
    title: "Agenda qualificada via campanhas digitais",
    text:
      "Definição de oferta, landing page e campanhas segmentadas, com integração ao WhatsApp e rotina de follow-up estruturada.",
    metric: "Menos tempo apagando incêndio, mais foco na entrega.",
    icon: "⏱",
  },
  {
    badge: "Negócio local",
    title: "Presença digital alinhada à identidade da marca",
    text:
      "Construção de site, organização de redes sociais e padronização de comunicação, fortalecendo a marca e abrindo novos canais de contato.",
    metric: "Mais confiança, mais indicações e mais oportunidades.",
    icon: "⭐",
  },
];

function Cases() {
  return (
    <section id="cases">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-kicker">
              Resultados e projetos
            </span>
            <h2 className="section-title">
              Alguns exemplos do tipo de impacto que buscamos
            </h2>
            <p className="section-subtitle">
              Cada negócio tem um contexto. Os números abaixo são
              ilustrativos do tipo de transformação que
              construímos quando estratégia, tecnologia e operação
              trabalham juntas.
            </p>
          </div>
        </Reveal>

        <div className="cases-grid">
          {cases.map((c, idx) => (
            <Reveal
              key={c.title}
              delay={idx + 1}
            >
              <article className="case-card">
                <div className="case-badge">{c.badge}</div>
                <h3 className="case-title">{c.title}</h3>
                <p>{c.text}</p>
                <div className="case-metric">
                  <span>{c.icon}</span>
                  <span>{c.metric}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;