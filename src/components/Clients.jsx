import Reveal from "./Reveal.jsx";
import gpHoldingLogo from "../assets/logos/gp-holding.png";
import criatorioPeresLogo from "../assets/logos/criatorio-peres.png";
import gpLabsLogo from "../assets/logos/gp-labs.png";

function Clients() {
  return (
    <section id="clientes">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-kicker">Clientes & resultados</span>
            <h2 className="section-title">
              Negócios que confiam na GP Labs para conectar estratégia, tecnologia e atendimento
            </h2>
            <p className="section-subtitle">
              Atuamos junto a empresas do agro, serviços e negócios locais — organizando sites,
              campanhas, WhatsApp e dados para gerar vendas previsíveis.
            </p>
          </div>
        </Reveal>

        {/* ---------------- LOGOS ---------------- */}
        <Reveal delay={1}>
          <div className="clients-logo-grid">
            <div className="client-logo-card">
              <img
                src={gpHoldingLogo}
                alt="GP Holding"
                className="client-logo-img"
              />
              <span className="client-logo-sub">
                Ecossistema de empresas: agro, imóveis, marketing e tecnologia.
              </span>
            </div>

            <div className="client-logo-card">
              <img
                src={criatorioPeresLogo}
                alt="Criatório Peres"
                className="client-logo-img"
              />
              <span className="client-logo-sub">
                Bovinocultura & avicultura com foco em genética e bem-estar.
              </span>
            </div>

            <div className="client-logo-card">
              <img
                src={gpLabsLogo}
                alt="GP Labs"
                className="client-logo-img"
              />
              <span className="client-logo-sub">
                Laboratório digital interno da holding, testando e validando soluções.
              </span>
            </div>
          </div>
        </Reveal>

        {/* CASOS DE SUCESSO */}
        <div className="clients-cases-grid">
          <Reveal delay={1}>
            <article className="clients-case-card">
              <div className="clients-case-tag">Caso de sucesso</div>
              <h3 className="clients-case-title">Criatório Peres</h3>
              <p className="clients-case-body">
                Estruturamos um funil digital com site, fluxos de WhatsApp e rotina de campanhas
                para organizar pedidos, orçamentos e relacionamento com criadores de todo o Brasil.
              </p>
              <ul className="clients-case-list">
                <li>Site institucional com foco em confiança e transparência.</li>
                <li>WhatsApp como canal central de atendimento e vendas.</li>
                <li>Mensagens automáticas para novos contatos e pós-venda.</li>
              </ul>
              <p className="clients-case-result">
                <span>Resultado:</span> mais controle dos pedidos, menos improviso no atendimento e
                relacionamento mais próximo com os clientes.
              </p>
            </article>
          </Reveal>

          <Reveal delay={2}>
            <article className="clients-case-card">
              <div className="clients-case-tag">Caso de sucesso</div>
              <h3 className="clients-case-title">GP Holding</h3>
              <p className="clients-case-body">
                Construímos a presença digital integrada da holding, conectando sites, formulários,
                WhatsApp e rotinas de comunicação para cada empresa do grupo.
              </p>
              <ul className="clients-case-list">
                <li>Posicionamento e identidade digital unificada da holding.</li>
                <li>Sites e páginas para cada empresa do ecossistema.</li>
                <li>Jornadas de WhatsApp para relacionamento com parceiros e clientes.</li>
              </ul>
              <p className="clients-case-result">
                <span>Resultado:</span> visão mais clara dos canais digitais da holding, melhor
                experiência para quem chega e base pronta para escalar novos projetos.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Clients;