import "./styles.css";
import Navbar from "./navbar.js";
import HeroComponent from "./hero-component";
import LogoBanner from "./logo-banner";
import GallerySection from "./gallery-section";
import Footer from "./footer";
import Background from "./background.js";

export default function App() {
  return (
    <div className="App">
      <section className="background">
        <Background />
      </section>

      <section className="navbar">
        <Navbar />
      </section>

      <section className="hero-section">
        <HeroComponent />
      </section>

      <section className="logo-banner">
        <LogoBanner />
      </section>

      <section className="gallery">
        <GallerySection />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}
