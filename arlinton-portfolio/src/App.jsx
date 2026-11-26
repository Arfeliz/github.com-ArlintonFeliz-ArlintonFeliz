import React from 'react';
import { useTheme } from './hooks/useTheme';
import './App.css';

const THEME_COLORS = {
  dark:   '#007bff',
  light:  '#2563eb',
  ocean:  '#00b4d8',
  purple: '#a855f7'
};

const THEME_LABELS = {
  dark:   'Oscuro',
  light:  'Claro',
  ocean:  'Océano',
  purple: 'Púrpura'
};

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div
      className="skill-track"
      role="progressbar"
      aria-label={name}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={level}
    >
      <div className="skill-progress" aria-hidden="true" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

function App() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="portfolio">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="logo" href="#inicio">
          Arlinton Feliz
        </a>
        <div className="theme-switcher">
          <span className="theme-label">Tema</span>
          <div className="theme-options" role="group" aria-label="Seleccionar tema">
            {themes.map((t) => (
              <button
                key={t}
                className={`theme-dot${theme === t ? ' active' : ''}`}
                style={{ '--dot-color': THEME_COLORS[t] }}
                onClick={() => setTheme(t)}
                title={THEME_LABELS[t]}
                aria-label={`Tema ${THEME_LABELS[t]}`}
                aria-pressed={theme === t}
              />
            ))}
          </div>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <div className="hero-content">
          <p className="accent-text">Hola, mi nombre es</p>
          <h1>Arlinton Feliz</h1>
          <h2>Desarrollador Fullstack</h2>
          <p className="hero-description">
            Combino mi formación en Ingeniería de Software con experiencia en operaciones, soporte técnico y SAP.
          </p>
          <a className="hero-cta" href="mailto:felizarlinton@gmail.com">Hablemos</a>
        </div>
      </header>

      <main className="grid-container">
        <section className="glass-card about">
          <h2>Sobre mí</h2>
          <p>
            Soy estudiante de término de Ingeniería de Software y cuento con experiencia en procesos operativos,
            soporte técnico y manejo de SAP. Busco aportar esta experiencia a equipos que crean y mantienen software.
          </p>
          <div className="contact-info">
            <p>Ubicación: Distrito Nacional</p>
            <p>Teléfono: <a href="tel:+18294222586">829-422-2586</a></p>
            <p>Correo: <a href="mailto:felizarlinton@gmail.com">felizarlinton@gmail.com</a></p>
          </div>
        </section>

        <section className="glass-card skills">
          <h2>Habilidades de software</h2>
          <SkillBar name="JavaScript & React" level={85} />
          <SkillBar name="SQL & MongoDB" level={80} />
          <SkillBar name="C# & Python" level={75} />
          <SkillBar name="Software Testing (QA)" level={60} />
        </section>

        <section className="glass-card experience">
          <h2>Experiencia laboral</h2>
          <div className="exp-item">
            <h3>Jumbo CCN</h3>
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
          <h2>Educación y certificaciones</h2>
          <div className="edu-item">
            <h3>Ingeniería de Software</h3>
            <p>Unicaribe | 11/12 Cuatrimestres</p>
          </div>
          <div className="edu-item">
            <h3>Bachiller Técnico en Mecatrónica</h3>
            <p>Politécnico Aragón | 2017-2021</p>
          </div>
          <div className="edu-item">
            <h3>Formación Técnica</h3>
            <p>Talending (Software Dev), ITLA (Programación Básica), Centu (Soporte TI)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
