import "./hero-component.css";

export default function HeroComponent() {
  return (
    <div className="hero-container">
      <div className="left-side-hero">
        <div>
          <h1>
            Find The Best <br />
            Creative Talent <br />
            On One Convenient <br />
            Platform.
          </h1>

          <div className="buttons-block">
            <button>Join Now</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>

      <div className="right-side-hero">
        <img
          src="https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          width="700px"
        />
      </div>
    </div>
  );
}
