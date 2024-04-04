// import React, { useState, useReducer } from 'react'
// import "./hamburger.scss"
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
// import { AiOutlineUser } from "react-icons/ai";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import UserOptions from "../layout/header/UserOptions/UserOptions";



// const HamburgerMenu = () => {

//     const [isSearchOpen, setIsSearchOpen] = useState(false);

//     const [keyword, setKeyword] = useState("");
//     const { isAuthenticated, user } = useSelector((state) => state.user);

//     const navigate = useNavigate();


//     const handleSearchIconClick = () => {
//         setIsSearchOpen(!isSearchOpen);
//     };

//     const handleSubmitSearch = () => {
//         if (keyword.trim()) {
//             navigate(`/products/${keyword}`);
//         } else {
//             navigate("/shop");
//         }
//     };

//     return (
//         <nav role="navigation">
//             <div id="menuToggle">

//                 <input type="checkbox" />


//                 <span></span>
//                 <span></span>
//                 <span></span>


//                 <div id="menu">

//                     {/* <div className="dial">
//                         <UserOptions user={user} />
//                     </div> */}
//                     <div className="ham-search-container">
//                         <div className="ham-search-icon" onClick={handleSearchIconClick}>
//                             <BsSearch size={20}></BsSearch>
//                         </div>

//                         <div className={`ham-search-bar ${isSearchOpen ? "open" : ""}`}>
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 onChange={(e) => setKeyword(e.target.value)}
//                                 id='ham-input'
//                             />
//                             <button
//                                 type="submit"
//                                 onClick={handleSubmitSearch}
//                                 className="ham-searchButton"
//                             >
//                                 Search
//                             </button>
//                             {/* Add search functionality here */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default HamburgerMenu

import React from 'react'

const HamburgerMenu = () => {
    return (
        <div>HamburgerMenu</div>
    )
}

export default HamburgerMenu