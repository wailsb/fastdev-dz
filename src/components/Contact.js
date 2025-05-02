import React from 'react';
import siteData from '../data/siteData.json';

const Contact = () => {
  const { company } = siteData;
  
  return (
    <section id="contact" style={{
      padding: '5rem 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ 
            display: 'inline-block',
            marginBottom: '1rem' 
          }}>Get In Touch</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            Have a project in mind? Let's discuss how FastDev DZ can help bring your vision to reality.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          <div className="card" style={{
            background: 'var(--gradient-bg)',
            color: 'white'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem',
              marginBottom: '1.5rem'
            }}>Contact Information</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Address:</p>
              <p>{company.location}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Email:</p>
              <p>{company.contactEmail}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Phone:</p>
              <p>{company.contactPhone}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Website:</p>
              <p>
                <a href={company.website} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   style={{
                     color: 'white',
                     textDecoration: 'underline'
                   }}
                >
                  {company.website.replace('https://', '')}
                </a>
              </p>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{ 
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: 'var(--primary-color)'
            }}>Send Us a Message</h3>
            
            <form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <label 
                  htmlFor="name" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#555',
                    fontSize: '0.9rem'
                  }}
                >
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#555',
                    fontSize: '0.9rem'
                  }}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#555',
                    fontSize: '0.9rem'
                  }}
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
