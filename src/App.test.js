// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoRatchet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoRatchet/i);
    expect(titleElement).toBeInTheDocument();
});
