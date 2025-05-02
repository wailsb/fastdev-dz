import React from 'react';
import siteData from '../data/siteData.json';

const Services = () => {
  const { services } = siteData;
  
  // Icons mapping (simple version for now, without importing icons)
  const getIconContent = (iconName) => {
    switch(iconName) {
      case 'web': return '🌐';
      case 'mobile': return '📱';
      case 'design': return '🎨';
      case 'transform': return '⚡';
      default: return '🔧';
    }
  };
  
  return (
    <section id="services" style={{
      padding: '5rem 0',
      background: '#f9f9f9'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ 
            display: 'inline-block',
            marginBottom: '1rem' 
          }}>Our Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            We provide cutting-edge solutions to help your business grow in the digital landscape.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {services.map(service => (
            <div key={service.id} className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              height: '100%'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                background: 'var(--gradient-bg)',
                color: 'white',
                width: '70px',
                height: '70px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px'
              }}>
                {getIconContent(service.icon)}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
              <p style={{ color: '#666', flex: '1' }}>{service.description}</p>
              <a href="#contact" style={{
                marginTop: '1.5rem',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                Learn more 
                <span style={{ marginLeft: '5px' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
