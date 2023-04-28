import { render, screen } from "@testing-library/react";
import App from "./App";
import { calculateWinner } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ir al inicio del juego/i);
  expect(linkElement).toBeInTheDocument();
});

describe("calculateWinner", () => {
  test("Should return the winner", () => {
    const squares = ["X", null, null, "O", "X", null, "O", "O", "X"];
    expect(calculateWinner(squares)).toEqual("X");
  });

  test("returns null when there is no winner", () => {
    const squares = ["X", null, "O", null, "O", null, null, null, "X"];
    expect(calculateWinner(squares)).toBeNull();
  });
  test("returns X when X has won", () => {
    const squares = ["X", null, "O", null, "X", null, "O", null, "X"];
    expect(calculateWinner(squares)).toBe("X");
  });

  test("returns O when O has won", () => {
    const squares = ["O", null, "X", null, "O", null, "X", null, "O"];
    expect(calculateWinner(squares)).toBe("O");
  });



});
