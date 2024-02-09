import React from "react";
import ProjectItem from "./ProjectItem.jsx"
import property1Img from "../assets/2.jpg"
import property2Img from "../assets/1.jpg"
import property3Img from "../assets/3.jpg"
import property4Img from "../assets/4.jpg"

const Projects = () => {
    return (
        <div id="projects" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Our Recent Milestones</h1>
            <p className="text-center py-8">
                Some of our recent achievements are listed below.
                Check them out!!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={property1Img} title="AI Assistance" />
                <ProjectItem img={property2Img} title="Pesonalized Routines" />
                <ProjectItem img={property3Img} title="Support" />
                <ProjectItem img={property4Img} title="Gifting System" />
            </div> 
        </div>
    )
}

export default Projects;