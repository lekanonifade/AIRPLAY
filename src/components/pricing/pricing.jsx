import React from "react";

export default function Pricing() {
    return (
        <div className="flex flex-row gap-10 w-full py-10 px-28 h-max">

            <div className="flex flex-col gap-10 text-white w-1/3 bg-[url('public/images/pricing.svg')] bg-no-repeat px-20">
                <p className="text-4xl mt-10">Save your money now.</p>
                <p className="text-base">Manage your company both in few easy steps, join our Pro plan to try at 360 of our service.</p>
                <p className="text-base">Start your 14 days of pro plan you can always upgrade it or stay with the lite version for free.</p>
            </div>

            <div className="flex flex-col w-2/3 gap-14">

                <div className="flex justify-between w-full">
                    <div className="text-4xl flex flex-col">
                        <p>Start now your</p>
                        <p className="font-bold">free plan.</p>
                    </div>
                    <div className="flex flex-col text-base font-bold text-right">
                        <p>Are you Coporate?</p>
                        <p>Contact us</p>
                    </div>
                </div>

                <div className="flex justify-between w-full gap-14">

                    <div className="flex flex-col gap-14 w-1/2 bg-[#EAF4FB] p-10 rounded-xl">
                        <div className="flex justify-between">
                            <div className="text-3xl font-bold">
                                <p>Lite</p>
                                <p className="text-[#472ECD] text-center">⏤</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-xl">Free</p>
                                <p>with restriction</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 text-sm">
                            <p className="font-bold">Plan Includes:</p>
                            <ol className="flex flex-col gap-5">
                                <li>Manage conversations directly from your website</li>
                                <li>Bot without the AI service</li>
                                <li>Achieved chat for 60 days</li>
                                <li>Free for always</li>
                            </ol>
                        </div>
                        <div className="flex flex-col gap-5 text-center text-sm">
                            <p>View all the features</p>
                            <button className="bg-[#D26709] p-3 rounded text-white">Start 14 days of Pro plan</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-14 w-1/2 bg-[#499DE9] p-10 rounded-xl">
                        <div className="flex justify-between">
                            <div className="text-3xl font-bold">
                                <p>Pro</p>
                                <p className="text-white text-center">⏤</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-xl">300$</p>
                                <p>with restriction</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 text-sm">
                            <p className="font-bold">All of Lite plus:</p>
                            <ol className="flex flex-col gap-5">
                                <li>Unlimited conversational flows</li>
                                <li>Achieved chat without limits</li>
                                <li>Facebook, Twitter, Instagram Integration</li>
                                <li>Bot with AI can recorgnise user behaviour and automatize the sentence</li>
                            </ol>
                        </div>
                        <div className="flex flex-col gap-5 text-center text-sm">
                            <p>View all the features</p>
                            <button className="bg-white p-3 rounded">Start 14 days of Pro plan</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}