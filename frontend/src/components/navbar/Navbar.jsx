import React, { useState, useReducer, useEffect } from "react";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

import records from "../../data/subnav.json";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navbar.scss";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import UserOptions from "../layout/header/UserOptions/UserOptions";

const Navbar = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, true);

  const [isId, setId] = useState("");

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [keyword, setKeyword] = useState("");

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSubmitSearch = () => {
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/shop");
    }
  };

  const handleDisplaySubnav = (e) => {
    setId(e.target.id);
    // console.log(isId);
    dispatch();
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function reducer(state, action) {
    return (state = !state);
  }

  function scrollFunction() {
    console.log(window.innerWidth)
    if (
      window.innerWidth <= 800 ||
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("logotext").style.fontSize = "2vh";
    }
    else {
      document.getElementById("logotext").style.fontSize = "4vh";
    }
  }

  window.onchange = function () {
    if (
      window.innerWidth <= 600
    ) {
      document.getElementById("logotext").style.fontSize = "3vh";
    }
    else {
      document.getElementById("logotext").style.fontSize = "4vh";
    }
  };


  return (
    <nav className="container">
      <div id="flash" className="content">
        <span className="text_shadows">FREE SHIPPING AND EASY RETURNS</span>
      </div>

      <div id="layer1">
        <div className="search-container">
          <div className="search-icon" onClick={handleSearchIconClick}>
            <BsSearch size={20}></BsSearch>
          </div>

          <div className={`search-bar ${isSearchOpen ? "open" : ""}`}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setKeyword(e.target.value);
                handleSubmitSearch();
              }}
            />
            <button
              type="submit"
              onClick={handleSubmitSearch}
              className="searchButton"
            >
              Search
            </button>
          </div>
        </div>
        {/* <div className="hamburger">
          <HamburgerMenu />
        </div> */}

        <div id="logo">
          <Link to="/">
            <h1 id="logotext">OPULENT ORNAMENTS</h1>
          </Link>
        </div>

        <div className="rightNav">
          {isAuthenticated ? (
            <div className="cartAndDial">
              <Link to="/cart">
                <div className="user-action">
                  <HiOutlineShoppingBag size={25} />
                </div>
              </Link>
              <div className="dial">
                <UserOptions user={user} />
              </div>
            </div>
          ) : (
            // <div>
            //   <Link to="/cart">
            //     <div className="user-action">
            //       <HiOutlineShoppingBag size={25} />
            //     </div>
            //   </Link>
            //   <Link to="/login">
            //     <div className="user-action">
            //       <AiOutlineUser size={25} />
            //     </div>
            //   </Link>
            // </div>
            <Link to="/login">
              <div className="user-action">
                <AiOutlineUser size={25} />
              </div>
            </Link>
          )}
        </div>
      </div>

      <hr
        style={{
          marginTop: "0px",
          color: "gray",
          opacity: 0.5,
        }}
      />

      <div id="subnav">
        {records &&
          records.map((record) => {
            return (
              <div
                key={record.id}
                id={record.id}
                className="item"
                onMouseEnter={handleDisplaySubnav}
                onMouseLeave={handleDisplaySubnav}
              >
                {record.name}
              </div>
            );
          })}
      </div>

      <hr
        style={{
          marginTop: "0px",
          color: "gray",
          opacity: 0.5,
        }}
      />

      <div className="subnav-dropdown">
        {records &&
          records.map((record) => {
            if (isId === record.id) {
              return (
                record.children &&
                record.children.map((child) => {
                  return !state && <div key={child.id}>{child.heading}</div>;
                })
              );
            }
          })}
      </div>

      <div className="content-fixed"></div>
    </nav>
  );
};

export default Navbar;
