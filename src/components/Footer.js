import React from 'react';
import siteData from '../data/siteData.json';

const Footer = () => {
  const { company, founder } = siteData;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: '#333',
      color: '#fff',
      padding: '3rem 0 1.5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1.5rem',
              color: 'var(--primary-color)'
            }}>FastDev DZ</h3>
            <p style={{ marginBottom: '1rem', opacity: '0.7' }}>
              {company.description.substring(0, 120)}...
            </p>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1.5rem',
              color: 'var(--primary-color)'
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <a href="#home" style={{ color: '#fff', textDecoration: 'none', opacity: '0.7' }}>Home</a>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <a href="#services" style={{ color: '#fff', textDecoration: 'none', opacity: '0.7' }}>Services</a>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <a href="#about" style={{ color: '#fff', textDecoration: 'none', opacity: '0.7' }}>About</a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#fff', textDecoration: 'none', opacity: '0.7' }}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1.5rem',
              color: 'var(--primary-color)'
            }}>Contact</h4>
            <p style={{ marginBottom: '0.8rem', opacity: '0.7' }}>{company.location}</p>
            <p style={{ marginBottom: '0.8rem', opacity: '0.7' }}>{company.contactEmail}</p>
            <p style={{ opacity: '0.7' }}>{company.contactPhone}</p>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>
            © {currentYear} {company.name}. All rights reserved. Founded by {founder.name}, {founder.title}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
