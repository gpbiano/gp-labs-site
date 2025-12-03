// src/components/ContactForm.jsx
import { useState } from "react";

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => setSent(true))
      .catch(() => alert("Erro ao enviar, tente novamente."));
  };

  if (sent) {
    return (
      <div className="form-success">
        <h3>Mensagem enviada com sucesso! 🎉</h3>
        <p>Obrigado por entrar em contato. Vamos responder o quanto antes!</p>
      </div>
    );
  }

  return (
    <form
      name="contato-gp-labs"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <input type="hidden" name="form-name" value="contato-gp-labs" />

      <div className="form-group">
        <label>Nome</label>
        <input type="text" name="nome" required />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" required />
      </div>

      <div className="form-group">
        <label>WhatsApp</label>
        <input type="text" name="whatsapp" required />
      </div>

      <div className="form-group">
        <label>Sobre sua empresa</label>
        <textarea name="mensagem" rows="5" required />
      </div>

      <button type="submit" className="btn-primary">
        Enviar mensagem
      </button>
    </form>
  );
}

export default ContactForm;

