import { Navigation } from "@/components/navigation"
import { Disclaimer } from "@/components/disclaimer"

const emergencyInfo = [
  {
    title: "Emergency Contacts",
    content: [
      {
        label: "Park Rangers",
        number: "(912) 882-4336",
        description: "For general emergencies and assistance",
      },
      {
        label: "Emergency Services",
        number: "911",
        description: "For life-threatening emergencies",
      },
      {
        label: "Coast Guard",
        number: "(912) 882-4336",
        description: "For maritime emergencies",
      },
    ],
  },
  {
    title: "First Aid Information",
    content: [
      "Basic first aid supplies are available at the Sea Camp Ranger Station",
      "Park rangers are trained in first aid and emergency response",
      "The nearest hospital is in St. Marys, Georgia",
      "Emergency evacuation may be arranged through park rangers",
    ],
  },
  {
    title: "Weather Emergencies",
    content: [
      "Monitor weather conditions before and during your visit",
      "Seek shelter immediately if thunderstorms approach",
      "Avoid water activities during severe weather",
      "Follow ranger instructions during weather emergencies",
    ],
  },
  {
    title: "Wildlife Encounters",
    content: [
      "Keep a safe distance from all wildlife",
      "Do not approach or attempt to touch any animals",
      "If threatened by wildlife, remain calm and back away slowly",
      "Report aggressive wildlife behavior to rangers immediately",
    ],
  },
]

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Emergency Information
          </h1>
          <p className="text-lg text-green-800 mb-8">
            Important safety information and emergency contacts for your visit to Cumberland Island.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {emergencyInfo.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-green-900 mb-4">
                {section.title}
              </h2>
              {section.title === "Emergency Contacts" ? (
                <div className="space-y-4">
                  {section.content.map((contact, index) => (
                    <div key={index} className="border-b border-green-100 pb-4 last:border-0">
                      <h3 className="font-medium text-green-900">{contact.label}</h3>
                      <a
                        href={`tel:${contact.number.replace(/\D/g, "")}`}
                        className="text-lg text-green-600 hover:text-green-700"
                      >
                        {contact.number}
                      </a>
                      <p className="text-green-700 mt-1">{contact.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
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
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
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
              <h3 className="text-sm font-medium text-red-800">
                Emergency Preparedness
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Always carry a first aid kit</li>
                  <li>Know your location on the island</li>
                  <li>Stay hydrated and protect yourself from the sun</li>
                  <li>Be aware of tide times and weather conditions</li>
                  <li>Keep emergency contact numbers readily available</li>
                  <li>Travel with a companion when possible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-900 mb-4">
            Emergency Evacuation
          </h2>
          <p className="text-green-800 mb-4">
            In case of emergency, park rangers will coordinate evacuation procedures.
            Follow their instructions carefully and remain calm.
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h3 className="font-medium text-green-900 mb-2">Evacuation Procedures:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-green-700">
              <li>Contact a park ranger immediately</li>
              <li>Provide your exact location and nature of emergency</li>
              <li>Follow ranger instructions for evacuation</li>
              <li>Stay with your group if possible</li>
              <li>Remain calm and patient during evacuation</li>
            </ol>
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