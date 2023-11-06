import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./components.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="link">
        <h1>
          <span style={{ color: "#427D9D" }}>Urban</span>
          <span style={{ color: "#363062" }}>Nest</span>
        </h1>
      </Link>
      <form action="">
        <input type="text" name="" id="" placeholder="Search..." />
        <FaSearch id="search-icon" />
      </form>
      <div className="nav link">
        <Link to={"/"} className="link">
          <div className="navigate">Home</div>
        </Link>
        <Link to={"/about"} className="link">
          <div className="navigate">About</div>
        </Link>
        <Link to={"/signin"} className="link">
          <button>Sign In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
