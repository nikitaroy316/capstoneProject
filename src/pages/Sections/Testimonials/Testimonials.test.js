import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials
 from "./Testimonials";
describe("testimonials component", () => {
    test('renders the testimonials card', () => {
         render(<Testimonials />) ;

         const testimonialCards = screen.getAllByTestId("testimonial-card");
         expect(testimonialCards).toHaveLength(3);
    })
})