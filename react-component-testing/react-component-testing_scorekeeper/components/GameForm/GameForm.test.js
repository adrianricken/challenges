import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from ".";

// Mock the router's push function
jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

describe("GameForm component", () => {
  const mockOnCreateGame = jest.fn(); // Mock the onCreateGame function

  beforeEach(() => {
    mockOnCreateGame.mockClear(); // Reset the mock before each test
  });

  // Test to ensure two input fields and a button are rendered
  test("renders two input fields and a button", () => {
    render(<GameForm onCreateGame={mockOnCreateGame} />);

    // Check if both input fields are rendered
    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(/player names/i);

    expect(nameOfGameInput).toBeInTheDocument();
    expect(playerNamesInput).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByRole("button", { name: /create game/i });
    expect(button).toBeInTheDocument();
  });

  // Test to ensure the form has the correct accessible name
  test("renders a form with the accessible name 'Create a new game'", () => {
    render(<GameForm onCreateGame={mockOnCreateGame} />);

    // Check if the form has the correct accessible name
    const form = screen.getByRole("form", { name: /create a new game/i });
    expect(form).toBeInTheDocument();
  });

  // Test to ensure the form submits correct data when all fields are filled out
  test("submits the correct form data when every field is filled out", async () => {
    const router = require("next/router");
    render(<GameForm onCreateGame={mockOnCreateGame} />);

    // Fill out the form
    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(/player names/i);
    const button = screen.getByRole("button", { name: /create game/i });

    await userEvent.type(nameOfGameInput, "Dodelido");
    await userEvent.type(playerNamesInput, "John Doe, Jane Doe");

    // Submit the form
    await userEvent.click(button);

    // Check if the onCreateGame function was called with correct data
    expect(mockOnCreateGame).toHaveBeenCalledWith({
      nameOfGame: "Dodelido",
      playerNames: ["John Doe", "Jane Doe"],
    });

    // Check if the router's push method was called with the correct path
    expect(router.useRouter().push).toHaveBeenCalledWith("/game");
  });

  // Test to ensure the form does not submit when an input field is empty
  test("does not submit form if one input field is left empty", async () => {
    render(<GameForm onCreateGame={mockOnCreateGame} />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const button = screen.getByRole("button", { name: /create game/i });

    // Leave the "player names" input field empty
    await userEvent.type(nameOfGameInput, "Dodelido");

    // Try to submit the form
    await userEvent.click(button);

    // onCreateGame should not be called
    expect(mockOnCreateGame).not.toHaveBeenCalled();
  });
});
