import "./logo-banner.css";

export default function LogoBanner() {
  return (
    <section className="featured-on-section">
      <p>
        <strong>Some Of Our Clients...</strong>
      </p>
      <div className="featured-on-section-container">
        <img
          src="https://www.pngall.com/wp-content/uploads/2018/05/Disney-Logo-PNG-Pic.png"
          className="featured-on-section-container-img"
          id="disney-logo-image"
          alt="Disney Logo"
        ></img>
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png"
          className="featured-on-section-container-img"
          id="google-logo-image"
          alt="Google Logo"
        ></img>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/warner-bros-logo-black-and-white.png"
          className="featured-on-section-container-img"
          id="warner-bros-logo-image"
          alt="Warner Bros Logo"
        ></img>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/square-enix-1-logo-svg-vector.svg"
          className="featured-on-section-container-img"
          id="square-enix-logo-image"
          alt="Square Enix Logo"
        ></img>
      </div>
      <div className="featured-on-section-overlay-container"></div>
    </section>
  );
}
