import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="link-list">
        <a id="logo-text">
          <h1>Creative.ly</h1>
        </a>
        <a>Explore</a>
        <a>Create</a>
        <a>Sign In</a>
        <button>Join</button>
      </div>
    </nav>
  );
}
