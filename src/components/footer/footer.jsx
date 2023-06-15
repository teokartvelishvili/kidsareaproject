import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          {" "}
          <Link to={"/AboutUS"}> ჩვენს შესახებ </Link>
        </li>
        <li>
          {" "}
          <a href="url"> კონტაქტი </a>
        </li>
        <li>
          {" "}
          <a href="url"> Cookie policy </a>
        </li>
      </ul>
    </div>
  );
}