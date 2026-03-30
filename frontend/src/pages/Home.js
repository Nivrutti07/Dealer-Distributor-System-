import { useEffect, useState } from "react";

const GLOBAL_STYLES = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --navy:#0a1628;
  --navy2:#0f2040;
  --orange:#f97316;
  --orange2:#fb923c;
  --steel:#1e3a5f;
  --slate:#94a3b8;
  --white:#f8fafc;
  --card:rgba(255,255,255,0.04);
  --border:rgba(255,255,255,0.08);
}
html,body,#root{height:100%;min-height:100vh;}
body{
  font-family:'DM Sans',sans-serif;
  background:var(--navy);
  color:var(--white);
  overflow-x:hidden;
}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
`;

// =============================================
// COMING SOON PAGE (for unbuilt pages)
// =============================================
function ComingSoon({ page, icon, desc }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background:
          "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(249,115,22,0.07) 0%, transparent 70%)",
      }}
    >
      <div style={{ fontSize: "3.5rem", marginBottom: "20px" }}>{icon}</div>
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800,
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        {page}
      </div>
      <p
        style={{
          color: "var(--slate)",
          fontSize: "1rem",
          maxWidth: "420px",
          textAlign: "center",
          lineHeight: 1.7,
          marginBottom: "28px",
        }}
      >
        {desc}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 24px",
          borderRadius: "40px",
          border: "1px dashed rgba(249,115,22,0.4)",
          background: "rgba(249,115,22,0.07)",
          color: "var(--orange2)",
          fontWeight: 600,
          fontSize: "0.88rem",
        }}
      >
        Page Under Construction
      </div>
    </div>
  );
}

// =============================================
// HOME PAGE
// =============================================
function HomePage({ navigate, message }) {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          minHeight: "calc(100vh - 68px)",
          display: "flex",
          alignItems: "center",
          padding: "80px 5% 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(249,115,22,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(249,115,22,0.35)",
              background: "rgba(249,115,22,0.1)",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--orange2)",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--orange)",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Distributor and Dealer Portal
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Manage Orders.<br />
            <span style={{ color: "var(--orange)" }}>Grow Faster.</span>
            <br />
            Zero Chaos.
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--slate)",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "500px",
            }}
          >
            Replace WhatsApp or phone-based order management with a powerful
            digital portal for plumbing and construction material distributors.
          </p>

          {message ? (
            <div
              style={{
                marginBottom: "18px",
                fontSize: "0.85rem",
                color: "var(--slate)",
                border: "1px solid var(--border)",
                background: "var(--card)",
                padding: "10px 14px",
                borderRadius: 8,
                maxWidth: 520,
              }}
            >
              {message}
            </div>
          ) : null}

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("register")}
              style={{
                padding: "13px 28px",
                borderRadius: "8px",
                background: "var(--orange)",
                color: "#fff",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(249,115,22,0.35)",
              }}
            >
              Dealer Register
            </button>

            <button
              onClick={() => navigate("products")}
              style={{
                padding: "13px 28px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--white)",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              View Products
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              paddingTop: "28px",
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {[
              ["200+", "Dealers Registered"],
              ["15K+", "Orders Processed"],
              ["98%", "Fulfillment Rate"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    color: "var(--orange)",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--slate)",
                    marginTop: 2,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PORTALS */}
      <section style={{ padding: "70px 5%" }}>
        <div style={{ marginBottom: "44px" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--orange)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Portal Access
          </div>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(1.8rem,3vw,2.4rem)",
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Two Portals, One Platform
          </div>
          <p
            style={{
              color: "var(--slate)",
              fontSize: "1rem",
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Separate dashboards designed for each user with full control for
            distributors and easy ordering for dealers.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              icon: "Admin",
              title: "Distributor Admin",
              desc: "Full control over catalog, brands, dealer accounts and orders.",
              feats: [
                "Add and manage brands and products",
                "Approve or reject orders",
                "View analytics and reports",
                "Manage dealer accounts",
              ],
              btn: "Go to Admin Panel",
              page: "admin",
            },
            {
              icon: "Dealer",
              title: "Dealer User",
              desc: "Browse catalog, place order enquiries and track status digitally.",
              feats: [
                "Register and login securely",
                "Browse product catalog",
                "Place order requests",
                "Track order status",
              ],
              btn: "Dealer Login",
              page: "login",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                borderRadius: 16,
                padding: 32,
                border: "1px solid var(--border)",
                background: "var(--card)",
              }}
            >
              <div style={{ fontSize: "1rem", marginBottom: 16 }}>{card.icon}</div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {card.title}
              </div>
              <p
                style={{
                  color: "var(--slate)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                {card.desc}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  padding: 0,
                  margin: 0,
                }}
              >
                {card.feats.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.83rem",
                      color: "var(--slate)",
                    }}
                  >
                    <span style={{ color: "var(--orange)", fontWeight: 700 }}>
                      Check
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate(card.page)}
                style={{
                  marginTop: 24,
                  padding: "10px 20px",
                  borderRadius: 7,
                  background: "rgba(249,115,22,0.12)",
                  border: "1px solid rgba(249,115,22,0.25)",
                  color: "var(--orange2)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {card.btn} -&gt;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0 5% 70px" }}>
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--orange)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Features
          </div>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(1.8rem,3vw,2.4rem)",
              fontWeight: 800,
            }}
          >
            Everything You Need
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            ["Catalog", "Product Catalog", "Organized by brand and category."],
            ["Orders", "Order Management", "Digital orders with status tracking."],
            ["Secure", "Secure Auth", "Dealer registration and admin access."],
            ["Admin", "Admin Dashboard", "Stats and dealer activity at a glance."],
            ["Brands", "Brand Management", "Add brands and keep catalog tidy."],
            ["Responsive", "Responsive UI", "Works on desktop, tablet, and mobile."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "rgba(249,115,22,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  marginBottom: 14,
                  fontWeight: 600,
                  color: "var(--orange2)",
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: 7,
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--slate)",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div
        style={{
          margin: "0 5% 70px",
          background:
            "linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(15,32,64,0.9) 100%)",
          border: "1px solid rgba(249,115,22,0.25)",
          borderRadius: 20,
          padding: "56px 5%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.7rem,3vw,2.3rem)",
            fontWeight: 800,
            marginBottom: 10,
          }}
        >
          Ready to Ditch WhatsApp Orders?
        </div>
        <p style={{ color: "var(--slate)", marginBottom: 26 }}>
          Join the portal and manage every order digitally with no missed
          messages.
        </p>
        <div
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <button
            onClick={() => navigate("register")}
            style={{
              padding: "13px 28px",
              borderRadius: 8,
              background: "var(--orange)",
              color: "#fff",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Register as Dealer
          </button>
          <button
            onClick={() => navigate("contact")}
            style={{
              padding: "13px 28px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--card)",
              color: "var(--white)",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Contact Distributor
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================
// NAVBAR CONFIG
// =============================================
const NAV_LINKS = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
  { label: "Orders", page: "orders" },
  { label: "Dashboard", page: "admin" },
  { label: "About", page: "about" },
];

// Meta for "coming soon" pages
const PAGE_META = {
  products: {
    icon: "Products",
    desc: "Browse the full product catalog by brand, category and price range.",
  },
  orders: {
    icon: "Orders",
    desc: "View and manage all dealer order requests with status tracking.",
  },
  admin: {
    icon: "Admin",
    desc: "Admin dashboard showing analytics, dealer list, and order approvals.",
  },
  about: {
    icon: "Info",
    desc: "About this project built as a CSE college project.",
  },
  login: {
    icon: "Login",
    desc: "Dealer login page with secure authentication and role-based access.",
  },
  register: {
    icon: "Register",
    desc: "New dealer registration form with validation.",
  },
  contact: {
    icon: "Contact",
    desc: "Contact the distributor for support or enquiries.",
  },
};

// =============================================
// MAIN APP
// =============================================
function Home({ message }) {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const id = "flowtrade-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const navigate = (p) => {
    setPage(p);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  const meta = PAGE_META[page];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{GLOBAL_STYLES}</style>
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          height: 68,
          background: "rgba(10,22,40,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => navigate("home")}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: "var(--orange)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          FlowTrade
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              style={{
                padding: "7px 16px",
                borderRadius: 7,
                border: "none",
                background:
                  page === link.page
                    ? "rgba(249,115,22,0.15)"
                    : "transparent",
                color: page === link.page ? "var(--orange2)" : "var(--slate)",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.88rem",
                fontWeight: page === link.page ? 600 : 400,
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigate("login")}
            style={{
              padding: "8px 18px",
              border: "1px solid var(--border)",
              borderRadius: 6,
              background: "none",
              color: "var(--white)",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate("register")}
            style={{
              padding: "8px 18px",
              border: "none",
              borderRadius: 6,
              background: "var(--orange)",
              color: "#fff",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      </nav>

      {/* BREADCRUMB (not on home) */}
      {page !== "home" && (
        <div
          style={{
            padding: "10px 5%",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: "0.8rem",
            color: "var(--slate)",
          }}
        >
          <span
            onClick={() => navigate("home")}
            style={{ cursor: "pointer", color: "var(--orange2)" }}
          >
            Home
          </span>
          <span>/</span>
          <span style={{ color: "var(--white)", textTransform: "capitalize" }}>
            {page}
          </span>
        </div>
      )}

      {/* PAGE RENDER */}
      <main style={{ flex: 1 }}>
        {page === "home" ? (
          <HomePage navigate={navigate} message={message} />
        ) : (
          <ComingSoon
            page={page.charAt(0).toUpperCase() + page.slice(1)}
            icon={meta?.icon || "Work"}
            desc={meta?.desc || "This page is under development."}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "var(--orange)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          FlowTrade Portal
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              style={{
                background: "none",
                border: "none",
                color: "var(--slate)",
                fontSize: "0.82rem",
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div style={{ color: "var(--slate)", fontSize: "0.78rem" }}>
          Copyright 2024 FlowTrade. CSE College Project
        </div>
      </footer>
    </div>
  );
}

export default Home;
