import { Navigation } from "@/components/navigation"
import { Disclaimer } from "@/components/disclaimer"

const visitorInfo = [
  {
    title: "Getting There",
    content: [
      "The only way to reach Cumberland Island is by ferry from St. Marys, Georgia",
      "Ferry reservations are required and can be made through the National Park Service",
      "The ferry ride takes approximately 45 minutes",
      "Limited parking is available in St. Marys",
    ],
  },
  {
    title: "What to Bring",
    content: [
      "Plenty of water (at least 1 gallon per person per day)",
      "Food and snacks (no food service on the island)",
      "Sunscreen and insect repellent",
      "Comfortable walking shoes",
      "Binoculars for wildlife viewing",
      "Camera",
      "First aid kit",
      "Weather-appropriate clothing",
    ],
  },
  {
    title: "Island Rules",
    content: [
      "Stay on marked trails",
      "Do not feed or approach wildlife",
      "Pack out all trash",
      "No pets allowed",
      "No bicycles allowed",
      "No camping outside designated areas",
      "No collecting of natural or cultural resources",
      "No drones or remote-controlled aircraft",
    ],
  },
  {
    title: "Facilities",
    content: [
      "Restrooms available at Sea Camp",
      "No food service on the island",
      "No drinking water available (bring your own)",
      "No trash cans (pack out all trash)",
      "No cell phone service in most areas",
      "No Wi-Fi available",
    ],
  },
]

export default function VisitorInfoPage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Visitor Information
          </h1>
          <p className="text-lg text-green-800 mb-8">
            Essential information to help you plan your visit to Cumberland Island National Seashore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visitorInfo.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-green-900 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.content.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-green-700"
                  >
                    <span className="text-green-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Important Reminders
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check the weather forecast before your visit</li>
                  <li>Make ferry reservations well in advance</li>
                  <li>Arrive at the ferry dock at least 30 minutes before departure</li>
                  <li>Be prepared for limited facilities and services</li>
                  <li>Follow Leave No Trace principles</li>
                  <li>Respect wildlife and maintain safe distances</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-900 mb-4">
            Need More Information?
          </h2>
          <p className="text-green-800 mb-4">
            For the most up-to-date information about visiting Cumberland Island, please visit the
            official National Park Service website or contact the park directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.nps.gov/cuis/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Official NPS Website
            </a>
            <a
              href="tel:9128824336"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
            >
              Call Park Office: (912) 882-4336
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-green-200">
            <p>© {new Date().getFullYear()} Cumberland Island Visitor Guide</p>
            <p className="mt-2 text-sm">
              This is an unofficial guide. Not affiliated with the National Park Service.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 