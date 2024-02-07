import { useState } from "react";
import { Link } from "react-router-dom";
import { close, companyLogo, hamburgerMenu, lock } from "../assets";
import { ROUTESCONSTANTS } from "../constants/Routes";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full h-[80px] bg-white border-b fixed z-50">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <Link to="/">
          <img src={companyLogo} className="h-[50px]" />
        </Link>
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>
              <Link to={ROUTESCONSTANTS.home}>Home</Link>
            </li>
            <li>
              <Link to={ROUTESCONSTANTS.tracking}>Tracking</Link>
            </li>
            <li>
              <Link to={ROUTESCONSTANTS.reports}>Reports</Link>
            </li>
            <li>
              <Link to={ROUTESCONSTANTS.operation}>Operation</Link>
            </li>
            <li>
              <Link to={ROUTESCONSTANTS.admin}>Admin</Link>
            </li>
            <li>
              <Link to={ROUTESCONSTANTS.accounting}>Accounting</Link>
            </li>
            <li>
              <Link to={ROUTESCONSTANTS.serviceCharge}> Service-Charge</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            <img src={lock} />
            <Link to={ROUTESCONSTANTS.login}>Login</Link>
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
            <Link to={ROUTESCONSTANTS.register}>Sign Up For Free</Link>
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <Link to={ROUTESCONSTANTS.home}>Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to={ROUTESCONSTANTS.tracking}>Tracking</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to={ROUTESCONSTANTS.reports}>Reports</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            {" "}
            <Link to={ROUTESCONSTANTS.operation}>Operation</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to={ROUTESCONSTANTS.admin}> Admin </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to={ROUTESCONSTANTS.accounting}> Accounting </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            {" "}
            <Link to={ROUTESCONSTANTS.serviceCharge}> Service-Charge</Link>
          </li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              <img src={lock} />
              <Link to={ROUTESCONSTANTS.login}>Login</Link>
            </button>
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              <Link to={ROUTESCONSTANTS.register}>Sign Up For Free</Link>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
