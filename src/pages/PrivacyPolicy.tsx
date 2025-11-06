import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-primary-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Your privacy is important to us. It is Everest Miracle's policy to respect your privacy regarding any information we may collect from you across our website.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-primary-800 mb-4">1. Information we collect</h2>
                            <p>
                                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. How we use your information</h2>
                            <p>
                                We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                                <li>To improve our website in order to better serve you.</li>
                                <li>To allow us to better service you in responding to your customer service requests.</li>
                                <li>To administer a contest, promotion, survey or other site feature.</li>
                                <li>To quickly process your transactions.</li>
                                <li>To send periodic emails regarding your order or other products and services.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Security of your information</h2>
                            <p>
                                We have implemented a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Cookies</h2>
                            <p>
                                We use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Third-party disclosure</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">6. Changes to our Privacy Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">7. Contacting Us</h2>
                            <p>
                                If there are any questions regarding this privacy policy, you may contact us using the information on our contact page.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;