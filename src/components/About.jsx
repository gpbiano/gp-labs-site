function About() {
  return (
    <section id="quem-somos" className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="section-kicker">Quem somos</span>
          <h2 className="section-title">O laboratório digital da GP Holding</h2>
          <p className="section-subtitle">
            A GP Labs nasceu dentro da GP Holding Participações com a missão de acelerar
            resultados de negócios por meio de estratégia, tecnologia, automação e dados.
            Construímos operações digitais que geram previsibilidade — não sorte.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>Nossa essência</h3>
            <p>
              Somos um laboratório de inovação digital. Trabalhamos com metodologia,
              diagnósticos constantes, ciclos de evolução e decisões baseadas em dados.
              Nada é aleatório: cada ação tem propósito e impacto no funil de vendas.
            </p>
          </div>

          <div className="about-card">
            <h3>Nosso modelo de atuação</h3>
            <p>
              Acompanhamos o cliente do início ao fim: site, campanhas, WhatsApp, CRM,
              automação, conteúdo e análise de indicadores. Integramos tudo em uma
              operação única — simples, eficiente e lucrativa.
            </p>
          </div>

          <div className="about-card">
            <h3>Nossos valores</h3>
            <ul className="about-list">
              <li>Estratégia acima de improviso</li>
              <li>Transparência e orientação por dados</li>
              <li>Crescimento sustentável e previsível</li>
              <li>Entrega real, não “fórmulas mágicas”</li>
              <li>Inovação contínua ao lado do cliente</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>O que entregamos na prática</h3>
            <ul className="about-list">
              <li>Sites e landing pages que realmente convertem</li>
              <li>Funis estruturados no WhatsApp + automações</li>
              <li>Campanhas inteligentes com rotina de análise</li>
              <li>Relatórios claros para tomada de decisão</li>
              <li>Operação digital completa para escalar vendas</li>
            </ul>
          </div>
        </div>

        <div className="about-footer">
          <p>
            A GP Labs é a unidade oficial de tecnologia, marketing e automação da{" "}
            <strong>GP Holding Participações Ltda.</strong>
            <br />
            Criamos estrutura digital para negócios do agro, serviços e e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;