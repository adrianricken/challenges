import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const onDecreasePlayerScore = jest.fn();
  const onIncreasePlayerScore = jest.fn();

  const props = {
    name: "John Doe",
    score: 10,
    onDecreasePlayerScore,
    onIncreasePlayerScore,
  };

  // Render the Player component
  render(<Player {...props} />);

  // Check if player's name is rendered
  expect(screen.getByText("John Doe")).toBeInTheDocument();

  // Check if the score is rendered
  expect(screen.getByText("10")).toBeInTheDocument();

  // Check if both buttons are rendered
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2); // Decrease and Increase buttons
  expect(buttons[0]).toHaveAccessibleName("Decrease Score"); // The "-" button
  expect(buttons[1]).toHaveAccessibleName("Increase Score"); // The "+" button
});

// We render the Player component with props.

// The test checks if the player’s name and score are correctly displayed.

// We also check that two buttons are rendered: one for increasing and one for decreasing the score.

// ==================================================

test("calls callbacks when increasing or decreasing score", async () => {
  const onDecreasePlayerScore = jest.fn();
  const onIncreasePlayerScore = jest.fn();

  const props = {
    name: "John Doe",
    score: 10,
    onDecreasePlayerScore,
    onIncreasePlayerScore,
  };

  // Render the Player component
  render(<Player {...props} />);

  // Get the buttons
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });
  const increaseButton = screen.getByRole("button", { name: "Increase Score" });

  // Simulate user clicking the decrease button
  await userEvent.click(decreaseButton);
  expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);

  // Simulate user clicking the increase button
  await userEvent.click(increaseButton);
  expect(onIncreasePlayerScore).toHaveBeenCalledTimes(1);
});

// We create mock functions using jest.fn() for the onDecreasePlayerScore and onIncreasePlayerScore callbacks.

// The test simulates user clicks on the decrease and increase buttons using userEvent.click and checks if the corresponding callback functions are called once each.
