import React from "react";
import { render,fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("button component", () => {
    test("renders button with correct title", () => {
        const title = "Click me";
        render(<Button title={title} />);
        const buttonTitle = screen.getByText(title);
        expect(buttonTitle).toBeInTheDocument();
    });

    test("calls onClick handler when button is clicked", () => {
        const onClickMock = jest.fn();
        render(<Button title="Click me" onClick={onClickMock} />);
        const buttonElement = screen.getByText("Click me");
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('prevent default form submission on button click when type is not "submit" ', () => {
        const onSubmitMock = jest.fn();
        render(<form onSubmit={onSubmitMock}>
            <Button title="Submit" type="button" />
        </form>);

        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        expect(onSubmitMock).not.toHaveBeenCalled();
    });
});