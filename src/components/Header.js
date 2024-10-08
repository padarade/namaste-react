import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const { loggedinUser } = useContext(UserContext);

  // Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between shadow-lg bg-pink-50 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="logo w-36" src={LOGO_URL} alt="Food app" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          {/* anchor tag Loads complete Ui */}
          {/* <li><a href="/about">About</a></li> */}
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart({cartItems?.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4"> {loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
