import React from 'react';
import siteData from '../data/siteData.json';

const Testimonials = () => {
  const { testimonials } = siteData;
  
  return (
    <section id="testimonials" style={{
      padding: '5rem 0',
      background: '#f9f9f9'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ 
            display: 'inline-block',
            marginBottom: '1rem' 
          }}>What Our Clients Say</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            Hear from businesses that have partnered with FastDev DZ.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="card" style={{
              position: 'relative',
              paddingTop: '3rem'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '2rem',
                fontSize: '5rem',
                color: 'var(--primary-color)',
                opacity: '0.2',
                fontFamily: 'serif',
                lineHeight: '1'
              }}>❝</div>
              <p style={{ 
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                position: 'relative',
                zIndex: '1'
              }}>
                {testimonial.testimonial}
              </p>
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h4 style={{ fontWeight: '600' }}>{testimonial.name}</h4>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>{testimonial.company}</p>
                </div>
                <div style={{
                  display: 'flex',
                  color: '#FFD700'
                }}>
                  {"★★★★★".split('').map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
