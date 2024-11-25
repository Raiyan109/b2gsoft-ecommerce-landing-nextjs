import logo from '@/assets/footer-logo.png'
import fb from '@/assets/Facebook.png'
import twitter from '@/assets/Twitter.png'
import linkedin from '@/assets/Linkedin.png'
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1D1D1D] text-white py-8">
            {/* Top Section */}
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                {/* Left Side: Logo */}
                <div className="lg:w-1/2 w-full">
                    <Image
                        width={160}
                        height={160}
                        alt='logo'
                        src={logo}
                        className="mb-4 lg:mb-0"
                    />

                    {/* Mobile Specific Subheading */}
                    <p className="text-sm lg:hidden">
                        Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
                        unde quae qui quasi mollitia tenetur. Dicta explicabo est
                        consectetur maxime quos fugit velit assumenda est.
                    </p>
                </div>

                {/* Right Side: Newsletter */}
                <div className="lg:w-1/2 w-full flex flex-col space-y-4">
                    <h2 className="text-xl font-bold">Sign Up For Our Newsletter!</h2>
                    <p className="text-sm">
                        Get notified about updates and be the first to get early access to
                        new Podcast episodes.
                    </p>
                    <div className="flex w-full">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md text-black focus:outline-none"
                        />
                        <button className="bg-[#7E53D4] text-white px-4 py-2 rounded-r-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto px-4 mt-8">
                <div className="lg:flex lg:justify-between lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <a href="mailto:support@we5ive.com" className="text-sm text-gray-400">
                            support@we5ive.com
                        </a>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-gray-400">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Privacy Policy */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Privacy Policy</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-gray-400">
                                    Terms & Condition
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Social Links</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400">
                                <Image
                                    width={20}
                                    height={20}
                                    alt='facebook'
                                    src={fb}
                                />
                            </a>
                            <a href="#" className="text-gray-400">
                                <Image
                                    width={20}
                                    height={20}
                                    alt='twitter'
                                    src={twitter}
                                />
                            </a>
                            <a href="#" className="text-gray-400">
                                <Image
                                    width={20}
                                    height={20}
                                    alt='linkedin'
                                    src={linkedin}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
