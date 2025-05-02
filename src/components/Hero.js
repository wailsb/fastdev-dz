import React from 'react';
import siteData from '../data/siteData.json';

const Hero = () => {
  const { company, founder } = siteData;
  
  return (
    <section id="home" style={{
      background: 'var(--gradient-bg)',
      color: 'var(--text-light)',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        zIndex: '0'
      }}></div>
      
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '60vh',
        position: 'relative',
        zIndex: '1'
      }}>
        <span style={{
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.9rem',
          marginBottom: '1rem'
        }}>Welcome to {company.name}</span>
        
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          maxWidth: '700px'
        }}>{company.tagline}</h1>
        
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          opacity: '0.9'
        }}>{company.description}</p>
        
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-outline" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'var(--text-light)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>Contact Us</a>
        </div>
        
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <div style={{
            marginRight: '1rem'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--secondary-color)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>WSB</div>
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Founded by</p>
            <h3>{founder.name}</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>{founder.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
