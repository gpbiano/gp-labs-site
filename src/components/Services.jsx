import Reveal from "./Reveal.jsx";

const services = [
  {
    icon: "🧭",
    title: "Estratégia digital & jornada do cliente",
    text:
      "Mapeamos a jornada do seu cliente, definimos posicionamento, proposta de valor e desenhamos o funil ideal para seu negócio (agro, serviços ou e-commerce).",
    tags: ["Planejamento", "Funis", "Posicionamento"],
  },
  {
    icon: "🌐",
    title: "Sites e landing pages que convertem",
    text:
      "Criamos ou ajustamos seu site e páginas de captura com foco em geração de leads, agendamento e venda. Tudo alinhado com a identidade GP Holding.",
    tags: ["Landing pages", "SEO básico", "Formulários & integrações"],
  },
  {
    icon: "💬",
    title: "WhatsApp, chatbots & automação",
    text:
      "Integramos WhatsApp Business API, criamos fluxos de atendimento, mensagens automáticas, campanhas segmentadas e organizamos o histórico de conversas.",
    tags: ["WhatsApp API", "Chatbots", "Fluxos automatizados"],
  },
  {
    icon: "📈",
    title: "Tráfego pago & campanhas",
    text:
      "Gestão de campanhas em Meta Ads e Google Ads com foco em lead qualificado, mensuração de ROI e integração com seu funil de WhatsApp e site.",
    tags: ["Meta Ads", "Google Ads", "Conversão"],
  },
  {
    icon: "📲",
    title: "Conteúdo & social media estratégico",
    text:
      "Planejamos e produzimos conteúdos alinhados com o posicionamento da marca, reforçando autoridade e gerando oportunidades no digital.",
    tags: ["Instagram", "Reels", "Branding"],
  },
  {
    icon: "📊",
    title: "Dados, relatórios & melhoria contínua",
    text:
      "Construímos uma rotina de análise com dashboards simples, relatórios mensais e decisões baseadas em dados – não em achismo.",
    tags: ["Dashboards", "KPIs", "QBR & revisão"],
  },
];

function Services() {
  return (
    <section id="servicos">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-kicker">
              O que fazemos na prática
            </span>
            <h2 className="section-title">
              Serviços da GP Labs
            </h2>
            <p className="section-subtitle">
              Atuamos desde a estratégia até a operação diária –
              cuidando de site, campanhas, WhatsApp e dados – para
              você ter previsibilidade de vendas sem viver apagando
              incêndio.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <Reveal
              key={svc.title}
              delay={(idx % 3) + 1}
            >
              <article className="card">
                <div className="card-icon">
                  {svc.icon}
                </div>
                <h3 className="card-title">
                  {svc.title}
                </h3>
                <p className="card-text">{svc.text}</p>
                <div className="card-tags">
                  {svc.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;