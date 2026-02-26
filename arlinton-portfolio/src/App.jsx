import React from 'react';
import './App.css';

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="skill-track">
      <div className="skill-progress" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="portfolio-dark">
      <nav className="navbar">
        <div className="logo">AFELIZ</div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <p className="accent-text">Hola, mi nombre es</p>
          <h1>Arlinton Feliz</h1>
          <h2>Desarrollador Fullstack </h2>
          <p className="hero-description">
            Estudiante de término de Ingeniería de Software (11/12 cuatrimestres) con base técnica en Mecatrónica. 
            Especialista en soporte de sistemas mediante el uso avanzado de SAP.
          </p>
          <button className="btn-main">Ver Proyectos</button>
        </div>
        <div className="hero-image-container">
           {/* Aquí puedes colocar tu foto profesional */}
           <div className="image-placeholder"></div>
        </div>
      </header>

      <main className="grid-container">
        {/* Sección: Sobre Mí */}
        <section className="glass-card about">
          <h3>Sobre Mí</h3>
          <p>
            Me distingo por mi responsabilidad y proactividad. Enfocado en aportar conocimientos al desarrollo 
            profesional y a la obtención de logros significativos en la organización.
          </p>
          <div className="contact-info">
            <p>📍 Residencial Monumental, Distrito Nacional</p>
            <p>📞 829-422-2586</p>
            <p>📧 felizarlinton@gmail.com</p>
          </div>
        </section>

        {/* Sección: Habilidades Técnicas */}
        <section className="glass-card skills">
          <h3>Habilidades de Software</h3>
          <SkillBar name="JavaScript & React" level={85} />
          <SkillBar name="SQL & MongoDB" level={80} />
          <SkillBar name="C# & Python" level={75} />
          <SkillBar name="Software Testing (QA)" level={60} />
        </section>

        {/* Sección: Experiencia */}
        <section className="glass-card experience">
          <h3>Experiencia Laboral</h3>
          <div className="exp-item">
            <h4>Jumbo CCN</h4>
            <span className="role">Auxiliar de Electrodomésticos</span>
            <p className="date">Nov 2021 - Actualidad</p>
            <ul>
              <li>Manejo avanzado de SAP para procesos operativos.</li>
              <li>Auditoría de ofertas y control de inventarios.</li>
              <li>Soporte técnico y gestión de averías.</li>
            </ul>
          </div>
        </section>

        {/* Sección: Educación */}
        <section className="glass-card education">
          <h3>Educación & Certificaciones</h3>
          <div className="edu-item">
            <h4>Ingeniería de Software</h4>
            <p>Unicaribe | 11/12 Cuatrimestres</p>
          </div>
          <div className="edu-item">
            <h4>Bachiller Técnico en Mecatrónica</h4>
            <p>Politécnico Aragón | 2017-2021</p>
          </div>
          <div className="edu-item">
            <h4>Formación Técnica</h4>
            <p>Talending (Software Dev), ITLA (Progamación Basica), Centu (Soporte TI)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;