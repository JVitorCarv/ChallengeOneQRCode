import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PREFIX_PATH } from "../helper/constants";
import { StyledHeader } from "../styles";
import BasicMenu from "./MenuHeader";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("Instruções de Uso");

  const deltaPng = `${PREFIX_PATH}/assets/delta.png`;

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Instruções de Uso");
        break;
      case "/reader-qrcode":
        setTitle("Leitor de QR Code");
        break;
      case "/create-qrcode":
        setTitle("Geração do QR Code");
        break;
      default:
        setTitle("Pedido de Manutenção");
    }
  }, [location]);

  const handleHome = () => {
    navigate(`${PREFIX_PATH}/`);
  };

  return (
    <StyledHeader>
      <div className="content">
        <div className="content-left">
          <div className="image-container" onClick={handleHome}>
            <img src={deltaPng} alt="logo" />
          </div>
          <h1>{title} </h1>
        </div>
        <BasicMenu></BasicMenu>
      </div>
    </StyledHeader>
  );
}

export default Header;
