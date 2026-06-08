import React from 'react';
import { useTheme } from './hooks/useTheme';
import './App.css';

const THEME_COLORS = {
  dark:   '#007bff',
  light:  '#2563eb',
  ocean:  '#00b4d8',
  purple: '#a855f7',
  red: '#f12020'
};

const THEME_LABELS = {
  dark:   'Oscuro',
  light:  'Claro',
  ocean:  'Océano',
  purple: 'Púrpura',
  red: 'Rojo'
};

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
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">
          Arlinton Feliz
        </div>
        <div className="theme-switcher">
          <span className="theme-label">Tema</span>
          {themes.map((t) => (
            <button
              key={t}
              className={`theme-dot${theme === t ? ' active' : ''}`}
              style={{ '--dot-color': THEME_COLORS[t] }}
              onClick={() => setTheme(t)}
              title={THEME_LABELS[t]}
              aria-label={`Tema ${THEME_LABELS[t]}`}
            />
          ))}
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <p className="accent-text">Hola, mi nombre es</p>
          <h1>Arlinton Feliz</h1>
          <h2>Desarrollador Fullstack</h2>
          <p className="hero-description">
            Estudiante de término de Ingeniería de Software (11/12 cuatrimestres) con base técnica en Mecatrónica.
            Especialista en soporte de sistemas mediante el uso avanzado de SAP.
          </p>
        </div>
        {/* <div className="hero-image-container">
          <div className="image-placeholder"></div>
        </div> */}
      </header>

      <main className="grid-container">
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

        <section className="glass-card skills">
          <h3>Habilidades de Software</h3>
          <SkillBar name="JavaScript & React" level={85} />
          <SkillBar name="SQL & MongoDB" level={80} />
          <SkillBar name="C# & Python" level={75} />
          <SkillBar name="Software Testing (QA)" level={60} />
        </section>

        <section className="glass-card experience">
          <h3>Experiencia Laboral</h3>
          <div className="exp-item">
            <h4>Jumbo CCN</h4>
            <span className="role">Auxiliar de Electrodomésticos</span>
            <p className="date">Nov 2021 - Abr 2026</p>
            <ul>
              <li>Manejo avanzado de SAP para procesos operativos.</li>
              <li>Auditoría de ofertas y control de inventarios.</li>
              <li>Soporte técnico y gestión de averías.</li>
            </ul>
          </div>
        </section>

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
            <p>Talending (Software Dev), ITLA (Programación Básica), Centu (Soporte TI)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
