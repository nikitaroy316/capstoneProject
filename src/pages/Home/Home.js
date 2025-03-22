import React from "react";
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import Specials from "../Sections/Specials/Specials";
import Testimonials from "../Sections/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
};

export default Home;