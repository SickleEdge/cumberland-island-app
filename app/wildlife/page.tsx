import { Navigation } from "@/components/navigation"
import { Disclaimer } from "@/components/disclaimer"

const wildlifeCategories = [
  {
    title: "Wild Horses",
    description:
      "Cumberland Island is home to a population of feral horses. These horses are descendants of domesticated horses brought to the island in the 1700s. They have adapted to the island's environment and are now considered a natural part of the ecosystem.",
    safetyTips: [
      "Keep a safe distance of at least 50 feet from horses",
      "Never approach, touch, or feed the horses",
      "Do not attempt to ride or interact with the horses",
      "Be aware of your surroundings and watch for horses while hiking",
    ],
  },
  {
    title: "Sea Turtles",
    description:
      "Cumberland Island is an important nesting site for loggerhead sea turtles. These ancient creatures come ashore during the summer months to lay their eggs.",
    safetyTips: [
      "Do not disturb nesting sites or hatchlings",
      "Avoid using flashlights on the beach at night during nesting season",
      "Keep beaches clean and free of debris",
      "Report any injured or dead sea turtles to park rangers",
    ],
  },
  {
    title: "Birds",
    description:
      "The island is a haven for birdwatchers, with over 300 species of birds recorded. From migratory shorebirds to resident raptors, there's always something interesting to see.",
    safetyTips: [
      "Use binoculars for bird watching",
      "Stay on designated trails to avoid disturbing nesting birds",
      "Keep noise levels low when observing birds",
      "Do not feed or attempt to touch birds",
    ],
  },
  {
    title: "Alligators",
    description:
      "American alligators can be found in the island's freshwater ponds and marshes. These ancient reptiles are an important part of the ecosystem.",
    safetyTips: [
      "Keep a safe distance of at least 30 feet from alligators",
      "Never feed or attempt to touch alligators",
      "Be cautious when near water bodies",
      "Report aggressive alligator behavior to park rangers",
    ],
  },
]

export default function WildlifePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Wildlife Guide
          </h1>
          <p className="text-lg text-green-800 mb-8">
            Learn about the diverse wildlife that calls Cumberland Island home and how to safely observe them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wildlifeCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-green-900 mb-4">
                {category.title}
              </h2>
              <p className="text-green-800 mb-6">{category.description}</p>
              <div>
                <h3 className="text-lg font-medium text-green-900 mb-3">
                  Safety Tips
                </h3>
                <ul className="space-y-2">
                  {category.safetyTips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-green-700"
                    >
                      <span className="text-green-600">•</span>
                      {tip}
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
                Important Note
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Remember that you are a visitor in the animals' home. Always observe
                  wildlife from a safe distance and respect their space. If you encounter
                  any injured or distressed wildlife, please report it to park rangers
                  immediately.
                </p>
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