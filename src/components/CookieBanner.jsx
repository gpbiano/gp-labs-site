import { useEffect, useState } from "react";

const STORAGE_KEY = "gpLabs_cookie_consent";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const moreInfo = () => {
    // Ajustar o link quando você tiver a página de Política de Privacidade
    const target = document.getElementById("politica-privacidade");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open("#", "_blank"); // placeholder
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <div className="cookie-text">
          <strong>Usamos cookies para melhorar sua experiência.</strong>
          <p>
            Ao continuar navegando, você concorda com o uso de cookies para estatística, segurança
            e funcionamento do site, em conformidade com a LGPD (Lei nº 13.709/2018). Para mais
            detalhes, consulte nossa{" "}
            <span className="cookie-link" onClick={moreInfo}>
              Política de Privacidade
            </span>{" "}
            e{" "}
            <span className="cookie-link" onClick={moreInfo}>
              Termos de Uso
            </span>
            .
          </p>
        </div>
        <div className="cookie-actions">
          <button
            className="btn-cookie-outline"
            type="button"
            onClick={moreInfo}
          >
            Saiba mais
          </button>
          <button
            className="btn-cookie-primary"
            type="button"
            onClick={acceptCookies}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;