import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Shore's Car Repairs Shop</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
