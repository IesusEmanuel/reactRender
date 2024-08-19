import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div class="logo">Minha Loja</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}

export default Header;