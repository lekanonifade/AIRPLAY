import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
    return (
        <div className="flex justify-between p-5 px-10 bg-[url('public/images/footer.svg')] bottom-0 text-white h-[30vh]">
            <div className="flex flex-col gap-5">
                <p className="font-bold">AIRPLAY</p>
                <div className="flex flex-col gap-3">
                    <p className="font-thin">Robust credit scoring model designed to allocate appropriate loan offers.</p>
                    <div className="flex gap-5 text-4xl">
                        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold">Contact</p>
                <div className="flex flex-col gap-3 font-thin">
                    <a href="mailto:airplay@gmail.com" className="flex gap-3">
                        <p><FontAwesomeIcon icon={faEnvelope} /></p>
                        <p>airplay@gmail.com</p>
                    </a>
                    <a href="" className="flex gap-3">
                        <p><FontAwesomeIcon icon={faPhone} /></p>
                        <p>+1234567890</p>
                    </a>
                    <a href="" className="flex gap-3">
                        <p><FontAwesomeIcon icon={faLocationDot} /></p>
                        <p>Airplay's Location</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold">Company</p>
                <div className="flex flex-col gap-3 font-thin">
                    <a href="">Term Of Use</a>
                    <a href="">Privacy And Policy</a>
                    <a href="">Licence</a>
                    <a href="">About Ads</a>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold">About</p>
                <div className="flex flex-col gap-3 font-thin">
                    <a href="">FAQ</a>
                    <a href="">Advertise</a>
                    <a href="">About the Company</a>
                    <a href="">News Letter</a>
                </div>
            </div>
        </div>
    )
}