import React from "react";

import { Link } from "react-router-dom";

import Logo from "./Logo";

const Header = ({ currentPage }) => {

  const headerClass = `header header-${currentPage}`;

  return (
    <header className={headerClass}>
      <li>
        <Logo text="hackJudge" />
      </li>
      {currentPage !== "login" && (
        <li className="logout-button">
          <Link to="/">Logout</Link>
        </li>
      )}
    </header>
  );
};

export default Header;
