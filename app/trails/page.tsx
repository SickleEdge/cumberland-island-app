import { Navigation } from "@/components/navigation"
import { Disclaimer } from "@/components/disclaimer"

const trails = [
  {
    name: "Sea Camp Trail",
    length: "3.5 miles",
    difficulty: "Easy",
    description:
      "A scenic trail that leads from the Sea Camp dock to the beach. This trail passes through maritime forest and salt marsh, offering opportunities to see wildlife and historic sites.",
    highlights: [
      "Sea Camp Beach access",
      "Historic Dungeness ruins",
      "Wildlife viewing opportunities",
      "Salt marsh views",
    ],
  },
  {
    name: "Main Road",
    length: "7.5 miles",
    difficulty: "Moderate",
    description:
      "The main road runs from the Sea Camp dock to the north end of the island. This wide, sandy road provides access to many of the island's historic sites and natural areas.",
    highlights: [
      "Historic Plum Orchard mansion",
      "Cumberland Island Museum",
      "Wildlife viewing",
      "Scenic views of the marsh",
    ],
  },
  {
    name: "Beach Trail",
    length: "18 miles",
    difficulty: "Moderate to Difficult",
    description:
      "The beach trail runs along the entire length of the island's Atlantic coast. This trail offers stunning ocean views and opportunities to see sea turtles and shorebirds.",
    highlights: [
      "Sea turtle nesting sites",
      "Shell collecting",
      "Ocean views",
      "Shorebird watching",
    ],
  },
  {
    name: "Parallel Trail",
    length: "4.5 miles",
    difficulty: "Moderate",
    description:
      "A scenic trail that runs parallel to the main road, offering a more natural hiking experience through the island's interior.",
    highlights: [
      "Dense forest views",
      "Wildlife viewing",
      "Historic site access",
      "Quieter alternative to main road",
    ],
  },
]

export default function TrailsPage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Trail Guide
          </h1>
          <p className="text-lg text-green-800 mb-8">
            Explore the beautiful trails of Cumberland Island. Remember to stay on marked trails and
            respect the natural environment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {trails.map((trail) => (
            <div
              key={trail.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-semibold text-green-900">
                  {trail.name}
                </h2>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="text-green-700">
                    Length: {trail.length}
                  </span>
                  <span className="text-green-700">
                    Difficulty: {trail.difficulty}
                  </span>
                </div>
              </div>
              <p className="text-green-800 mb-6">{trail.description}</p>
              <div>
                <h3 className="text-lg font-medium text-green-900 mb-3">
                  Trail Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {trail.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-green-700"
                    >
                      <span className="text-green-600">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
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
                Trail Safety Tips
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Always carry plenty of water and snacks</li>
                  <li>Wear appropriate footwear and clothing</li>
                  <li>Be aware of your surroundings and watch for wildlife</li>
                  <li>Stay on marked trails to protect the environment</li>
                  <li>Check weather conditions before starting your hike</li>
                  <li>Let someone know your hiking plans</li>
                </ul>
              </div>
            </div>
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