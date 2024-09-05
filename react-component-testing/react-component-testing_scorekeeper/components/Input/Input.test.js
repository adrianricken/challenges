import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// Mock function can be created with jest.fn(). This gives you a function you can use with expect.

test("renders a label and an input with the correct attributes", () => {
  const onChange = jest.fn();

  const props = {
    labelText: "Test Label",
    placeholder: "Test Placeholder",
    name: "test-input",
    value: "initial value",
    onChange: onChange,
    required: true,
  };

  // Render the Input component with props
  render(<Input {...props} />);

  // Check that the label is rendered with the correct text
  const labelElement = screen.getByLabelText(props.labelText);
  expect(labelElement).toBeInTheDocument();

  // Check input has the correct placeholder, name, and value attributes
  const inputElement = screen.getByPlaceholderText(props.placeholder);
  expect(inputElement).toHaveAttribute("placeholder", props.placeholder);
  expect(inputElement).toHaveAttribute("name", props.name);
  expect(inputElement).toHaveValue(props.value);
  expect(inputElement).toBeRequired(); // Check if required attribute is applied
});

// ==========

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const props = {
    labelText: "Test Label",
    placeholder: "Test Placeholder",
    name: "test-input",
    value: "",
    onChange: onChange,
    required: false,
  };

  // Render the Input component with props
  render(<Input {...props} />);

  const inputElement = screen.getByPlaceholderText(props.placeholder);

  // Simulate typing into the input field
  await userEvent.type(inputElement, "Hello");

  // Ensure that the onChange function is called for each character typed
  expect(onChange).toHaveBeenCalledTimes(5); // "Hello" has 5 characters
});
