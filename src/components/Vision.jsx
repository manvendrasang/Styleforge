import React from "react";
import VisionItem from "./VisionItem"

const data = [
    {
        year:2020,
        title:'xyzabcpqr',
        duration:'3years',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        year:2020,
        title:'xyzabcpqr',
        duration:'3years',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        year:2020,
        title:'xyzabcpqr',
        duration:'3years',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        year:2020,
        title:'xyzabcpqr',
        duration:'3years',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
]
const Vision = () => {
    return (
        <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Our Vision</h1>
            {data.map((item, idx)=>(
                <VisionItem
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} />
            ))}
        </div>
    )
}

export default Vision