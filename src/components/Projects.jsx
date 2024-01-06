import React from "react";
import ProjectItem from "./ProjectItem.jsx"
import property1Img from "../assets/1.jpg"
import property2Img from "../assets/1.jpg"
import property3Img from "../assets/1.jpg"
import property4Img from "../assets/1.jpg"

const Projects = () => {
    return (
        <div id="projects" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={property1Img} title="Helooo" />
                <ProjectItem img={property2Img} title="Helooo" />
                <ProjectItem img={property3Img} title="Helooo" />
                <ProjectItem img={property4Img} title="Helooo" />
            </div> 
        </div>
    )
}

export default Projects;