import Reveal from "./Reveal.jsx";

function ProcessSection() {
  return (
    <section id="processo">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-kicker">
              Como atuamos
            </span>
            <h2 className="section-title">
              Um laboratório ao lado do seu negócio, não um
              fornecedor distante
            </h2>
            <p className="section-subtitle">
              Em vez de entregar apenas posts ou campanhas soltas,
              trabalhamos por ciclos: diagnóstico, desenho de
              estratégia, implementação e revisão contínua de
              resultados.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          <div className="process-steps">
            <Reveal delay={1}>
              <div className="step">
                <div className="step-number">1</div>
                <div>
                  <div className="step-title">
                    Imersão e diagnóstico
                  </div>
                  <p className="step-text">
                    Entendemos seu momento, produtos, ofertas,
                    canais atuais, histórico de campanhas e metas
                    reais (não só curtidas). Mapeamos gargalos e
                    oportunidades rápidas.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="step">
                <div className="step-number">2</div>
                <div>
                  <div className="step-title">
                    Desenho do funil e estratégia
                  </div>
                  <p className="step-text">
                    Definimos a jornada ideal: de onde vêm os
                    leads, como chegam até você, quais automações
                    serão ativadas e qual rotina de conteúdo e
                    campanhas faz sentido.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="step">
                <div className="step-number">3</div>
                <div>
                  <div className="step-title">
                    Implementação &amp; automação
                  </div>
                  <p className="step-text">
                    Colocamos o plano em prática: site/landing,
                    integrações com WhatsApp, chatbots, campanhas,
                    mensagens automáticas e ajustes finos de copy
                    e design.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="step">
                <div className="step-number">4</div>
                <div>
                  <div className="step-title">
                    Acompanhamento e evolução
                  </div>
                  <p className="step-text">
                    Monitoramos resultados, apresentamos relatórios
                    e ajustamos a estratégia. A ideia é construir
                    previsibilidade, não depender de “sorte” ou
                    viral.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <aside className="process-panel">
              <h3>O que você passa a ter com a GP Labs</h3>
              <p>
                • Clareza de funil e de prioridades.
                <br />
                • Time que fala a linguagem de negócio (e não só
                de marketing).
                <br />
                • Canal de WhatsApp organizado e integrado ao
                resto da operação.
                <br />
                • Site alinhado com sua proposta de valor e pronto
                para receber tráfego.
                <br />
                • Rotina de análise com indicadores simples e
                objetivos.
              </p>

              <div className="process-kpis">
                <div className="kpi">
                  <span className="value">
                    + leads qualificados
                  </span>
                  <span className="label">
                    Foco em qualidade, não só volume.
                  </span>
                </div>
                <div className="kpi">
                  <span className="value">
                    + previsibilidade
                  </span>
                  <span className="label">
                    Ciclos de evolução a cada mês.
                  </span>
                </div>
                <div className="kpi">
                  <span className="value">
                    + visão de dados
                  </span>
                  <span className="label">
                    Relatórios claros e acionáveis.
                  </span>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;