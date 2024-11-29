import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const displayText = screen.getByText("Stellar UI");
  expect(displayText).toBeInTheDocument();
});
