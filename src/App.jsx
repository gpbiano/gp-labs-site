import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import Cases from "./components/Cases.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Clients from "./components/Clients.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main id="topo">
        <Hero />
        <Services />
        <ProcessSection />
        <Cases />
        <Clients />
        <About />
        <CtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
