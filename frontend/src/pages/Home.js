import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { testimonials, services, initialProducts } from '../data/mockData';

const SectionLabel = ({ text }) => (
  <div style={{ display:'flex', alignItems:'center', gap:'10px', color:'#3B82F6', fontSize:'0.7rem', letterSpacing:'4px', textTransform:'uppercase', fontWeight:'700', marginBottom:'12px' }}>
    <span style={{ display:'block', width:'26px', height:'2px', background:'#3B82F6' }} />{text}
  </div>
);

const Stars = ({ n }) => Array.from({length:n}).map((_,i) => <span key={i} style={{ color:'#f59e0b', fontSize:'0.88rem' }}>★</span>);

const Home = () => {
  const slides = [
    {
      title: "India's Premier Piping Systems Provider",
      subtitle: "UPVC, CPVC, SWR and HDPE Solutions",
      description: "Delivering world-class piping solutions to contractors, builders and industries across India with uncompromising quality and reliability.",
      button: "Become a Dealer",
      bg: "linear-gradient(135deg,#F8FAFC 0%,#E2E8F0 100%)",
      accentColor: "#3B82F6",
      stats: [['37+','Years','#3B82F6'],['5000+','Dealers','#10B981'],['500+','Products','#F59E0B']]
    },
    {
      title: "Trusted Since 1987",
      subtitle: "Building India's Infrastructure",
      description: "With state-of-the-art manufacturing and a pan-India network, we set the benchmark for piping excellence and innovation.",
      button: "Explore Products",
      bg: "linear-gradient(135deg,#FEF7ED 0%,#FED7AA 100%)",
      accentColor: "#EA580C",
      stats: [['ISO 9001','Certified','#10B981'],['5000+','Dealers','#3B82F6'],['28','States','#8B5CF6']]
    },
    {
      title: "Quality You Can Trust",
      subtitle: "ISI Marked & BIS Approved",
      description: "High-quality, durable piping solutions with stringent quality control and comprehensive certification standards.",
      button: "View Services",
      bg: "linear-gradient(135deg,#F0FDF4 0%,#DCFCE7 100%)",
      accentColor: "#059669",
      stats: [['37+','Years','#3B82F6'],['500+','Products','#F59E0B'],['ISI','Marked','#10B981']]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
  <div style={{ background:'#FFFFFF', color:'#1F2937', fontFamily:"'Inter','Segoe UI',sans-serif", overflowX:'hidden' }}>

    {/* ═══ HERO ═══════════════════════════════════════════ */}
    <div style={{ minHeight:'100vh', position:'relative', display:'flex', alignItems:'center', background: slides[currentSlide].bg, overflow:'hidden', transition: 'background 0.8s ease' }}>
      {/* Background Pattern */}
      <div style={{ position:'absolute', inset:0, opacity:0.03, backgroundImage:'radial-gradient(circle at 25% 25%, #000 2px, transparent 2px), radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)', backgroundSize:'50px 50px', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem', width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center', paddingTop:'6rem' }}>
        <div style={{ zIndex:2 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', background:'rgba(255,255,255,0.9)', border:'1px solid rgba(0,0,0,0.05)', borderRadius:'2rem', padding:'0.5rem 1rem', marginBottom:'2rem', backdropFilter:'blur(10px)', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: slides[currentSlide].accentColor }} />
            <span style={{ color:'#374151', fontSize:'0.875rem', fontWeight:'500' }}>Trusted Since 1987</span>
          </div>

          <h1 style={{ fontSize:'clamp(2.5rem,5vw,4rem)', fontWeight:'800', lineHeight:'1.1', margin:'0 0 1.5rem', color:'#1F2937', letterSpacing:'-0.025em' }}>
            {slides[currentSlide].title.split(' ').slice(0, -1).join(' ')} <span style={{ color: slides[currentSlide].accentColor }}>{slides[currentSlide].title.split(' ').slice(-1)}</span>
          </h1>

          <p style={{ color:'#6B7280', fontSize:'1.125rem', lineHeight:'1.7', margin:'0 0 2.5rem', maxWidth:'32rem' }}>
            {slides[currentSlide].description}
          </p>

          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            <Link to="/login" style={{
              background: slides[currentSlide].accentColor,
              color:'#FFFFFF',
              padding:'1rem 2rem',
              borderRadius:'0.75rem',
              textDecoration:'none',
              fontWeight:'600',
              fontSize:'1rem',
              boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              transition:'all 0.2s',
              display:'inline-flex',
              alignItems:'center',
              gap:'0.5rem'
            }}>
              {slides[currentSlide].button}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="#products" style={{
              background:'rgba(255,255,255,0.9)',
              color:'#374151',
              padding:'1rem 2rem',
              borderRadius:'0.75rem',
              textDecoration:'none',
              fontWeight:'600',
              fontSize:'1rem',
              border:'1px solid rgba(0,0,0,0.05)',
              backdropFilter:'blur(10px)',
              boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)',
              transition:'all 0.2s'
            }}>
              View Products
            </a>
          </div>

          <div style={{ display:'flex', gap:'3rem', marginTop:'4rem', paddingTop:'2rem', borderTop:'1px solid rgba(0,0,0,0.05)' }}>
            {slides[currentSlide].stats.map(([n,l,c]) => (
              <div key={n} style={{ textAlign:'center' }}>
                <div style={{ color:c, fontSize:'2.5rem', fontWeight:'800', letterSpacing:'-0.025em', marginBottom:'0.25rem' }}>{n}</div>
                <div style={{ color:'#6B7280', fontSize:'0.875rem', fontWeight:'500', textTransform:'uppercase', letterSpacing:'0.05em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Card */}
        <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2 }}>
          <div style={{
            background:'rgba(255,255,255,0.95)',
            border:'1px solid rgba(0,0,0,0.05)',
            borderRadius:'1.5rem',
            padding:'3rem 2.5rem',
            backdropFilter:'blur(20px)',
            boxShadow:'0 25px 50px -12px rgba(0,0,0,0.25)',
            position:'relative',
            maxWidth:'28rem',
            width:'100%'
          }}>
            <div style={{ textAlign:'center', marginBottom:'2rem' }}>
              <div style={{
                width:'5rem',
                height:'5rem',
                borderRadius:'1rem',
                background:`linear-gradient(135deg,${slides[currentSlide].accentColor},#1D4ED8)`,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'2.5rem',
                margin:'0 auto 1rem',
                boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1)'
              }}>👑</div>
              <div style={{ color:'#1F2937', fontSize:'1.5rem', fontWeight:'800', letterSpacing:'0.025em', fontFamily:'Georgia,serif', marginBottom:'0.25rem' }}>PRINCE</div>
              <div style={{ color: slides[currentSlide].accentColor, fontSize:'0.75rem', letterSpacing:'0.2em', fontWeight:'700', textTransform:'uppercase' }}>PIPING SYSTEMS</div>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'1.5rem' }}>
              {['UPVC Pipes','CPVC Systems','SWR Drainage','HDPE Pipes'].map((item,i) => (
                <div key={item} style={{
                  display:'flex',
                  alignItems:'center',
                  gap:'0.5rem',
                  padding:'0.75rem 1rem',
                  borderRadius:'0.5rem',
                  background: i===0 ? 'rgba(59,130,246,0.1)' : 'rgba(0,0,0,0.02)',
                  border:`1px solid ${i===0 ? 'rgba(59,130,246,0.2)' : 'rgba(0,0,0,0.05)'}`,
                  transition:'all 0.2s'
                }}>
                  <div style={{
                    width:'6px',
                    height:'6px',
                    borderRadius:'50%',
                    background: i===0 ? slides[currentSlide].accentColor : '#D1D5DB'
                  }} />
                  <span style={{
                    color: i===0 ? '#1F2937' : '#6B7280',
                    fontSize:'0.875rem',
                    fontWeight: i===0 ? '600' : '400'
                  }}>{item}</span>
                  {i===0 && <span style={{
                    marginLeft:'auto',
                    background:'rgba(16,185,129,0.1)',
                    color:'#059669',
                    padding:'0.125rem 0.5rem',
                    borderRadius:'0.25rem',
                    fontSize:'0.625rem',
                    fontWeight:'600',
                    textTransform:'uppercase',
                    letterSpacing:'0.05em'
                  }}>ISI Marked</span>}
                </div>
              ))}
            </div>

            <div style={{
              padding:'1rem',
              background:'rgba(16,185,129,0.05)',
              borderRadius:'0.5rem',
              border:'1px solid rgba(16,185,129,0.1)',
              textAlign:'center',
              color:'#059669',
              fontSize:'0.75rem',
              fontWeight:'600',
              textTransform:'uppercase',
              letterSpacing:'0.1em'
            }}>
              Pan-India Delivery Available
            </div>
          </div>

          {/* Floating Elements */}
          <div style={{
            position:'absolute',
            top:'-2rem',
            right:'-2rem',
            background:'rgba(255,255,255,0.9)',
            border:'1px solid rgba(0,0,0,0.05)',
            borderRadius:'0.75rem',
            padding:'1rem',
            boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1)',
            backdropFilter:'blur(10px)',
            zIndex:3
          }}>
            <div style={{ fontSize:'1.5rem', marginBottom:'0.25rem' }}>🏗️</div>
            <div style={{ color: slides[currentSlide].accentColor, fontSize:'0.75rem', fontWeight:'600' }}>Construction</div>
          </div>

          <div style={{
            position:'absolute',
            bottom:'2rem',
            left:'-2rem',
            background:'rgba(255,255,255,0.9)',
            border:'1px solid rgba(0,0,0,0.05)',
            borderRadius:'0.75rem',
            padding:'1rem',
            boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1)',
            backdropFilter:'blur(10px)',
            zIndex:3
          }}>
            <div style={{ fontSize:'1.5rem', marginBottom:'0.25rem' }}>✅</div>
            <div style={{ color:'#059669', fontSize:'0.75rem', fontWeight:'600' }}>ISI Certified</div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div style={{ position:'absolute', bottom:'3rem', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'0.75rem', zIndex:3 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              width:'12px',
              height:'12px',
              borderRadius:'50%',
              border:'none',
              background: i === currentSlide ? slides[currentSlide].accentColor : 'rgba(0,0,0,0.2)',
              cursor:'pointer',
              transition:'all 0.3s',
              boxShadow:'0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
        ))}
      </div>

      <div style={{
        position:'absolute',
        bottom:'1.5rem',
        left:'50%',
        transform:'translateX(-50%)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'0.5rem',
        opacity:0.6,
        zIndex:3
      }}>
        <span style={{ color:'#6B7280', fontSize:'0.875rem', fontWeight:'500' }}>Scroll to explore</span>
        <div style={{
          width:'1px',
          height:'2rem',
          background:'linear-gradient(to bottom, #6B7280, transparent)',
          animation:'bounce 2s infinite'
        }} />
      </div>
    </div>

    {/* ═══ ABOUT ══════════════════════════════════════════ */}
    <div id="about" style={{ background:'#FFFFFF', padding:'6rem 0' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.2)', borderRadius:'2rem', padding:'0.5rem 1rem', marginBottom:'2rem' }}>
              <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#3B82F6' }} />
              <span style={{ color:'#3B82F6', fontSize:'0.875rem', fontWeight:'600' }}>About Us</span>
            </div>

            <h2 style={{ fontSize:'clamp(2.5rem,4vw,3.5rem)', fontWeight:'800', margin:'0 0 1.5rem', lineHeight:'1.2', letterSpacing:'-0.025em', color:'#1F2937' }}>
              Building India's <span style={{ color:'#3B82F6' }}>Infrastructure</span> For 37 Years
            </h2>

            <p style={{ color:'#6B7280', fontSize:'1.125rem', lineHeight:'1.7', marginBottom:'1.5rem', maxWidth:'32rem' }}>
              Prince Piping Systems Pvt. Ltd. was established in 1987 with a vision to provide high-quality, durable piping solutions to India's rapidly growing construction and infrastructure sectors.
            </p>

            <p style={{ color:'#6B7280', fontSize:'1.125rem', lineHeight:'1.7', marginBottom:'2.5rem', maxWidth:'32rem' }}>
              With state-of-the-art manufacturing facilities, stringent quality control, and a pan-India distribution network of over 5,000 active dealers, we continue to set the benchmark for piping excellence.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem', maxWidth:'24rem' }}>
              {[
                {title:'ISO 9001', subtitle:'Certified', icon:'🏆'},
                {title:'ISI', subtitle:'Marked', icon:'✅'},
                {title:'BIS', subtitle:'Approved', icon:'🛡️'}
              ].map(({title, subtitle, icon}) => (
                <div key={title} style={{
                  background:'rgba(59,130,246,0.05)',
                  border:'1px solid rgba(59,130,246,0.1)',
                  borderRadius:'0.75rem',
                  padding:'1.5rem 1rem',
                  textAlign:'center',
                  transition:'all 0.2s'
                }}>
                  <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>{icon}</div>
                  <div style={{ color:'#3B82F6', fontWeight:'700', fontSize:'0.875rem', marginBottom:'0.25rem' }}>{title}</div>
                  <div style={{ color:'#6B7280', fontSize:'0.75rem', fontWeight:'500', textTransform:'uppercase', letterSpacing:'0.05em' }}>{subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {[
              {number:'37+', label:'Years of Excellence', icon:'🏆', color:'#3B82F6'},
              {number:'5000+', label:'Dealer Network', icon:'🤝', color:'#059669'},
              {number:'500+', label:'Product SKUs', icon:'📦', color:'#DC2626'},
              {number:'28', label:'States Covered', icon:'🗺️', color:'#D97706'}
            ].map(({number, label, icon, color}) => (
              <div key={number} style={{
                background:'rgba(255,255,255,0.9)',
                border:'1px solid rgba(0,0,0,0.05)',
                borderRadius:'1rem',
                padding:'2rem 1.5rem',
                textAlign:'center',
                backdropFilter:'blur(10px)',
                boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)',
                transition:'all 0.2s'
              }}>
                <div style={{ fontSize:'2rem', marginBottom:'0.75rem' }}>{icon}</div>
                <div style={{ color, fontSize:'2rem', fontWeight:'800', letterSpacing:'-0.025em', marginBottom:'0.25rem' }}>{number}</div>
                <div style={{ color:'#6B7280', fontSize:'0.875rem', fontWeight:'500' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ═══ SERVICES ═══════════════════════════════════════ */}
    <div id="services" style={{ background:'#F8FAFC', padding:'6rem 0' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.2)', borderRadius:'2rem', padding:'0.5rem 1rem', marginBottom:'2rem' }}>
            <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#3B82F6' }} />
            <span style={{ color:'#3B82F6', fontSize:'0.875rem', fontWeight:'600' }}>What We Offer</span>
          </div>

          <h2 style={{ fontSize:'clamp(2.5rem,4vw,3.5rem)', fontWeight:'800', margin:'0 0 1rem', letterSpacing:'-0.025em', color:'#1F2937' }}>Our Services</h2>
          <p style={{ color:'#6B7280', fontSize:'1.125rem', maxWidth:'36rem', margin:'0 auto', lineHeight:'1.7' }}>
            More than just pipes — end-to-end solutions for your construction and infrastructure needs.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'2rem' }}>
          {services.map((s,i) => (
            <div key={i} style={{
              background:'rgba(255,255,255,0.9)',
              border:'1px solid rgba(0,0,0,0.05)',
              borderRadius:'1rem',
              padding:'2.5rem 2rem',
              transition:'all 0.3s',
              cursor:'default',
              backdropFilter:'blur(10px)',
              boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)',
              position:'relative',
              overflow:'hidden'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform='translateY(-8px)';
                e.currentTarget.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor='rgba(59,130,246,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform='translateY(0)';
                e.currentTarget.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor='rgba(0,0,0,0.05)';
              }}
            >
              <div style={{
                position:'absolute',
                top:'-20px',
                right:'-20px',
                width:'80px',
                height:'80px',
                borderRadius:'50%',
                background:'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))',
                opacity:0.5
              }} />

              <div style={{ fontSize:'3rem', marginBottom:'1.5rem', position:'relative', zIndex:1 }}>{s.icon}</div>
              <h3 style={{ color:'#1F2937', fontSize:'1.25rem', fontWeight:'700', margin:'0 0 1rem', position:'relative', zIndex:1 }}>{s.title}</h3>
              <p style={{ color:'#6B7280', fontSize:'1rem', margin:0, lineHeight:'1.6', position:'relative', zIndex:1 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ═══ PRODUCTS PREVIEW ═══════════════════════════════ */}
    <div id="products" style={{ background:'#FFFFFF', padding:'6rem 0' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'4rem' }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.2)', borderRadius:'2rem', padding:'0.5rem 1rem', marginBottom:'1.5rem' }}>
              <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#3B82F6' }} />
              <span style={{ color:'#3B82F6', fontSize:'0.875rem', fontWeight:'600' }}>Product Range</span>
            </div>

            <h2 style={{ fontSize:'clamp(2.5rem,4vw,3.5rem)', fontWeight:'800', margin:0, letterSpacing:'-0.025em', color:'#1F2937' }}>Featured Products</h2>
          </div>
          <Link to="/products" style={{
            color:'#3B82F6',
            textDecoration:'none',
            fontSize:'1rem',
            fontWeight:'600',
            display:'inline-flex',
            alignItems:'center',
            gap:'0.5rem',
            padding:'0.75rem 1.5rem',
            border:'1px solid rgba(59,130,246,0.2)',
            borderRadius:'0.5rem',
            transition:'all 0.2s'
          }}>
            View All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'2rem' }}>
          {initialProducts.slice(0,3).map(p => (
            <div key={p.id} style={{
              background:'rgba(255,255,255,0.9)',
              border:'1px solid rgba(0,0,0,0.05)',
              borderRadius:'1rem',
              overflow:'hidden',
              transition:'all 0.3s',
              cursor:'pointer',
              backdropFilter:'blur(10px)',
              boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform='translateY(-8px)';
                e.currentTarget.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor='rgba(59,130,246,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform='translateY(0)';
                e.currentTarget.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor='rgba(0,0,0,0.05)';
              }}
            >
              <div style={{
                height:'180px',
                background:'linear-gradient(135deg, #F8FAFC, #E2E8F0)',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'4rem',
                position:'relative'
              }}>
                <div style={{
                  position:'absolute',
                  top:'1rem',
                  right:'1rem',
                  background:'rgba(59,130,246,0.1)',
                  color:'#3B82F6',
                  padding:'0.25rem 0.75rem',
                  borderRadius:'1rem',
                  fontSize:'0.75rem',
                  fontWeight:'600',
                  textTransform:'uppercase',
                  letterSpacing:'0.05em'
                }}>{p.category}</div>
                {p.image}
              </div>

              <div style={{ padding:'2rem' }}>
                <h3 style={{ color:'#1F2937', fontSize:'1.25rem', fontWeight:'700', margin:'0 0 0.75rem', lineHeight:'1.3' }}>{p.name}</h3>
                <p style={{ color:'#6B7280', fontSize:'1rem', margin:'0 0 1.5rem', lineHeight:'1.6' }}>{p.description.substring(0,100)}...</p>

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ color:'#3B82F6', fontWeight:'800', fontSize:'1.25rem' }}>₹{p.price.toLocaleString()}</span>
                  <Link to="/login" style={{
                    background:'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                    color:'#FFFFFF',
                    padding:'0.75rem 1.5rem',
                    borderRadius:'0.5rem',
                    textDecoration:'none',
                    fontWeight:'600',
                    fontSize:'0.875rem',
                    transition:'all 0.2s',
                    display:'inline-flex',
                    alignItems:'center',
                    gap:'0.5rem'
                  }}>
                    Enquire Now
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ═══ TESTIMONIALS ════════════════════════════════════ */}
    <div id="testimonials" style={{ background:'#F8FAFC', padding:'6rem 0' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.2)', borderRadius:'2rem', padding:'0.5rem 1rem', marginBottom:'2rem' }}>
            <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#3B82F6' }} />
            <span style={{ color:'#3B82F6', fontSize:'0.875rem', fontWeight:'600' }}>Client Stories</span>
          </div>

          <h2 style={{ fontSize:'clamp(2.5rem,4vw,3.5rem)', fontWeight:'800', margin:'0 0 1rem', letterSpacing:'-0.025em', color:'#1F2937' }}>What Our Partners Say</h2>
          <p style={{ color:'#6B7280', fontSize:'1.125rem', maxWidth:'36rem', margin:'0 auto', lineHeight:'1.7' }}>
            Trusted by thousands of contractors, builders, and dealers across India.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(400px,1fr))', gap:'2rem' }}>
          {testimonials.map(t => (
            <div key={t.id} style={{
              background:'rgba(255,255,255,0.9)',
              border:'1px solid rgba(0,0,0,0.05)',
              borderRadius:'1rem',
              padding:'2.5rem',
              backdropFilter:'blur(10px)',
              boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)',
              transition:'all 0.3s',
              position:'relative'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform='translateY(-4px)';
                e.currentTarget.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor='rgba(59,130,246,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform='translateY(0)';
                e.currentTarget.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor='rgba(0,0,0,0.05)';
              }}
            >
              <div style={{
                position:'absolute',
                top:'-10px',
                left:'2rem',
                background:'#FFFFFF',
                borderRadius:'50%',
                width:'60px',
                height:'60px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1)',
                border:'4px solid #F8FAFC'
              }}>
                <span style={{ fontSize:'1.5rem' }}>💬</span>
              </div>

              <div style={{ marginBottom:'1.5rem', marginTop:'1rem' }}>
                <Stars n={t.rating} />
              </div>

              <p style={{ color:'#374151', fontSize:'1.125rem', lineHeight:'1.7', margin:'0 0 2rem', fontStyle:'italic', position:'relative', zIndex:1 }}>
                "{t.text}"
              </p>

              <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
                <div style={{
                  width:'3rem',
                  height:'3rem',
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'#FFFFFF',
                  fontWeight:'700',
                  fontSize:'1rem'
                }}>{t.initials}</div>
                <div>
                  <div style={{ color:'#1F2937', fontWeight:'700', fontSize:'1rem' }}>{t.name}</div>
                  <div style={{ color:'#6B7280', fontSize:'0.875rem' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ═══ CONTACT ═════════════════════════════════════════ */}
    <div id="contact" style={{ background:'#FFFFFF', padding:'6rem 0' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
        {/* CTA */}
        <div style={{
          background:'linear-gradient(135deg, #F8FAFC, #E2E8F0)',
          border:'1px solid rgba(0,0,0,0.05)',
          borderRadius:'1.5rem',
          padding:'4rem 3rem',
          textAlign:'center',
          marginBottom:'4rem',
          position:'relative',
          overflow:'hidden',
          backdropFilter:'blur(10px)',
          boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            position:'absolute',
            top:'-40px',
            right:'-40px',
            width:'200px',
            height:'200px',
            borderRadius:'50%',
            background:'radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)',
            pointerEvents:'none'
          }} />

          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.75rem', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.2)', borderRadius:'2rem', padding:'0.5rem 1rem', marginBottom:'2rem' }}>
            <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#3B82F6' }} />
            <span style={{ color:'#3B82F6', fontSize:'0.875rem', fontWeight:'600' }}>Become a Partner</span>
          </div>

          <h2 style={{ color:'#1F2937', fontSize:'clamp(2.5rem,4vw,3.5rem)', fontWeight:'800', margin:'0 0 1rem', letterSpacing:'-0.025em' }}>Join Our Dealer Network</h2>
          <p style={{ color:'#6B7280', fontSize:'1.125rem', maxWidth:'36rem', margin:'0 auto 2.5rem', lineHeight:'1.7' }}>
            Become an authorised Prince Piping dealer and access exclusive pricing, marketing support, and a dedicated sales team.
          </p>

          <Link to="/login" style={{
            background:'linear-gradient(135deg, #3B82F6, #1D4ED8)',
            color:'#FFFFFF',
            padding:'1rem 2.5rem',
            borderRadius:'0.75rem',
            textDecoration:'none',
            fontWeight:'600',
            fontSize:'1rem',
            boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
            display:'inline-flex',
            alignItems:'center',
            gap:'0.5rem',
            transition:'all 0.2s'
          }}>
            Get Started Today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Contact cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem' }}>
          {[
            {icon:'📞', title:'Call Us', value:'+91 1800-XXX-XXXX', subtitle:'Mon–Sat, 9am–6pm IST', color:'#3B82F6'},
            {icon:'✉️', title:'Email Us', value:'sales@princepipes.com', subtitle:'We reply within 24 hours', color:'#059669'},
            {icon:'🏢', title:'Head Office', value:'New Delhi, India', subtitle:'Pan-India Distribution', color:'#DC2626'}
          ].map(({icon, title, value, subtitle, color}) => (
            <div key={title} style={{
              background:'rgba(255,255,255,0.9)',
              border:'1px solid rgba(0,0,0,0.05)',
              borderRadius:'1rem',
              padding:'2rem',
              display:'flex',
              alignItems:'flex-start',
              gap:'1rem',
              backdropFilter:'blur(10px)',
              boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)',
              transition:'all 0.2s'
            }}>
              <div style={{
                width:'3rem',
                height:'3rem',
                borderRadius:'0.75rem',
                background:`linear-gradient(135deg, ${color}, ${color}dd)`,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'1.25rem',
                flexShrink:0,
                boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)'
              }}>{icon}</div>
              <div>
                <div style={{ color, fontSize:'0.875rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'0.5rem' }}>{title}</div>
                <div style={{ color:'#1F2937', fontWeight:'700', fontSize:'1.125rem', marginBottom:'0.25rem' }}>{value}</div>
                <div style={{ color:'#6B7280', fontSize:'0.875rem' }}>{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ═══ FOOTER ══════════════════════════════════════════ */}
    <footer style={{ background:'#1F2937', padding:'4rem 2rem 2rem', color:'#FFFFFF' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'3rem', marginBottom:'3rem' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
              <div style={{
                width:'2.5rem',
                height:'2.5rem',
                borderRadius:'0.5rem',
                background:'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'1.125rem',
                fontWeight:'900',
                color:'#FFFFFF',
                fontFamily:'Georgia,serif'
              }}>P</div>
              <div>
                <div style={{ fontWeight:'900', fontSize:'1.125rem', letterSpacing:'0.1em', fontFamily:'Georgia,serif' }}>PRINCE</div>
                <div style={{ color:'#3B82F6', fontSize:'0.625rem', letterSpacing:'0.2em', fontWeight:'700' }}>PIPING SYSTEMS</div>
              </div>
            </div>
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'1rem', lineHeight:'1.6', maxWidth:'20rem' }}>
              India's most trusted piping brand since 1987. Committed to quality, innovation, and sustainable infrastructure.
            </p>
          </div>

          {[
            ['Products', ['UPVC Pipes', 'CPVC Pipes', 'SWR Drainage', 'Column Pipes', 'HDPE Pipes']],
            ['Company', ['About Us', 'Certifications', 'Careers', 'News & Press', 'CSR']],
            ['Support', ['Dealer Login', 'Technical Docs', 'Installation Guide', 'Warranty', 'Contact Us']]
          ].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color:'#FFFFFF', fontSize:'0.875rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'1.5rem' }}>{title}</h4>
              {links.map(link => (
                <div key={link} style={{
                  color:'rgba(255,255,255,0.6)',
                  fontSize:'0.875rem',
                  marginBottom:'0.75rem',
                  cursor:'pointer',
                  transition:'color 0.2s'
                }}
                  onMouseEnter={e => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop:'1px solid rgba(255,255,255,0.1)',
          paddingTop:'2rem',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          flexWrap:'wrap',
          gap:'1rem'
        }}>
          <div style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.875rem' }}>
            © 2026 Prince Piping Systems Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display:'flex', gap:'2rem' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(link => (
              <span key={link} style={{
                color:'rgba(255,255,255,0.5)',
                fontSize:'0.875rem',
                cursor:'pointer',
                transition:'color 0.2s'
              }}
                onMouseEnter={e => e.target.style.color = '#FFFFFF'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');
      html { scroll-behavior: smooth; }
      * { box-sizing: border-box; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #f0ede8; }
      ::-webkit-scrollbar-thumb { background: #3B82F6; border-radius: 3px; }
      input::placeholder, textarea::placeholder { color: #c0bfcf; }
      select option { background: #fff; color: #1a1a2e; }
    `}</style>
  </div>
)
};

export default Home;
