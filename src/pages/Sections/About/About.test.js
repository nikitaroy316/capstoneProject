import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
    test("renders the About component with title, subtitle and image", () => {
        render(<About />);

        const title = screen.getByText("Little Lemon");
        expect(title).toBeInTheDocument();

        const subTitle = screen.getByText("Chicago");
        expect(subTitle).toBeInTheDocument();

        const images = screen.getAllByRole("img");
        expect(images.length).toBeGreaterThan(0);
    });
});