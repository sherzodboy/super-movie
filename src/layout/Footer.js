import React from "react";

function Footer() {
  return (
    <div className="footer">
      <nav className=" navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="##">
            <b>Copyright © {new Date().getFullYear()}</b> Footer
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
