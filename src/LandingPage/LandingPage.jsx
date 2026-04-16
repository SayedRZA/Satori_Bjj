import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.landingPage}>
      <section className={style.hero}>
        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>Train with Purpose</h1>
          <p className={style.heroSubtitle}>
            Discover your journey in Brazilian Jiu Jitsu. Classes for all ages and levels.
          </p>
          <button className={style.heroCTA}>Start Your Free Trial</button>
        </div>
      </section>

      {/* Programs Section */}
      <section className={style.programs}>
        <h2 className={style.sectionTitle}>Our Programs</h2>
        <div className={style.programsGrid}>
          <div className={style.programCard}>
            <h3>Adults Jiu Jitsu</h3>
            <p>Develop strength, technique, and confidence on the mat.</p>
          </div>
          <div className={style.programCard}>
            <h3>Kids Jiu Jitsu</h3>
            <p>Fun, discipline, and fundamentals for children ages 4–12.</p>
          </div>
          <div className={style.programCard}>
            <h3>Private Lessons</h3>
            <p>One-on-one coaching for faster progress and personal attention.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={style.contact}>
        <h2 className={style.sectionTitle}>Get Started Today</h2>
        <p>Fill out your details and book your first class. No commitment!</p>
        <button className={style.contactCTA}>Book My Free Trial</button>
      </section>

      {/* Footer */}
      <footer className={style.footer}>
        <p>&copy; {new Date().getFullYear()} Satori BJJ Academy. All rights reserved.</p>
        <p>123 Main Street, Phoenix, AZ | (555) 555-5555</p>
      </footer>
    </div>
  );
}