import React, { useState, useRef, useMemo } from 'react';
import InputField from './InputField';
import { destinationOptions, activityTypes, durationOptions, difficultyOptions, seasonOptions, packageTypes, packages } from '../../data/data';

const BookingWidget: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'destinations' | 'packages'>('destinations');
    const [selectedDestination, setSelectedDestination] = useState<string>('');
    const [selectedActivity, setSelectedActivity] = useState<string>('');
    const [selectedDuration, setSelectedDuration] = useState<string>('');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
    const [selectedSeason, setSelectedSeason] = useState<string>('');
    const [selectedPackageType, setSelectedPackageType] = useState<string>('');
    const [selectedPackage, setSelectedPackage] = useState<string>('');
    const [selectedDestPackage, setSelectedDestPackage] = useState<string>('');
    
    const tabRefs = [
        useRef<HTMLButtonElement>(null),
        useRef<HTMLButtonElement>(null),
    ];
    
    const handleKeyDown = (e: React.KeyboardEvent, tabId: 'destinations' | 'packages') => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveTab(tabId);
        }
    };
    
    const tabs = useMemo(() => [
        { id: 'destinations' as const, label: 'Destinations', icon: '🏔️', ref: tabRefs[0] },
        { id: 'packages' as const, label: 'Packages', icon: '🎒', ref: tabRefs[1] }
    ], [tabRefs]);

    const filteredPackages = useMemo(() => {
        return packages.filter(pkg => {
            const typeMatch = selectedPackageType ? pkg.type === selectedPackageType : true;
            const destMatch = selectedDestPackage ? pkg.destinations.includes(selectedDestPackage) : true;
            return typeMatch && destMatch;
        });
    }, [selectedPackageType, selectedDestPackage]);

    return (
        <div className="relative w-full max-w-4xl mx-auto z-20" role="region" aria-label="Booking options">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 text-left border border-gray-100">
                {/* Enhanced Tabs */}
                <div className="flex border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            ref={tab.ref}
                            onClick={() => setActiveTab(tab.id)}
                            onKeyDown={(e) => handleKeyDown(e, tab.id)}
                            className={`flex items-center space-x-2 py-3 px-4 sm:px-6 font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300 relative ${activeTab === tab.id
                                    ? 'text-[#1a2336] pb-3'
                                    : 'text-gray-500 hover:text-gray-700 pb-3'
                                }`}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            id={`tab-${tab.id}`}
                            tabIndex={activeTab === tab.id ? 0 : -1}
                        >
                            <span className="text-lg sm:text-xl">{tab.icon}</span>
                            <span>{tab.label}</span>
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#83bf48] rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Destinations Content */}
                {activeTab === 'destinations' && (
                    <div 
                        className="space-y-4 sm:space-y-6" 
                        role="tabpanel" 
                        id={`panel-destinations`}
                        aria-labelledby={`tab-destinations`}
                        tabIndex={0}
                    >
                        <div className="text-center py-2 sm:py-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Discover Amazing Destinations</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">Find your perfect adventure in the Himalayas</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Destination
                                </label>
                                <select
                                    value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                >
                                    <option value="">Select a destination</option>
                                    {destinationOptions.map((dest) => (
                                        <option key={dest.id} value={dest.id}>
                                            {dest.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Activity Type
                                </label>
                                <select
                                    value={selectedActivity}
                                    onChange={(e) => setSelectedActivity(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                >
                                    <option value="">Select activity type</option>
                                    {activityTypes.map((activity) => (
                                        <option key={activity.id} value={activity.id}>
                                            {activity.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Duration
                                </label>
                                <select
                                    value={selectedDuration}
                                    onChange={(e) => setSelectedDuration(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                >
                                    <option value="">Select duration</option>
                                    {durationOptions.map((duration) => (
                                        <option key={duration.id} value={duration.id}>
                                            {duration.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Difficulty
                                </label>
                                <select
                                    value={selectedDifficulty}
                                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                >
                                    <option value="">Select difficulty</option>
                                    {difficultyOptions.map((difficulty) => (
                                        <option key={difficulty.id} value={difficulty.id}>
                                            {difficulty.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Best Season
                                </label>
                                <select
                                    value={selectedSeason}
                                    onChange={(e) => setSelectedSeason(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                >
                                    <option value="">Select season</option>
                                    {seasonOptions.map((season) => (
                                        <option key={season.id} value={season.id}>
                                            {season.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center pt-3 sm:pt-4">
                            <button 
                                className="bg-[#83bf48] hover:bg-[#7ab440] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg"
                                onClick={() => {
                                    // Here would be the logic to search destinations based on selections
                                    console.log('Searching for destinations...', {
                                        selectedDestination,
                                        selectedActivity,
                                        selectedDuration,
                                        selectedDifficulty,
                                        selectedSeason
                                    });
                                }}
                            >
                                <span>Explore Destinations</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Packages Content */}
                {activeTab === 'packages' && (
                    <div 
                        className="space-y-4 sm:space-y-6" 
                        role="tabpanel" 
                        id={`panel-packages`}
                        aria-labelledby={`tab-packages`}
                        tabIndex={0}
                    >
                        <div className="text-center py-2 sm:py-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">All-Inclusive Packages</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">Flight + Hotel + Activities in one booking</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Package Type
                                    </label>
                                    <select
                                        value={selectedPackageType}
                                        onChange={(e) => setSelectedPackageType(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                    >
                                        <option value="">Select package type</option>
                                        {packageTypes.map((pkgType) => (
                                            <option key={pkgType.id} value={pkgType.id}>
                                                {pkgType.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Destination
                                    </label>
                                    <select
                                        value={selectedDestPackage}
                                        onChange={(e) => setSelectedDestPackage(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                    >
                                        <option value="">Select destination</option>
                                        {destinationOptions.map((dest) => (
                                            <option key={dest.id} value={dest.id}>
                                                {dest.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <InputField label="Travel Dates" placeholder="Select dates" type="date" icon={<svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
                                <InputField label="Travelers" placeholder="Number of people" icon={<svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-5m-5 0h10m-10 0l-1-1m1-1l1 1m-1-1v-3m0-4a4 4 0 100-8 4 4 0 000 8z" /></svg>} />
                                <InputField label="Budget Range" placeholder="Your budget" icon={<svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V3m0 9v5m0 0a3 3 0 01-3-3m3 3a3 3 0 003-3m-6 3H4M3 21h18M12 3h8v4M4 7h8" /></svg>} />
                                <InputField label="Special Requirements" placeholder="Any special needs" icon={<svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.176l1.519 4.674c.3.921-.755 1.688-1.539 1.176l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.512-1.83-.255-1.539-1.176l1.519-4.674a1 1 0 00-.329-1.176l-3.976-2.888c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" /></svg>} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Select Package
                                </label>
                                <select
                                    value={selectedPackage}
                                    onChange={(e) => setSelectedPackage(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#83bf48] focus:border-[#83bf48] transition-colors bg-white"
                                    disabled={!selectedPackageType && !selectedDestPackage}
                                >
                                    <option value="">Select a package</option>
                                    {filteredPackages.map((pkg) => (
                                        <option key={pkg.id} value={pkg.id}>
                                            {pkg.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center pt-3 sm:pt-4">
                            <button
                                className="bg-[#83bf48] hover:bg-[#7ab440] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg"
                                onClick={() => {
                                    // Here would be the logic to search packages based on selections
                                    console.log('Searching for packages...', {
                                        selectedPackageType,
                                        selectedDestPackage,
                                        selectedPackage
                                    });
                                }}
                            >
                                <span>View Packages</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(BookingWidget);