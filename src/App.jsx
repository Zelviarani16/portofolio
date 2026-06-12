import { useRef, useState, useEffect } from "react";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

AOS.init({ once: true, duration: 900, easing: "ease-out-quart" });



function App() {
  const aboutRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <>
      {/* ── Aurora background ─────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Aurora
          colorStops={["#1e0a3c", "#3b0f6b", "#0c0c0f"]}
          blend={0.35}
          amplitude={0.7}
          speed={0.35}
        />
      </div>

      <main
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 1.5rem",
          paddingTop: "96px", // compensate fixed navbar
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="home"
          style={{
            minHeight: "88vh",
            display: "grid",
            alignItems: "center",
            gap: "3rem",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
        >
          {/* Left column */}
          <div
            className="animate__animated animate__fadeInUp"
            style={{ maxWidth: "580px" }}
          >

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: "800",
                lineHeight: "1.12",
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                color: "#f0f0f5",
              }}
            >
              <span style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.45em", fontWeight: "500", letterSpacing: "0.05em", marginBottom: "0.6rem", textTransform: "uppercase" }}>
                Hi, saya
              </span>
              <ShinyText
                text="Zelvia Rani"
                disabled={false}
                speed={3}
                className="custom-class"
              />
              <span
                style={{
                  display: "block",
                  fontSize: "0.55em",
                  fontWeight: "600",
                  color: "#a78bfa",
                  marginTop: "0.3rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Web Developer Enthusiast
              </span>
            </h1>

            {/* Description */}
            <BlurText
              text="Mahasiswa semester 4 Program D4 Teknik Informatika Universitas Airlangga. Aktif berorganisasi dan gemar mempelajari teknologi serta hal-hal baru di dunia pengembangan web."
              delay={120}
              animateBy="words"
              direction="top"
              className="mb-8"
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.55)",
              }}
            />

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="./assets/CV.pdf"
                download="Zelvia_Rani_CV.pdf"
                className="btn-primary"
              >
                <i className="ri-download-2-line" />
                Download CV
              </a>
              <a href="#project" className="btn-secondary">
                <i className="ri-folder-3-line" />
                Lihat Projects
              </a>
            </div>

            {/* Quick links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>
                FIND ME ON
              </span>
              <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <a
                  href="https://github.com/zelviarani16"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  style={{ width: "36px", height: "36px", fontSize: "1rem" }}
                  aria-label="GitHub"
                >
                  <i className="ri-github-fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zelvia-rani/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  style={{ width: "36px", height: "36px", fontSize: "1rem" }}
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill" />
                </a>
                <a
                  href="mailto:zelviarani16@gmail.com"
                  className="social-link"
                  style={{ width: "36px", height: "36px", fontSize: "1rem" }}
                  aria-label="Email"
                >
                  <i className="ri-mail-fill" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column – Profile Card */}
          <div
            className="md:ml-auto animate__animated animate__fadeInUp animate__delay-1s hidden md:flex"
            style={{ justifyContent: "center" }}
          >
            <ProfileCard
              name="Zelvia Rani"
              title="Web Developer Enthusiast"
              handle="zelviarani16"
              status="Open to Work"
              contactText="Contact Me"
              avatarUrl="./assets/cardfoto.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() =>
                (window.location.href = "mailto:zelviarani16@gmail.com")
              }
            />
          </div>
        </section>

        <div className="glow-divider" />

        {/* ═══════════════════════════════════════════════════════════════
            ABOUT SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="about" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
          <div data-aos="fade-up">
            <div className="section-label">About Me</div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
                color: "#f0f0f5",
              }}
            >
              Tentang Saya
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "2.5rem",
              }}
            >
              Mahasiswi yang bersemangat di bidang teknologi dan pengembangan web.
            </p>
          </div>

          <div className="about-card" data-aos="fade-up" data-aos-delay="100">
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#c4b5fd",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <i className="ri-user-3-line" style={{ fontSize: "1rem" }} />
              Zelvia Rani Febrianti Dwi Saputri
            </h3>
            <BlurText
              text="Saya adalah mahasiswa semester 4 Program D4 Teknik Informatika di Universitas Airlangga. Saya memiliki ketertarikan besar pada dunia web development dan terus berupaya meningkatkan kemampuan saya melalui proyek-proyek nyata dan keterlibatan dalam organisasi kampus."
              delay={80}
              animateBy="words"
              direction="top"
              className="mb-5"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.65)",
              }}
            />
            <BlurText
              text="Saya aktif berorganisasi dan percaya bahwa pengalaman di luar kelas sama pentingnya dengan akademik. Saya senang mempelajari hal-hal baru, baik itu teknologi, desain, maupun cara kerja tim yang efektif."
              delay={60}
              animateBy="words"
              direction="top"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.65)",
              }}
            />

            <div
              style={{
                marginTop: "1.75rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ri-map-pin-2-line" style={{ color: "#a78bfa", fontSize: "0.9rem" }} />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
                  Surabaya, Indonesia
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ri-graduation-cap-line" style={{ color: "#a78bfa", fontSize: "0.9rem" }} />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
                  Universitas Airlangga
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ri-mail-line" style={{ color: "#a78bfa", fontSize: "0.9rem" }} />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
                  zelviarani16@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="glow-divider" />

        {/* ═══════════════════════════════════════════════════════════════
            SKILLS SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="skills" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
          <div data-aos="fade-up">
            <div className="section-label">Tech Stack</div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
                color: "#f0f0f5",
              }}
            >
              Tools &amp; Technologies
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              Teknologi yang saya pelajari dan gunakan dalam proses pengembangan web dan aplikasi.
            </p>
          </div>

          {/* Tool cards grid */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="tool-card"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt={tool.nama} />
                <div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      color: "#f0f0f5",
                      marginBottom: "2px",
                    }}
                  >
                    {tool.nama}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {tool.ket}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </section>

        <div className="glow-divider" />

        {/* ═══════════════════════════════════════════════════════════════
            PROJECTS SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="project" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
          <div data-aos="fade-up">
            <div className="section-label">Portfolio</div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
                color: "#f0f0f5",
              }}
            >
              Projects
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "3rem",
                maxWidth: "520px",
              }}
            >
              Kumpulan proyek yang mencerminkan proses belajar dan eksplorasi saya dalam dunia pengembangan web.
            </p>
          </div>

          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ChromaGrid
              items={listProyek}
              onItemClick={(project) => setSelectedProject(project)}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </section>

        <div className="glow-divider" />

        {/* ═══════════════════════════════════════════════════════════════
            CONTACT SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="contact" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
          <div data-aos="fade-up">
            <div className="section-label">Get In Touch</div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
                color: "#f0f0f5",
              }}
            >
              Hubungi Saya
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "3rem",
                maxWidth: "480px",
              }}
            >
              Tertarik untuk berkolaborasi atau sekadar ngobrol? Kirim pesan dan saya akan membalasnya sesegera mungkin.
            </p>
          </div>

          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form
              action="https://formsubmit.co/zelviarani16@gmail.com"
              method="POST"
              autoComplete="off"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Pesan dari Portfolio Zelvia" />

              <div className="form-group">
                <label htmlFor="contact-name">Nama Lengkap</label>
                <input
                  id="contact-name"
                  type="text"
                  name="Name"
                  placeholder="Masukkan nama Anda..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Alamat Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="Email"
                  placeholder="Masukkan email Anda..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Pesan</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                <i className="ri-send-plane-2-line" />
                Kirim Pesan
              </button>

              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <a
                  href="mailto:zelviarani16@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <i className="ri-mail-fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zelvia-rani/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill" />
                </a>
                <a
                  href="https://github.com/zelviarani16"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <i className="ri-github-fill" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}

export default App;
