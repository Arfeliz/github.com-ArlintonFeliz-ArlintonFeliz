import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import App from '../App.jsx';

describe('Portfolio Base Test', () => {
  it('debe renderizar el nombre de Arlinton', () => {
    render(<App />);
    expect(screen.getByText(/Arlinton Feliz/i)).toBeInTheDocument();
  });
});