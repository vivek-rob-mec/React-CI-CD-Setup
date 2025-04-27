// src/__test__/App.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import App from '../App';
import { Component } from "react";
import { expect } from "vitest";

test( 'render Vite + React text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React /i); // Assuming hello world text is present
    expect(linkElement).toBeInTheDocument();
});