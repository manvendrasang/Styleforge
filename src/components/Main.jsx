import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";

const Main = () => {
    return (
        
        <div id="main">
        
            <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
            <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">EcoChic</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        We wx   ork for
                        <TypeAnimation
                        sequence={[
                            'your health',
                            1000,
                            'your style',
                            1000,
                            'your needs',
                            1000
                        ]}
                        wrapper="div"
                        speed={50}
                        cursor={true}
                        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                        repeat={Infinity}
                        />
                    </h2>
        
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaDiscord className="cursor-pointer text-4xl" />
                        <FaGithub className="cursor-pointer text-4xl" />
                        <FaInstagram className="cursor-pointer text-4xl" />
                        <FaLinkedinIn className="cursor-pointer text-4xl" />
                    </div> 
        
                </div>
        
            </div>
        
        </div>
    )
}

export default Main