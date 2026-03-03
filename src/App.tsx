import "./App.css";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <h1 className="site-title">Furkan Ay - Kisisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="/pp.jpeg" alt="Furkan Ay'ın vesikalik fotografi" /> 
              <figcaption>Furkan Ay - Web Gelistirici</figcaption> 
            </figure>
            <div className="about-text">
              <p>Merhaba, ben Furkan Ay. Modern web teknolojileri üzerine çalışıyorum.</p>
              <ul className="skill-tags" role="list">
                <li>HTML5</li><li>CSS3</li><li>React</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="/proje.jpg" alt="Siber guvenlik projesi ekran goruntusu" />
              <h3>Siber Güvenlik Projesi</h3>
              <p>Tehdit algılama üzerine kapsamlı çalışma.</p>
              <ul className="skill-tags">
                <li>Python</li><li>Linux</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/proje2.jpg" alt="Web projesi ekran goruntusu" />
              <h3>Modern Web Tasarımı</h3>
              <p>Responsive ve erişilebilir arayüz geliştirme projesi.</p>
              <ul className="skill-tags">
                <li>TypeScript</li><li>CSS Grid</li>
              </ul>
            </article>
          </div>
        </section>

        {/* --- İLETİŞİM FORMU BÖLÜMÜ (LAB-2 Uygulama-4) --- */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Furkan Ay. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;