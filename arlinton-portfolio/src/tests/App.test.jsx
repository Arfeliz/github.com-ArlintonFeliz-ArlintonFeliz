// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from '../App.jsx';

afterEach(cleanup);

describe('Portfolio Base Test', () => {
  it('debe renderizar el nombre de Arlinton', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Arlinton Feliz' })).toBeInTheDocument();
  });

  it('debe ofrecer un enlace de contacto por correo', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Hablemos' })).toHaveAttribute(
      'href',
      'mailto:felizarlinton@gmail.com'
    );
  });

  it('debe identificar el tema seleccionado y los niveles de habilidad', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Tema Oscuro' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('progressbar', { name: 'JavaScript & React' })).toHaveAttribute(
      'aria-valuenow',
      '85'
    );
  });
});