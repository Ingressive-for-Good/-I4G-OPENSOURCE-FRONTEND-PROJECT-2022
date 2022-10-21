import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/close-icon.png";
import rafiki from "../assets/images/rafiki.svg";

function App() {
  const toggleMenu = () => {
    const nav = document.getElementById("nav");
    const body = document.getElementById("body");
    // var navItems = document.querySelectorAll("nav a")
    body.style.overflowY = "hidden";
    nav.classList.toggle("hidden");
  };

  return (
    <div id="body" className="text-neutral-900 font-campton">
      {/* header and navigation */}
      <header className="relative bg-white px-8 py-9 flex items-center justify-between">
        <Link
          to="/"
          className="font-cabinetGrotesk text-primary-500 font-bold text-2xl"
        >
          tech
          <span className="text-secondary-500">mart</span>
        </Link>
        <div className="border-primary-500 border rounded-xl p-3 lg:hidden">
          <img
            className=""
            onClick={toggleMenu}
            id="hamburger"
            src={menuIcon}
            alt=""
          />
        </div>
        <nav
          id="nav"
          className="fixed h-screen lg:h-fit w-screen lg:w-fit flex hidden lg:relative z-100 top-0 lg:top-unset left-0 lg:left-unset bg-white lg:bg-transparent lg:flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-center items-center lg:space-x-5 text-neutral-700"
        >
          <img
            className="lg:hidden absolute top-12 right-16"
            onClick={toggleMenu}
            id="hamburger"
            src={closeMenuIcon}
            alt=""
          />
          <Link to="/">Home</Link>
          <a href="/#howitworks">How it Works</a>
          <a href="/#marketplace">Market Place</a>
          <a href="/#contactUs">Contact Us</a>
          <div className="mx-4 space-x-4">
            <Link className="text-primary-500 font-medium" to="/login">
              Log In
            </Link>
            <Link
              className="text-white text-sm rounded-lg px-5 py-3 bg-primary-500"
              to="/create-account"
            >
              Create an account
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex items-center justify-center flex-col h-[75vh] w-4/5 mx-auto">
        <img src={rafiki} alt="" />
        <h2 className="text-neutral-600 text-3xl my-5 font-medium">
          Sorry, page not found
        </h2>
        <p className="text-neutral-400 text-center">
          <span className="text-neutral-500">
            The page you are looking for doesn&apos;t exist or another error
            occured.
          </span>
          <br />
          Go back or head over to{" "}
          <Link to="/" className="hover:text-primary-500 transition-all">
            {" "}
            techmart.com{" "}
          </Link>{" "}
          to choose a new direction.
        </p>
      </main>
    </div>
  );
}

export default App;
