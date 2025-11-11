import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Trekking Packages', href: '/trekking' },
        { name: 'Tour Packages', href: '/tours' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' }
    ];

    const contactInfo = [
        {
            icon: <IoLocationSharp className="w-5 h-5" />,
            text: 'Baluwatar, Kathmandu, Nepal'
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            text: '+977-1-4442677 / 88'
        },
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            text: 'info@everestmiracle.com.np'
        }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/EverestMiracleTravels/',
            icon: <FaFacebookF className="w-5 h-5" />
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/everestmiracletreks/',
            icon: <FaInstagram className="w-5 h-5" />
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/EverestMiracle',
            icon: <FaTwitter className="w-5 h-5" />
        },
    ];

    return (
        <footer className="bg-primary-700 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#83bf48] mb-2">Everest Miracle</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Your trusted partner for unforgettable adventures in the Himalayas. We specialize in creating
                                life-changing experiences while promoting sustainable and responsible tourism.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-[#83bf48] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-300">
                                    <div className="text-[#83bf48]">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Social</h4>
                        <p className="text-gray-300 text-sm mb-4">Follow us on social media</p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    href={social.href}
                                    className="bg-gray-800 hover:bg-[#83bf48] p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Everest Miracle Trekking Pvt. Ltd. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex space-x-6">
                            <Link to="/privacy" className="text-gray-400 hover:text-[#83bf48] transition-colors duration-300 text-sm">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-[#83bf48] transition-colors duration-300 text-sm">
                                Terms of Service
                            </Link>
                        </div>

                        {/* Developer Credit */}
                        <div className="text-gray-400 text-sm">
                            Developed by{' '}
                            <a
                                href="https://linktrix.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#83bf48] hover:text-white transition-colors duration-300 font-medium"
                            >
                                LinkTrix Pvt. Ltd.
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/977123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label="Contact us on WhatsApp"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;