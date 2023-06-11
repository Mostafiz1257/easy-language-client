import React from 'react';
import { FaGoogle,FaFacebook,FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Contract</span>
                    <a className="link link-hover">Email:123toy@gmail,com</a>
                    <a className="link link-hover">Fax:+432343433</a>
                    <a className="link link-hover">01712121212</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">Uttara-1230</a>
                    <a className="link link-hover">Dhaka</a>
                    <a className="link link-hover">Bangladesh</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='h-[50px] w-[50px] rounded-xl' src="https://i.ibb.co/0FsCw2J/al.webp" alt="" />
                    <p className=' font-bold'> Internation Language Center <br />Providing reliable tech since 1992</p>
                </div>
                    <p className='  mt-5 '>Language corparation Ltd.,Copy Right Issue,2023</p>
                    
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                       
                       <a href="https://www.google.com/"><FaGoogle></FaGoogle></a>
                       <a href="https://web.facebook.com/"><FaFacebook></FaFacebook></a>
                       <a href="https://www.google.com/search?q=twitter+.com&rlz=1C1CHBF_enBD1041BD1041&oq=twitter+.com&aqs=chrome..69i57j0i512l3j0i20i263i512j0i512l2j0i390i650l3.4427j0j9&sourceid=chrome&ie=UTF-8"><FaTwitter></FaTwitter></a>
                       
                    </div>
                </div>
                
            </footer>

        </>
    );
};

export default Footer;