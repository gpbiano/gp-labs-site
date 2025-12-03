import Reveal from "./Reveal.jsx";

function Hero() {
  const goWhats = (msg) => {
    const url =
      "https://wa.me/556499989978?text=" +
      encodeURIComponent(msg);
    window.location.href = url;
  };

  const scrollToServices = () => {
    const el = document.getElementById("servicos");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <Reveal>
            <div className="hero-left">
              <div className="badge">
                <span className="badge-dot" />
                <span>
                  Laboratório de crescimento digital da GP
                  Holding
                </span>
              </div>

              <h1>
                Estratégia,{" "}
                <span className="highlight">tecnologia</span> e
                automação para o seu negócio vender todos os
                dias.
              </h1>

              <p className="hero-subtitle">
                A GP Labs conecta marketing, dados e automação
                (WhatsApp, sites e campanhas) para criar
                jornadas que geram leads qualificados,
                relacionamento e vendas previsíveis para
                negócios do agro, serviços e e-commerce.
              </p>

              <div className="hero-cta">
                <button
                  className="btn-primary"
                  onClick={() =>
                    goWhats(
                      "Olá GP Labs, quero uma estratégia digital para minha empresa."
                    )
                  }
                >
                  Quero uma estratégia sob medida
                </button>

                <button
                  className="btn-outline"
                  onClick={scrollToServices}
                >
                  Ver serviços <span>↓</span>
                </button>
              </div>

              <div className="hero-meta">
                <div>
                  <span className="label">Foco</span>
                  <span className="value">
                    WhatsApp, sites &amp; campanhas
                  </span>
                </div>
                <div>
                  <span className="label">Modelo</span>
                  <span className="value">
                    Planejamento + Execução + Dados
                  </span>
                </div>
                <div>
                  <span className="label">Local</span>
                  <span className="value">
                    Orizona – GO • Brasil
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="hero-visual">
              <div className="hero-orbit" />
              <div className="hero-card">
                <span className="hero-badge-floating">
                  Dashboard GP Labs
                </span>

                <div className="hero-metric">
                  <div>
                    <h2>Performance em tempo real</h2>
                    <span>
                      Acompanhamos campanhas, chats e fluxo de
                      vendas em um único lugar.
                    </span>
                  </div>
                  <div className="hero-metric-side">
                    <span className="metric-main">
                      +32% leads
                    </span>
                    <br />
                    <span className="metric-sub">
                      média em 90 dias
                    </span>
                  </div>
                </div>

                <div className="hero-pill-row">
                  <div className="pill">
                    <span className="spark" />
                    <span>Funis no WhatsApp</span>
                  </div>
                  <div className="pill">
                    <span className="spark" />
                    <span>Sites que viram agenda cheia</span>
                  </div>
                  <div className="pill">
                    <span className="spark" />
                    <span>Relatórios inteligentes</span>
                  </div>
                </div>

                <div className="hero-dashboard">
                  <div className="dash-header">
                    <span className="dash-title">
                      Fluxo de atendimento – WhatsApp
                    </span>
                    <span className="dash-status">
                      Online
                    </span>
                  </div>
                  <div className="dash-bars">
                    <div className="dash-bar dash-bar-green" />
                    <div className="dash-bar dash-bar-orange" />
                    <div className="dash-bar dash-bar-blue" />
                  </div>
                  <div className="dash-footer">
                    <span>Novos leads hoje</span>
                    <span className="dash-value">27</span>
                  </div>
                </div>

                <div className="hero-status">
                  <span>
                    Implementamos{" "}
                    <strong>
                      plano, execução e rotina de análise
                    </strong>{" "}
                    lado a lado com você.
                  </span>
                </div>

                <div className="hero-floating-tag">
                  <span className="icon">⚡</span>
                  <span>
                    Onboarding completo em até 15 dias.
                  </span>
                </div>
              </div>

              <div className="hero-orbit-dot orbit-dot-1" />
              <div className="hero-orbit-dot orbit-dot-2" />
              <div className="hero-orbit-dot orbit-dot-3" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;