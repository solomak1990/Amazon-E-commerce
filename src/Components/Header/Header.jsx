import React, { useContext } from "react";
import classes from "./header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <div className={classes.header_container}>
      <div className={classes.logo_container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          
      <div className={classes.delivery}>
            <span>
              <CiLocationOn />
            </span>
            <div>
              <p>Deliverd to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
       
          {/* search Section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoSearch size={25} />
          </div>

        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            
              <p>Sign In</p>
              <span>Account & Lists</span>
             
          </a>
          <a href="">
            
              <p>returns</p>
              <span>& Orders</span>
           
          </a>
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  
  );
}

export default Header;
