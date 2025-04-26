// src/__test__/App.test.js

import { render, screen } from "@testing-library/react";
import App from '../App';
import { Component } from "react";
import { expect } from "vitest";

test( 'render a Component', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i); // Assuming hello world text is present
    expect(linkElement).toBeInTheDocument();
});