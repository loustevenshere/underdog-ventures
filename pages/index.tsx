import Head from 'next/head'
import { BUSINESS_NAME, PHONE, PHONE_LINK, EMAIL, ADDRESS } from '../lib/site'

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>Underdog Ventures Luxury Chauffeur & Airport Transfers</title>
        <meta name="description" content="Door-to-door luxury transportation, executive chauffeur, and airport transfers serving Philadelphia, PA and surrounding areas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/underdogventures.png" />
        <link rel="shortcut icon" type="image/png" href="/underdogventures.png" />
        <link rel="apple-touch-icon" href="/underdogventures.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": BUSINESS_NAME,
              "telephone": "+1-215-518-2154",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "17 Hiltys Drive",
                "addressLocality": "Douglassville",
                "addressRegion": "PA",
                "postalCode": "19518",
                "addressCountry": "US"
              },
              "url": "https://underdogventuresllc.com",
              "description": "Door-to-door luxury transportation, executive chauffeur, and airport transfers serving Philadelphia, PA and surrounding areas."
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative w-full h-[48vh] md:h-[60vh] overflow-hidden">
          <img
            src="/rolls-royce.jpg"
            alt="Black luxury vehicle interior and exterior representing chauffeur service"
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {BUSINESS_NAME}
              </h1>
              <p className="text-xl md:text-2xl drop-shadow-md">
                Superior door-to-door transportation in luxury vehicles
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Services
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Airport transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Executive & private chauffeur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Hourly bookings / special events</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Our Vehicles Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Vehicles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/escalade-IQ.jpg"
                  alt="Cadillac Escalade IQ luxury vehicle"
                  className="w-full h-48 object-cover"
                  width={600}
                  height={300}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Cadillac Escalade IQ
                  </h3>
                  <p className="text-gray-600">
                    Luxury and Comfort
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/mercedes-benz.jpg"
                  alt="Mercedes-Benz luxury vehicle"
                  className="w-full h-48 object-cover"
                  width={600}
                  height={300}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mercedes-Benz
                  </h3>
                  <p className="text-gray-600">
                    Elegance and Performance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Rates & Booking Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Rates & Booking
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Contact us for rates and availability.
              </p>
              <div className="space-y-4">
                <a 
                  href={PHONE_LINK}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  📞 Call {PHONE}
                </a>
                <div className="text-gray-500">or</div>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </section>

          {/* Policies Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Policies
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cancellations made within 2 hours of pickup may be subject to a 50% fee. Tolls and parking charges are billed at cost. Professional invoices are available upon request.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-gray-300 mb-2">
                © {currentYear} {BUSINESS_NAME}
              </p>
              <p className="text-gray-400 text-sm mb-2">
                {ADDRESS}
              </p>
              <a 
                href={PHONE_LINK}
                className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
