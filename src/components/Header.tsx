import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
    path: string;
    label: string;
}

const NavLink: React.FC<{
    path: string;
    label: string;
    isMobile?: boolean;
    onClick?: () => void;
}> = ({ path, label, isMobile = false, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    const baseClasses = "font-semibold transition-all duration-300";
    const desktopClasses = `px-3 py-2 rounded-lg hover:bg-white/10 ${isActive ? 'text-primary-800 bg-logo-green' : 'text-white'}`;
    const mobileClasses = `block w-full text-left px-6 py-4 text-lg border-b border-white/10 last:border-b-0 ${isActive ? 'bg-logo-green text-primary-800 font-bold' : 'text-white hover:bg-white/5'}`;

    return (
        <Link
            to={path}
            onClick={onClick}
            className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </Link>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const navItems: NavItem[] = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/tours', label: 'Tours' },
        { path: '/why-nepal', label: 'Why Nepal?' },
        { path: '/ticketing', label: 'Ticketing' },
    ];

    const allNavItems: NavItem[] = [...navItems, { path: '/contact', label: 'Contact' }];

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

    // Close mobile menu on route change
    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [location.pathname]);

    const handleMobileLinkClick = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleLogoClick = useCallback(() => {
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-primary-700/95 backdrop-blur-md shadow-xl py-2'
                : 'bg-primary-700 py-4'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center space-x-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-primary-700 rounded-lg transition-transform duration-300 hover:scale-105"
                        aria-label="Everest Miracle Home"
                    >
                        <div className="font-bold tracking-wider text-white">
                            <img
                                src="/logo.webp"
                                alt="Everest Miracle"
                                className="w-28 h-auto sm:w-32 md:w-36 lg:w-40 transition-all duration-300"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation - Show on md and above */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4" aria-label="Main navigation">
                        {navItems.map(item => (
                            <NavLink
                                key={item.path}
                                {...item}
                            />
                        ))}
                    </nav>

                    {/* Contact Button - Show on md and above */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="text-primary-800 font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full bg-logo-green hover:bg-logo-green-light transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-primary-700 shadow-lg hover:shadow-xl text-sm lg:text-base"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Show on small screens */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light group relative z-60"
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
                    className={`mobile-menu-panel md:hidden fixed left-0 right-0 bg-primary-700 shadow-2xl transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-y-0 top-0' : '-translate-y-full top-0'
                        }`}
                    style={{
                        height: '100vh',
                        top: isScrolled ? '0' : '0',
                    }}
                >
                    {/* Mobile Menu Header with Logo Only - No Close Button */}
                    <div className="flex justify-center items-center p-6 border-b border-white/10 bg-primary-700">
                        <Link
                            to="/"
                            onClick={handleLogoClick}
                            className="flex items-center space-x-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light rounded-lg transition-transform duration-300"
                            aria-label="Everest Miracle Home"
                        >
                            <img
                                src="/logo.webp"
                                alt="Everest Miracle"
                                className="w-32 h-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation Items */}
                    <nav className="py-4 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                        {allNavItems.map(item => (
                            <NavLink
                                key={item.path}
                                {...item}
                                onClick={handleMobileLinkClick}
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