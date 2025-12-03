import { useState } from "react";
import gpLabsLogo from "../assets/logos/gp-labs.png"; // <-- AQUI É O LUGAR CORRETO

function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goWhats = (msg) => {
    const url =
      "https://wa.me/556499989978?text=" +
      encodeURIComponent(msg);
    window.location.href = url;
  };

  return (
    <header>
      <div className="container">
        <nav className="nav">

          {/* LOGO */}
          <button
            className="logo"
            onClick={() => scrollToId("topo")}
          >
            <img src={gpLabsLogo} alt="GP Labs" className="logo-img" />
          </button>

          {/* LINKS DESKTOP */}
          <div className="nav-links">
            <button onClick={() => scrollToId("quem-somos")}>Quem somos</button>
            <button onClick={() => scrollToId("servicos")}>Serviços</button>
            <button onClick={() => scrollToId("processo")}>Como atuamos</button>
            <button onClick={() => scrollToId("cases")}>Resultados</button>
            <button onClick={() => scrollToId("clientes")}>Clientes</button>
            <button onClick={() => scrollToId("contato")}>Contato</button>
            

            <button
              className="btn-primary"
              onClick={() =>
                goWhats("Olá GP Labs, quero acelerar meu negócio.")
              }
            >
              Falar com especialista
            </button>

            {/* REDES SOCIAIS */}
            <div className="nav-social">
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

          {/* BOTÃO MOBILE */}
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Abrir menu"
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* MENU MOBILE */}
        <div
          className={"nav-links-mobile" + (open ? " show" : "")}
          id="navMobile"
        >
          <button onClick={() => scrollToId("quem-somos")}>Quem somos</button>
          <button onClick={() => scrollToId("servicos")}>Serviços</button>
          <button onClick={() => scrollToId("processo")}>Como atuamos</button>
          <button onClick={() => scrollToId("cases")}>Resultados</button>
          <button onClick={() => scrollToId("clientes")}>Clientes</button>
          <button onClick={() => scrollToId("contato")}>Contato</button>
          

          <button
            className="btn-primary mobile-cta"
            onClick={() =>
              goWhats("Olá GP Labs, quero acelerar meu negócio.")
            }
          >
            Falar com especialista
          </button>

          {/* REDES SOCIAIS MOBILE */}
          <div className="nav-social mobile-social">
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
      </div>
    </header>
  );
}

export default Header;
