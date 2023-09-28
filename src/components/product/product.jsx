import { faArrowRight, faCaretDown, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Product() {
    return (
        <div className="flex flex-col gap-10 w-full">

            <div className="flex gap-10 p-10 items-center">
                <div className="w-1/2 p-10 flex flex-col gap-10">
                    <p className="font-bold text-6xl text-[#092C4C]">Work on big ideas without the busywork.</p>
                    <p className="text-2xl text-[#707070]">From the small stuff to the big picture, Asana organizes work so teams know what to do, why it matters, and how to get it done.</p>
                    <div className="flex gap-2">
                        <a href="" className="bg-[#D26709] rounded text-white py-1 px-5">Get Started</a>
                        <a href="" className="flex gap-1 py-1 px-5">
                            <p><FontAwesomeIcon icon={faPlay} className="bg-[#D26709] py-1 px-2 rounded text-white" /></p>
                            <p className="text-[#D26709]">Watch Video</p>
                        </a>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="../images/product/product-1.svg" className="w-full h-full" />
                </div>
            </div>

            <div className="flex gap-10 p-10 items-center">
                <div className="w-1/2">
                    <img src="../images/product/product-2.svg" className="w-full h-full" />
                </div>
                <div className="w-1/2 p-10 flex flex-col gap-10">
                    <p className="text-2xl">PROJECT MANAGEMENT</p>
                    <p className="text-5xl font-bold">Stay organized and connected.</p>
                    <p className="text-xl">Bring your team’s work together in one shared space. Choose the project view that suits your style, and collaborate no matter where you are.</p>
                </div>
            </div>

            <div className="flex gap-10 p-10 items-center">
                <div className="w-1/2 p-10 flex flex-col gap-10">
                    <p className="text-2xl">PROJECT MANAGEMENT</p>
                    <p className="text-5xl font-bold">Gain total visibility with Roadmaps.</p>
                    <p className="text-xl">Think of it as mission control for your projects. Roadmap tool gives you an all-in-one look at everything your team is working on.</p>
                </div>
                <div className="w-1/2 -mr-10">
                    <img src="../images/product/product-3.svg" className="w-full h-full" />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <p className="text-center text-5xl font-bold">Get A Complete Picture Of How Your Team Is Working</p>
                <div className="flex gap-10 p-10">
                    <div className="w-1/2">
                        <img src="../images/product/product-4.svg" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-10 w-1/2">
                        <div className="flex flex-col gap-5 border-b-2">
                            <p className="font-bold text-xl">Understand work habits with time-tracking data</p>
                            <p className="text-[#707070] text-lg">See how many hours team members worked and what they spent their time on.</p>
                        </div>
                        <div className="flex flex-col gap-5 border-b-2">
                            <p className="font-bold text-xl">Uncover roadblocks to hit goals faster</p>
                            <p className="text-[#707070] text-lg">Uncover what tasks are taking too long (and costing too much) so you can find and fix productivity problems.</p>
                        </div>
                        <div className="flex flex-col gap-5 border-b-2">
                            <p className="font-bold text-xl">Understand work habits with time-tracking data</p>
                            <p className="text-[#707070] text-lg">See how many hours team members worked and what they spent their time on.</p>
                        </div>
                        <div className="flex flex-col gap-5 border-b-2">
                            <p className="font-bold text-xl">Uncover roadblocks to hit goals faster</p>
                            <p className="text-[#707070] text-lg">Uncover what tasks are taking too long (and costing too much) so you can find and fix productivity problems.</p>
                        </div>
                        <div className="flex flex-col gap-5 border-b-2">
                            <p className="font-bold text-xl">Understand work habits with time-tracking data</p>
                            <p className="text-[#707070] text-lg">See how many hours team members worked and what they spent their time on.</p>
                        </div>
                        <div className="flex flex-col gap-5 border-b-2">
                            <p className="font-bold text-xl">Uncover roadblocks to hit goals faster</p>
                            <p className="text-[#707070] text-lg">Uncover what tasks are taking too long (and costing too much) so you can find and fix productivity problems.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 px-10 py-32 items-center bg-[#092C4C]">
                <div className="w-1/2 p-10 flex flex-col gap-10 text-white">
                    <div className="border-b-2 flex flex-col gap-5">
                        <p className="text-lg">PROCESS MANAGEMENT</p>
                        <p className="text-3xl font-bold">Automate Routine Work</p>
                        <p className="text-lg text-[#CAC5C5]">Leave the repetitive stuff to us so you can do more of the work you do best.</p>
                    </div>
                    <div className="border-b-2 flex flex-col gap-5">
                        <p className="text-2xl">Project Overview</p>
                        <p className="text-base">Make sure your team has clarity and context from the get-go. Share goals, key resources, and more to set the stage for work and keep your team aligned.</p>
                        <a href="" className="text-[#D26709] text-base flex gap-2">
                            <p>Learn about project overview</p>
                            <p><FontAwesomeIcon icon={faArrowRight} /></p>
                        </a>
                    </div>
                    <div className="border-b-2 flex justify-between">
                        <p>Rules</p>
                        <p><FontAwesomeIcon icon={faCaretDown} /></p>
                    </div>
                    <div className="border-b-2 flex justify-between">
                        <p>Forms</p>
                        <p><FontAwesomeIcon icon={faCaretDown} /></p>
                    </div>
                    <div className="border-b-2 flex justify-between">
                        <p>Templates</p>
                        <p><FontAwesomeIcon icon={faCaretDown} /></p>
                    </div>
                    <div className="border-b-2 flex justify-between">
                        <p>Approvals</p>
                        <p><FontAwesomeIcon icon={faCaretDown} /></p>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="../images/product/product-5.svg" className="w-full h-full" />
                </div>
            </div>

            <div className="flex gap-10 p-10 items-center">
                <div className="w-1/2 p-10 flex flex-col gap-10">
                    <p className="text-lg">SUPPORT IN SOFTWARE</p>
                    <p className="text-5xl font-bold">24/7 real time support</p>
                    <p className="text-lg">Airplay has the highest rated client support in software. We're here 24 hours a day, every day of the week, including holidays.</p>
                    <div className="flex gap-5">
                        <div className="flex gap-1 text-lg">
                            <p className="text-[#D26709]">●</p>
                            <p>Free Coaching</p>
                        </div>
                        <div className="flex gap-1 text-lg">
                            <p className="text-[#D26709]">●</p>
                            <p>Daily Webinar</p>
                        </div>
                        <div className="flex gap-1 text-lg">
                            <p className="text-[#D26709]">●</p>
                            <p>Chat & Phone</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="../images/product/product-6.svg" className="w-full h-full" />
                </div>
            </div>

            <div className="flex flex-col gap-10 p-10">
                <p className="text-5xl font-bold px-10">Testimonials</p>
                <div className="flex flex-row gap-40 px-10 w-full mt-20">
                    <div className="flex flex-col gap-5">
                        <div className="">
                            <img src="../images/product/testimonial-1.svg" alt="" />
                        </div>
                        <div className="flex gap-5 mt-10">
                            <p className="text-9xl font-[Inter] -mt-7 font-bold">“</p>
                            <div className="flex flex-col gap-5 w-2/3">
                                <p>Airplay is an ecosysytem of accessible product and services created to remove  barrier to learning through human centered design.</p>
                                <div>
                                    <p className="font-bold">Uncle Felix</p>
                                    <p>Marketing of real books</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 -mt-20">
                        <div className="">
                            <img src="../images/product/testimonial-2.svg" alt="" />
                        </div>
                        <div className="flex gap-5 mt-10">
                            <p className="text-[#F07D5B] text-9xl font-[Inter] -mt-7 font-bold">“</p>
                            <div className="flex flex-col gap-5 w-2/3">
                                <p>Airplay is an ecosysytem of accessible product and services created to remove  barrier to learning through human centered design.</p>
                                <div>
                                    <p className="text-[#F07D5B] font-bold">Shirley Morrison</p>
                                    <p>Manager of Agretech</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="">
                            <img src="../images/product/testimonial-3.svg" alt="" />
                        </div>
                        <div className="flex gap-5 mt-10">
                            <p className="text-9xl font-[Inter] -mt-7 font-bold">“</p>
                            <div className="flex flex-col gap-5 w-2/3">
                                <p>Airplay is an ecosysytem of accessible product and services created to remove  barrier to learning through human centered design.</p>
                                <div>
                                    <p className="font-bold">Jack Flyn</p>
                                    <p>Manager of Bankly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}