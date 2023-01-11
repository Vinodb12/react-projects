import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navcomp = styled.div`
  display: flex;
  background-color: antiquewhite;
  color: darkviolet;
`;
const Activecmp = styled.div`
  border: 1px solid;
  padding: 10px;
  border-radius: 50px;
  background-color: skyblue;
`;
const Header = () => {
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setActive("sethome");
    } else if (location.pathname === "/add/:id") {
      setActive("setedit");
    } else if (location.pathname === "/about/:id") {
      setActive("setAbout");
    } else if (location.pathname === "/view/:id") {
      setActive("setview");
    }
  }, [location]);

  return (
    <Navcomp>
      <h4 style={{ marginLeft: "20px" }}>Contact app</h4>
      <div style={{ display: "flex", marginLeft: "800px", marginTop: "20px" }}>
        <div style={{ padding: "30px" }}>
          <Link to="/" onClick={() => setActive("sethome")}>
            {active === "sethome" ? <Activecmp>Home</Activecmp> : <a>Home</a>}
          </Link>
        </div>

        <div style={{ padding: "30px" }}>
          <Link to="/add/:id" onClick={() => setActive("setedit")}>
            {active === "setedit" ? (
              <Activecmp>Addedit</Activecmp>
            ) : (
              <a>Addedit</a>
            )}
          </Link>
        </div>

        <div style={{ padding: "30px" }}>
          <Link to="/about/:id" onClick={() => setActive("setAbout")}>
            {active === "setAbout" ? (
              <Activecmp>About</Activecmp>
            ) : (
              <a>About</a>
            )}
          </Link>
        </div>

        <div style={{ padding: "30px" }}>
          <Link to="/view/:id" onClick={() => setActive("setview")}>
            {active === "setview" ? (
              <Activecmp>View page</Activecmp>
            ) : (
              <a>View page</a>
            )}
          </Link>
        </div>
      </div>
    </Navcomp>
  );
};

export default Header;
