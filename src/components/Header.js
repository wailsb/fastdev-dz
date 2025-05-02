import React, { useState } from 'react';
import siteData from '../data/siteData.json';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { company } = siteData;

  return (
    <header style={{ 
      background: 'var(--gradient-bg)', 
      color: 'var(--text-light)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
          <span>{company.name}</span>
        </div>

        <div className="mobile-menu" style={{ display: 'none' }} onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav style={{ 
          display: 'flex',
          gap: '2rem'
        }}>
          <a href="#home" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '500' }}>Home</a>
          <a href="#services" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '500' }}>Services</a>
          <a href="#about" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '500' }}>About</a>
          <a href="#testimonials" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '500' }}>Testimonials</a>
          <a href="#contact" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
