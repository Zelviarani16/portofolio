import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/zelviarani16", icon: "ri-github-fill", label: "GitHub" },
    { href: "https://www.linkedin.com/in/zelvia-rani/", icon: "ri-linkedin-fill", label: "LinkedIn" },
    { href: "mailto:zelviarani16@gmail.com", icon: "ri-mail-fill", label: "Email" },
  ];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer style={{ marginTop: "6rem", paddingBottom: "3rem", position: "relative", zIndex: 10 }}>
      {/* Glow divider */}
      <div className="glow-divider" />

      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontWeight: "700", fontSize: "1rem", color: "#f0f0f5" }}>
                  Zelvia Rani<span style={{ color: "#a78bfa" }}> F. D. S.</span>
                </span>
              </div>
              <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.45)", lineHeight: "1.7", margin: 0 }}>
                Mahasiswa D4 Teknik Informatika Universitas Airlangga. Web Developer Enthusiast yang aktif berorganisasi dan terus belajar.
              </p>
            </div>

            {/* Nav links */}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#a78bfa",
                  marginBottom: "1rem",
                }}
              >
                Navigation
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        transition: "color 0.25s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#a78bfa",
                  marginBottom: "1rem",
                }}
              >
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href="mailto:zelviarani16@gmail.com"
                  style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.25s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                >
                  zelviarani16@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/zelvia-rani/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.25s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                >
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/zelviarani16"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.25s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                >
                  GitHub: Zelviarani16
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
              &copy; {currentYear} Zelvia Rani Febrianti Dwi Saputri. All rights reserved.
            </p>

            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-link"
                  aria-label={s.label}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
