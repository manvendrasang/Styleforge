import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
                Contact
            </h1>
            <form action="https://getform.io/f/67bdbfa9-4be9-4484-8481-40cb42b36ab5" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone"/>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject"/>
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows='10' name="message"></textarea>
                </div>
                <br />
                <button class="relative mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Send Message
                    </span>
                </button>
            </form>
        </div>
    )
}

export default Contact;