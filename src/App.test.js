import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero name", () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Ateek Ujjawal/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
