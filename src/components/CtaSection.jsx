import Reveal from "./Reveal.jsx";
import ContactForm from "./ContactForm.jsx";

function CtaSection() {
  const goWhats = () => {
    const url =
      "https://wa.me/556499989978?text=" +
      encodeURIComponent(
        "Olá GP Labs, quero conversar sobre estratégia digital."
      );
    window.location.href = url;
  };

  return (
    <section id="contato">
      <div className="container">
        <div className="cta-grid">
          <Reveal>
            <div className="cta-text">
              <h2 className="cta-title">
                Vamos transformar seu digital em um laboratório de resultados?
              </h2>
              <p className="cta-subtitle">
                Conte um pouco da sua empresa, de onde vêm seus clientes hoje
                e para onde você quer ir. A partir disso, montamos um plano
                inicial e mostramos por onde começar.
              </p>

              <button className="btn-whatsapp" onClick={goWhats}>
                <span>💬</span>
                <span>Chamar no WhatsApp</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
