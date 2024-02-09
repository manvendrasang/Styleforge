import React from "react";
import VisionItem from "./VisionItem"

const data = [
    {
        year:2024,
        title:'Health',
        // duration:'3years',
        details:"Giving priority to your health as well as your family's well being."
    },
    {
        year:2024,
        title:'Keeping up with the trend',
        // duration:'3years',
        details:'We certainly would not want you to be left behind any fashion trends.'
    },
    {
        year:2024,
        title:'Giving a balance',
        // duration:'3years',
        details:'The proper balance not only with diet, but as well as with your work schedule to keep the mind and body in a harmony.'
    },
    {
        year:2024,
        title:'Keeping it real',
        // duration:'3years',
        details:'We value your health and lifestyle and we will never compromise in on this.'
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