
import { useState } from 'react';
import '../App.css';

function Header() {
  const [activeLink, setActiveLink] = useState('Home'); // 'Home' is the default active link
  const handleLinkClick = (link) => {
    setActiveLink(link); // Atualiza o link ativo
  }
  return (
    <div className="Header">
      <header className="App-header">
      <nav className="Navbar">
        <h1>4USERS</h1>
        <ul>
            {['Home', 'Serviços', 'Sobre', 'Equipe', 'Contato'].map((link) => (
              <a
                href="/#"
                key={link}
                className={`App-link ${activeLink === link ? 'active' : ''} ${link === 'Contato' ? 'special' : ''}`} // Classe ativa
                onClick={() => handleLinkClick(link)} // Define o link ativo
              >
                <li>{link}</li>
              </a>
            ))}
        </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
