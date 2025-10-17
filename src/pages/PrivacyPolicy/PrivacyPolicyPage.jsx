import SEO from '../../components/SEO';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105"
      >
        Skip to main content
      </a>

      <SEO
        title="Privacy Policy | CoreX Nutrition"
        description="Learn about CoreX Nutrition's privacy practices for this open-source demo project, including data collection, usage, and security."
        keywords="Privacy Policy, CoreX Nutrition, Open Source, Data Privacy, Security"
      />

      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-inter py-12 px-4 sm:px-6 lg:px-8"
        role="main"
        aria-labelledby="privacy-policy-title"
      >
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1
              id="privacy-policy-title"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparency and trust are at the core of everything we do
            </p>
          </header>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none p-8 md:p-12">
              {/* Introduction Section */}
              <section aria-labelledby="introduction-section" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-blue-600 rounded-full mr-4"></div>
                  <h2
                    id="introduction-section"
                    className="text-2xl font-bold text-gray-900"
                  >
                    INTRODUCTION
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  At CoreX Nutrition, we care about your privacy and are committed
                  to transparency. This project is an open-source demo, built by
                  Open Code Chicago, designed to simulate the experience of a real
                  e-commerce supplements store.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    💡 Please note: no real transactions, payments, or sensitive personal data are processed on this site.
                  </p>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12"></div>

              {/* Information Collection */}
              <section aria-labelledby="information-collection-section" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-green-600 rounded-full mr-4"></div>
                  <h2
                    id="information-collection-section"
                    className="text-2xl font-bold text-gray-900"
                  >
                    WHAT INFORMATION DO WE COLLECT?
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Basic Usage Data
                    </h3>
                    <p className="text-green-700 text-sm">
                      Browser type, device type, and pages visited for analytics
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Account Data (Demo)
                    </h3>
                    <p className="text-green-700 text-sm">
                      Name and email for demonstration purposes only
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mt-6">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    No Financial Information
                  </h3>
                  <p className="text-red-700 text-sm">
                    We do not process or store payment details (credit cards, bank accounts)
                  </p>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12"></div>

              {/* Information Usage */}
              <section aria-labelledby="information-usage-section" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-purple-600 rounded-full mr-4"></div>
                  <h2
                    id="information-usage-section"
                    className="text-2xl font-bold text-gray-900"
                  >
                    HOW DO WE USE THIS INFORMATION?
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">In a real platform, data may be used to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {['Personalize shopping experience', 'Improve site functionality', 'Support customer service', 'Send promotional emails'].map((item, index) => (
                    <div key={index} className="flex items-center bg-purple-50 px-4 py-3 rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-purple-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-100 border border-purple-200 rounded-xl p-6">
                  <p className="text-purple-800 text-center font-semibold">
                    Here at CoreX Nutrition (demo project), any data is used only to showcase how a real store might function.
                  </p>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12"></div>

              {/* Information Sharing */}
              <section aria-labelledby="information-sharing-section" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-orange-600 rounded-full mr-4"></div>
                  <h2
                    id="information-sharing-section"
                    className="text-2xl font-bold text-gray-900"
                  >
                    DO WE SHARE INFORMATION?
                  </h2>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-orange-800 text-xl font-bold mb-2">No Data Sharing</p>
                  <p className="text-orange-700">
                    We do not sell, trade, or share your personal data with third parties. 
                    All collected data remains internal to the demo.
                  </p>
                </div>
              </section>

              {/* Continue with similar enhanced sections for remaining content... */}

              {/* Disclaimer */}
              <section aria-labelledby="disclaimer-section" className="mt-16">
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-8 w-8 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h2
                        id="disclaimer-section"
                        className="text-2xl font-extrabold text-yellow-800 mb-4"
                      >
                        IMPORTANT DISCLAIMER
                      </h2>
                      <p className="text-yellow-800 text-lg leading-relaxed">
                        CoreX Nutrition is a community-driven, open-source project. 
                        No real transactions, shipments, or returns are processed. 
                        This content is for educational and portfolio purposes only.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>

          {/* Last Updated */}
          <footer className="text-center mt-12 text-gray-500">
            <p>Last updated: October 2023</p>
          </footer>
        </div>
      </main>
    </>
  );
}
