import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col gap-10 w-full p-10">

            <p className="text-center text-4xl font-bold">Contact Us</p>

            <p className="text-center text-[#F07D5B] font-[Arial] text-2xl">Fill up the form our team will get back to you within 24hrs</p>

            <div className="px-48 w-full flex flex-col gap-10">

                <div className="flex p-1 gap-10">
                    <label htmlFor="" className="flex flex-col w-1/2 gap-2">
                        <p>First Name</p>
                        <input placeholder="Enter your name..." className="border border-[#092C4C] rounded-lg p-2"></input>
                    </label>
                    <label htmlFor="" className="flex flex-col w-1/2 gap-2">
                        <p>Last Name</p>
                        <input placeholder="Enter your name..." className="border border-[#092C4C] rounded-lg p-2"></input>
                    </label>
                </div>

                <div className="flex p-1 gap-10">
                    <label htmlFor="" className="flex flex-col w-1/2 gap-2">
                        <p>Email Address</p>
                        <input placeholder="Enter your email..." className="border border-[#092C4C] rounded-lg p-2"></input>
                    </label>
                    <label htmlFor="" className="flex flex-col w-1/2 gap-2">
                        <p>Phone Number</p>
                        <input placeholder="Enter your number..." className="border border-[#092C4C] rounded-lg p-2"></input>
                    </label>
                </div>

                <div className="flex p-1 gap-10">
                    <label htmlFor="" className="flex flex-col w-1/2 gap-2">
                        <p>Whats the sevice you need?</p>
                        <select name="" id="" className="dropdown border border-[#092C4C] rounded-lg p-2">
                            <option value="option1">Investor</option>
                            <option value="option2">Employee</option>
                            <option value="option3">Freelancer</option>
                            <option value="option4">Intern</option>
                        </select>
                    </label>
                    <label htmlFor="" className="flex flex-col w-1/2 gap-2">
                        <p>Message</p>
                        <textarea placeholder="Enter your text..." className="border border-[#092C4C] rounded-lg p-2 h-48"></textarea>
                    </label>
                </div>
                
                <button className="w-full p-5 bg-[#D26709] text-white rounded-lg">Send Message</button>
                
            </div>
        </div>
    )
}