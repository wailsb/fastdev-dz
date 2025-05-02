import React from 'react';
import siteData from '../data/siteData.json';

const About = () => {
  const { founder, company } = siteData;
  
  return (
    <section id="about" style={{
      padding: '5rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ 
            display: 'inline-block',
            marginBottom: '1rem' 
          }}>About Us</h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            background: 'var(--gradient-bg)',
            padding: '3rem',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            minHeight: '400px'
          }}>
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1.5rem',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }}>WSB</div>
            <h3 style={{ 
              fontSize: '1.8rem',
              marginBottom: '0.5rem' 
            }}>{founder.name}</h3>
            <p style={{ 
              fontSize: '1rem',
              marginBottom: '1.5rem',
              opacity: '0.9'
            }}>{founder.title}</p>
            <div style={{
              width: '40px',
              height: '4px',
              background: 'white',
              marginBottom: '1.5rem'
            }}></div>
            <p style={{ marginBottom: '1.5rem' }}>
              Visit my portfolio: 
              <a href={founder.portfolio} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{
                   color: 'white',
                   textDecoration: 'underline',
                   marginLeft: '5px'
                 }}
              >
                {founder.portfolio.replace('https://', '')}
              </a>
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <a href="#contact" className="btn" style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none'
              }}>Contact Me</a>
            </div>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: 'var(--primary-color)'
            }}>Our Vision</h3>
            <p style={{ 
              marginBottom: '1.5rem',
              color: '#666',
              fontSize: '1.1rem'
            }}>
              {founder.bio}
            </p>
            <div style={{
              marginTop: '2rem'
            }}>
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    background: 'var(--primary-color)',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}></span>
                  Location
                </h4>
                <p style={{ 
                  paddingLeft: '18px',
                  color: '#666'
                }}>{company.location}</p>
              </div>
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    background: 'var(--primary-color)',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}></span>
                  Email
                </h4>
                <p style={{ 
                  paddingLeft: '18px',
                  color: '#666'
                }}>{company.contactEmail}</p>
              </div>
              <div>
                <h4 style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    background: 'var(--primary-color)',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}></span>
                  Phone
                </h4>
                <p style={{ 
                  paddingLeft: '18px',
                  color: '#666'
                }}>{company.contactPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
