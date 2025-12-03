function Footer() {
  const year = new Date().getFullYear();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          {/* Bloco de informações da empresa */}
          <div>
            <strong>
              GP Labs – Marketing, Tecnologia &amp; Automação
            </strong>
            <div className="footer-info">
              Orizona – Goiás • Atendemos empresas em todo o Brasil.
              <br />
              CNPJ: 40.682.864/0001-55
            </div>
          </div>

          {/* Links de navegação */}
          <div className="footer-links">
            <button onClick={() => scrollToId("servicos")}>Serviços</button>
            <button onClick={() => scrollToId("processo")}>Como atuamos</button>
            <button onClick={() => scrollToId("cases")}>Resultados</button>
            <button onClick={() => scrollToId("clientes")}>Clientes</button>
            <button onClick={() => scrollToId("contato")}>Contato</button>
          </div>

          {/* Redes sociais */}
          <div className="footer-social">
            <a
              href="https://instagram.com/gplabsbrasil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram GP Labs"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://facebook.com/gplabsbrasil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook GP Labs"
            >
              <i className="ri-facebook-circle-line"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} GP Labs. Todos os direitos reservados.</span>
          <span className="footer-holding">
            Uma empresa GP Holding Participações Ltda.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
