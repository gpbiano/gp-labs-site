import ContactForm from "./ContactForm.jsx";

function CtaSection() {
  return (
    <section id="contato">
      <div className="container">
        <div className="cta-grid">

          {/* =============================
               BLOCO DE TEXTO PRINCIPAL
             ============================= */}
          <div className="cta-text">
            <h2 className="cta-title">
              Vamos transformar seu digital em um laboratório de resultados?
            </h2>

            <p className="cta-subtitle">
              Conte um pouco da sua empresa, de onde vêm seus clientes hoje
              e para onde você quer ir. A partir disso montamos um plano inicial
              e mostramos por onde começar.
            </p>

            <button
              className="btn-whatsapp"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/556499989978?text=Ol%C3%A1%20GP%20Labs%2C%20quero%20conversar%20sobre%20estrat%C3%A9gia%20digital.")
              }
            >
              💬 Falar no WhatsApp
            </button>

            {/* =============================
                 BLOCO DE INFORMAÇÕES
               ============================= */}
            <div className="contact-info">
              <h3 className="contact-title">Atendimento GP Labs</h3>

              <p className="contact-desc">
                Prefere falar direto? Nos chame no WhatsApp ou envie um e-mail.
                Respondemos assim que saímos do computador ou do atendimento. 😊
              </p>

              <div className="contact-block">
                <h4 className="contact-label">WhatsApp</h4>
                <p className="contact-text">+55 64 99249-1682</p>
              </div>

              <div className="contact-block">
                <h4 className="contact-label">E-mail</h4>
                <p className="contact-text">contato@gplabs.com.br</p>
              </div>

              <div className="contact-block">
                <h4 className="contact-label">Endereço</h4>
                <p className="contact-text">
                  Avenida Portugal, nº 1148, Sala C 2501<br />
                  Setor Marista, Goiânia – GO<br />
                  CEP 74150-030
                </p>
              </div>

              <div className="contact-block">
                <h4 className="contact-label">Horário</h4>
                <p className="contact-text">
                  Segunda a sexta, das 09h às 18h.
                </p>
              </div>
            </div>
          </div>

          {/* =============================
               FORMULÁRIO
             ============================= */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}

export default CtaSection;

