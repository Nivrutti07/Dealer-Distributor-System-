import React from 'react';

// ── Inline styles ─────────────────────────────────────────────────────────────
const S = {
  hero: {
    padding: '80px 48px 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: 'calc(100vh - 64px)',
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '5px 12px', borderRadius: '100px',
    border: '1px solid #fed7aa', background: '#fff4ed',
    fontSize: '0.78rem', fontWeight: 500, color: '#c2410c', marginBottom: '24px',
  },
  pillDot: {
    width: 6, height: 6, background: '#f97316', borderRadius: '50%',
    animation: 'blink 2s ease-in-out infinite',
  },
  h1: {
    fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)',
    fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em',
    marginBottom: '20px', color: 'var(--ink)',
  },
  heroP: {
    fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75,
    maxWidth: '480px', marginBottom: '32px', fontWeight: 300,
  },
  heroActions: { display: 'flex', gap: '12px', marginBottom: '40px' },
  btnPrimary: {
    padding: '12px 24px', borderRadius: '10px', border: 'none',
    background: '#f97316', color: '#fff', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: '8px',
  },
  btnOutline: {
    padding: '12px 24px', borderRadius: '10px',
    border: '1px solid var(--line)', background: 'none', color: 'var(--ink)',
    fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: '8px',
  },
  heroDivider: { border: 'none', borderTop: '1px solid var(--line)', marginBottom: '28px' },
  heroStats: { display: 'flex', gap: '40px' },
  statN: { fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#f97316' },
  statL: { fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 },

  dashWrap: {
    background: '#fff', border: '1px solid var(--line)',
    borderRadius: '16px', overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  dashTitlebar: {
    padding: '12px 16px', borderBottom: '1px solid var(--line)',
    display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--surface)',
  },
  dashBody: { padding: '16px' },
  dashRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '10px 12px', borderRadius: '8px',
    border: '1px solid var(--line)', marginBottom: '8px',
  },
  dId:   { fontSize: '0.7rem', color: 'var(--muted)' },
  dName: { fontSize: '0.82rem', fontWeight: 500, color: 'var(--ink)', marginTop: 1 },
  dAmt:  { fontSize: '0.82rem', fontWeight: 600, color: '#f97316' },

  strip: {
    borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    padding: '18px 48px', background: 'var(--surface)', marginTop: '48px',
  },
  stripInner: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'flex', alignItems: 'center', gap: '24px',
  },
  stripLabel: { fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500, whiteSpace: 'nowrap' },
  stripTags:  { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  tag: {
    padding: '4px 12px', borderRadius: '100px',
    border: '1px solid var(--line)', fontSize: '0.78rem',
    color: 'var(--muted)', background: '#fff',
  },

  section: { padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' },
  secLabel: {
    fontSize: '0.72rem', fontWeight: 600, color: '#f97316',
    letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px',
  },
  secTitle: {
    fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800,
    lineHeight: 1.2, color: 'var(--ink)', marginBottom: '10px',
  },
  secSub: {
    fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7,
    maxWidth: '480px', marginBottom: '40px',
  },

  portalGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
  portalCard: { border: '1px solid var(--line)', borderRadius: '14px', padding: '28px' },
  portalCardFeatured: {
    border: '1px solid #f97316', borderRadius: '14px', padding: '28px', background: '#fff4ed',
  },
  pIcon: {
    width: 44, height: 44, borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.2rem', marginBottom: '16px',
    border: '1px solid var(--line)', background: '#fff',
  },
  pTitle: {
    fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 800,
    marginBottom: '6px', color: 'var(--ink)',
  },
  pDesc: { fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '18px' },
  pFeats: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '20px' },
  pFeatLi: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--muted)' },
  checkCircle: {
    width: 16, height: 16, borderRadius: '50%', background: '#f97316',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '9px', color: '#fff', fontWeight: 700, flexShrink: 0,
  },
  pBtnFeatured: {
    padding: '9px 18px', borderRadius: '8px', border: 'none',
    background: '#f97316', color: '#fff', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.83rem', fontWeight: 500, cursor: 'pointer',
  },
  pBtnDefault: {
    padding: '9px 18px', borderRadius: '8px', border: '1px solid var(--line)',
    background: '#fff', color: 'var(--ink)', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.83rem', fontWeight: 500, cursor: 'pointer',
  },

  featuresSection: { padding: '0 48px 80px', maxWidth: '1200px', margin: '0 auto' },
  featGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' },
  featCard: { padding: '22px', border: '1px solid var(--line)', borderRadius: '12px' },
  featIco: {
    width: 36, height: 36, borderRadius: '8px', background: 'var(--surface)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1rem', marginBottom: '12px', border: '1px solid var(--line)',
  },
  featT: { fontSize: '0.88rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '4px' },
  featD: { fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 },

  ctaWrap: { padding: '0 48px 80px', maxWidth: '1200px', margin: '0 auto' },
  cta: {
    border: '1px solid var(--ink)', borderRadius: '16px', padding: '56px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: '32px', background: 'var(--ink)',
  },
  ctaT: {
    fontFamily: 'Syne, sans-serif', fontSize: '1.7rem', fontWeight: 800,
    color: '#fff', marginBottom: '8px', lineHeight: 1.2,
  },
  ctaD:     { fontSize: '0.92rem', color: '#9ca3af', lineHeight: 1.6 },
  ctaActions: { display: 'flex', gap: '10px', flexShrink: 0 },
  btnCtaP: {
    padding: '12px 22px', borderRadius: '10px', border: 'none',
    background: '#f97316', color: '#fff', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.88rem', fontWeight: 500, cursor: 'pointer',
  },
  btnCtaS: {
    padding: '12px 22px', borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'none', color: '#fff', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.88rem', cursor: 'pointer',
  },
};

// ── Status Badge ──────────────────────────────────────────────────────────────
function Badge({ status }) {
  const styles = {
    Pending:  { background: '#fef9c3', color: '#854d0e' },
    Approved: { background: '#dcfce7', color: '#15803d' },
    Rejected: { background: '#fee2e2', color: '#b91c1c' },
  };
  return (
    <span style={{
      fontSize: '0.68rem', fontWeight: 600, padding: '3px 10px',
      borderRadius: '100px', ...(styles[status] || {}),
    }}>{status}</span>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage({ navigate }) {

  const orders = [
    { id: '#ORD-0041', name: 'CPVC Pipe 25mm × 50',  status: 'Pending',  amt: '₹8,400' },
    { id: '#ORD-0040', name: 'Ball Valve 1″ × 30',    status: 'Approved', amt: '₹3,200' },
    { id: '#ORD-0039', name: 'GI Elbow 90° × 100',    status: 'Approved', amt: '₹5,750' },
    { id: '#ORD-0038', name: 'PVC Fitting Set × 20',  status: 'Rejected', amt: '₹1,900' },
  ];

  const barHeights = [40, 65, 52, 82, 70, 93, 75];

  const portals = [
    {
      icon: '🏭', title: 'Distributor Admin', featured: true,
      desc: 'Full control over catalog, brands, dealer accounts and orders.',
      feats: ['Add & manage brands and products', 'Approve or reject dealer orders', 'View analytics & reports', 'Manage dealer registrations'],
      btn: 'Go to Admin Panel', page: 'admin',
    },
    {
      icon: '🏪', title: 'Dealer User', featured: false,
      desc: 'Browse catalog, submit order enquiries and track status digitally.',
      feats: ['Register & login securely', 'Browse product catalog by brand', 'Place order & enquiry requests', 'Track order status in real-time'],
      btn: 'Dealer Login', page: 'login',
    },
  ];

  const features = [
    ['📦', 'Product Catalog',   'Organized by brand & category for easy browsing.'],
    ['🛒', 'Order Management',  'Digital orders with Pending / Approved / Rejected status.'],
    ['🔐', 'Secure Auth',       'Dealer registration and role-based admin access.'],
    ['📊', 'Admin Dashboard',   'Stats, order counts and dealer activity at a glance.'],
    ['🏷️', 'Brand Management', 'Add brands, map products and keep catalog tidy.'],
    ['📱', 'Responsive UI',     'Works on desktop, tablet, and mobile devices.'],
  ];

  return (
    <div>

      {/* ── HERO ── */}
      <div style={S.hero}>

        {/* Left: Text */}
        <div>
          <div style={S.pill}>
            <span style={S.pillDot} />
            Distributor &amp; Dealer Portal
          </div>

          <h1 style={S.h1}>
            Manage orders.<br />
            <span style={{ color: '#f97316' }}>Grow faster.</span><br />
            Zero chaos.
          </h1>

          <p style={S.heroP}>
            Replace WhatsApp and phone-based order management with a powerful
            digital portal for plumbing and construction material distributors.
          </p>

          <div style={S.heroActions}>
            <button style={S.btnPrimary} onClick={() => navigate('register')}>
              🚀 Dealer Register
            </button>
            <button style={S.btnOutline} onClick={() => navigate('products')}>
              📦 View Products
            </button>
          </div>

          <hr style={S.heroDivider} />

          <div style={S.heroStats}>
            {[['200+','Dealers Registered'],['15K+','Orders Processed'],['98%','Fulfilment Rate']].map(([n, l]) => (
              <div key={l}>
                <div style={S.statN}>{n}</div>
                <div style={S.statL}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard mock */}
        <div style={S.dashWrap}>
          <div style={S.dashTitlebar}>
            {['#ef4444','#f59e0b','#22c55e'].map(c => (
              <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />
            ))}
            <span style={{ fontSize:'0.75rem', color:'#9ca3af', marginLeft:'8px' }}>
              Order Dashboard
            </span>
          </div>

          <div style={S.dashBody}>
            {orders.map((o, i) => (
              <div key={o.id} style={{ ...S.dashRow, marginBottom: i === orders.length - 1 ? 0 : '8px' }}>
                <div>
                  <div style={S.dId}>{o.id}</div>
                  <div style={S.dName}>{o.name}</div>
                </div>
                <Badge status={o.status} />
                <span style={S.dAmt}>{o.amt}</span>
              </div>
            ))}

            {/* Mini bar chart */}
            <div style={{ marginTop:'14px', paddingTop:'14px', borderTop:'1px solid var(--line)' }}>
              <div style={{ fontSize:'0.7rem', color:'var(--muted)', marginBottom:'8px' }}>
                Weekly order volume
              </div>
              <div style={{ display:'flex', alignItems:'flex-end', gap:'4px', height:'44px' }}>
                {barHeights.map((h, i) => (
                  <div key={i} style={{
                    flex:1, background:'#fed7aa', borderRadius:'3px 3px 0 0', position:'relative',
                  }}>
                    <div style={{
                      position:'absolute', bottom:0, left:0, right:0,
                      height:`${h}%`, background:'#f97316', borderRadius:'3px 3px 0 0',
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY STRIP ── */}
      <div style={S.strip}>
        <div style={S.stripInner}>
          <span style={S.stripLabel}>Built for</span>
          <div style={S.stripTags}>
            {['Pipes & Fittings','Valves','Sanitary Ware','Plumbing Tools','Construction Materials'].map(t => (
              <span key={t} style={S.tag}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PORTALS ── */}
      <div style={S.section}>
        <div style={S.secLabel}>Portal Access</div>
        <div style={S.secTitle}>Two portals, one platform</div>
        <p style={S.secSub}>
          Separate dashboards for each user — full control for distributors, simple ordering for dealers.
        </p>

        <div style={S.portalGrid}>
          {portals.map(card => (
            <div key={card.title} style={card.featured ? S.portalCardFeatured : S.portalCard}>
              <div style={S.pIcon}>{card.icon}</div>
              <div style={S.pTitle}>{card.title}</div>
              <p style={S.pDesc}>{card.desc}</p>
              <ul style={S.pFeats}>
                {card.feats.map(f => (
                  <li key={f} style={S.pFeatLi}>
                    <span style={S.checkCircle}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={card.featured ? S.pBtnFeatured : S.pBtnDefault}
                onClick={() => navigate(card.page)}
              >
                {card.btn} →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div style={S.featuresSection}>
        <div style={S.secLabel}>Features</div>
        <div style={{ ...S.secTitle, marginBottom: '32px' }}>Everything you need</div>
        <div style={S.featGrid}>
          {features.map(([icon, title, desc]) => (
            <div key={title} style={S.featCard}>
              <div style={S.featIco}>{icon}</div>
              <div style={S.featT}>{title}</div>
              <p style={S.featD}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={S.ctaWrap}>
        <div style={S.cta}>
          <div>
            <div style={S.ctaT}>Ready to ditch WhatsApp orders?</div>
            <p style={S.ctaD}>Join the portal and manage every order digitally — no more missed messages.</p>
          </div>
          <div style={S.ctaActions}>
            <button style={S.btnCtaP} onClick={() => navigate('register')}>🚀 Register as Dealer</button>
            <button style={S.btnCtaS} onClick={() => navigate('contact')}>📞 Contact Distributor</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
