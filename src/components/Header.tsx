import React, { useState, useEffect, useCallback } from 'react';
import type { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

interface NavItem {
    page: Page;
    label: string;
}

const NavLink: React.FC<{
    page: Page;
    label: string;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isMobile?: boolean;
}> = ({ page, label, currentPage, setCurrentPage, isMobile = false }) => {
    const baseClasses = "font-semibold transition-all duration-300 cursor-pointer";
    const desktopClasses = `px-4 py-2 rounded-lg hover:bg-white/10 ${currentPage === page ? 'text-[#97cc52] bg-white/5' : 'text-white'}`;
    const mobileClasses = `block w-full text-left px-6 py-4 text-lg border-b border-white/10 last:border-b-0 ${currentPage === page ? 'bg-[#97cc52] text-[#1a2336] font-bold' : 'text-white hover:bg-white/5'}`;

    return (
        <button
            onClick={() => setCurrentPage(page)}
            className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
            aria-current={currentPage === page ? 'page' : undefined}
        >
            {label}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems: NavItem[] = [
        { page: 'home', label: 'Home' },
        { page: 'about', label: 'About Us' },
        { page: 'tours', label: 'Tours' },
        { page: 'ticketing', label: 'Ticketing' },
    ];

    const allNavItems: NavItem[] = [...navItems, { page: 'contact', label: 'Contact' }];

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isMenuOpen && !target.closest('header')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('click', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleMobileLinkClick = useCallback((page: Page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    }, [setCurrentPage]);

    const handleLogoClick = useCallback(() => {
        setCurrentPage('home');
        setIsMenuOpen(false);
    }, [setCurrentPage]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all py-2 duration-300 ${isScrolled
                    ? 'bg-[#000000]/95 backdrop-blur-md shadow-xl'
                    : 'bg-[#000000]'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={handleLogoClick}
                        className="flex items-center space-x-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97cc52] focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-transform duration-300 hover:scale-105"
                        aria-label="Everest Miracle Home"
                    >
                        <div className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
                            <img src="/logo.webp" alt="Everest Miracle" />
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
                        {navItems.map(item => (
                            <NavLink
                                key={item.page}
                                {...item}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        ))}
                    </nav>

                    {/* Desktop Contact Button */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="bg-[#83bf48] text-[#1a2336] font-bold py-3 px-6 rounded-full hover:bg-[#97cc52] transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97cc52] focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97cc52]"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
                                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 bg-black transition-all duration-300 ease-in-out z-40 ${isMenuOpen
                            ? 'opacity-50 pointer-events-auto top-16'
                            : 'opacity-0 pointer-events-none top-16'
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div
                    className={`lg:hidden absolute left-0 right-0 bg-[#1a2336] shadow-2xl transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    <nav className="py-2" aria-label="Mobile navigation">
                        {allNavItems.map(item => (
                            <NavLink
                                key={item.page}
                                {...item}
                                currentPage={currentPage}
                                setCurrentPage={handleMobileLinkClick}
                                isMobile={true}
                            />
                        ))}
                    </nav>

                    {/* Mobile Contact Info */}
                    <div className="px-6 py-4 border-t border-white/10 bg-black/20">
                        <div className="text-sm text-white/70 mb-2">Need help? Get in touch:</div>
                        <div className="text-[#83bf48] font-semibold">+1 (555) 123-4567</div>
                        <div className="text-white/80 text-sm">info@everestmiracle.com</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;