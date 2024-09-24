import { render, screen } from "@testing-library/react";

import React from "react";
import { App } from "./app";

test("renders app component", () => {
  render(<App />);
  const appComponent = screen.getByText(/My React App!/i);
  expect(appComponent).toBeInTheDocument();
});
