import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders landing page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByText('WordThread')).toBeInTheDocument();
  });
});
