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
    const desktopClasses = `px-3 py-2 rounded-lg hover:bg-white/10 ${currentPage === page ? 'text-[#97cc52] bg-white/5' : 'text-white'}`;
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
    const [isMobile, setIsMobile] = useState(false);

    const navItems: NavItem[] = [
        { page: 'home', label: 'Home' },
        { page: 'about', label: 'About Us' },
        { page: 'tours', label: 'Tours' },
        { page: 'ticketing', label: 'Ticketing' },
    ];

    const allNavItems: NavItem[] = [...navItems, { page: 'contact', label: 'Contact' }];

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
            if (isMenuOpen && !target.closest('header') && !target.closest('.mobile-menu-panel')) {
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

    // Close menu when window is resized to desktop
    useEffect(() => {
        if (!isMobile && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [isMobile, isMenuOpen]);

    const handleMobileLinkClick = useCallback((page: Page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    }, [setCurrentPage]);

    const handleLogoClick = useCallback(() => {
        setCurrentPage('home');
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setCurrentPage]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#000000]/95 backdrop-blur-md shadow-xl py-2'
                : 'bg-[#000000] py-4'
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
                        <div className="font-bold tracking-wider text-white">
                            <img
                                src="/logo.webp"
                                alt="Everest Miracle"
                                className="w-28 h-auto sm:w-32 md:w-36 lg:w-40 transition-all duration-300"
                            />
                        </div>
                    </button>

                    {/* Desktop Navigation - Show on md and above */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4" aria-label="Main navigation">
                        {navItems.map(item => (
                            <NavLink
                                key={item.page}
                                {...item}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        ))}
                    </nav>

                    {/* Contact Button - Show on md and above */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="bg-[#83bf48] text-[#1a2336] font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full hover:bg-[#97cc52] transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97cc52] focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl text-sm lg:text-base"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button - Show on small screens */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97cc52] group relative z-60"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <div className="w-6 h-6 relative">
                                <span
                                    className={`absolute left-0 top-1 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-[11px]' : 'group-hover:top-0.5'
                                        }`}
                                />
                                <span
                                    className={`absolute left-0 top-2.5 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:scale-x-100'
                                        }`}
                                />
                                <span
                                    className={`absolute left-0 top-4 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-[11px]' : 'group-hover:top-[17px]'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div
                        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 top-0"
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Mobile Menu Panel */}
                <div
                    id="mobile-menu"
                    className={`mobile-menu-panel md:hidden fixed left-0 right-0 bg-[#1a2336] shadow-2xl transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-y-0 top-0' : '-translate-y-full top-0'
                        }`}
                    style={{
                        height: '100vh',
                        top: isScrolled ? '0' : '0',
                    }}
                >
                    {/* Mobile Menu Header with Logo Only - No Close Button */}
                    <div className="flex justify-center items-center p-6 border-b border-white/10 bg-[#1a2336]">
                        <button
                            onClick={handleLogoClick}
                            className="flex items-center space-x-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97cc52] rounded-lg transition-transform duration-300"
                            aria-label="Everest Miracle Home"
                        >
                            <img
                                src="/logo.webp"
                                alt="Everest Miracle"
                                className="w-32 h-auto"
                            />
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="py-4 flex-1 overflow-y-auto" aria-label="Mobile navigation">
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
                </div>
            </div>
        </header>
    );
};

export default Header;