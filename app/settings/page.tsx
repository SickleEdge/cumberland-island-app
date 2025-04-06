import { ArrowLeft, Bell, Compass, Moon, Smartphone, Volume2 } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="bg-green-800 text-white p-4 flex items-center gap-2">
        <Link href="/" className="p-1 rounded-full hover:bg-green-700">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Settings</h1>
      </header>

      <main className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow divide-y">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-green-600" />
              <span>Notifications</span>
            </div>
            <Switch id="notifications" />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-green-600" />
              <span>Dark Mode</span>
            </div>
            <Switch id="dark-mode" />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 text-green-600" />
              <span>Use GPS</span>
            </div>
            <Switch id="use-gps" defaultChecked />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="h-5 w-5 text-green-600" />
              <span>Audio Volume</span>
            </div>
            <Slider defaultValue={[70]} max={100} step={1} className="w-full" />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="h-5 w-5 text-green-600" />
              <span>Data Usage</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="offline-maps" className="text-sm">
                  Download offline maps
                </label>
                <Switch id="offline-maps" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="high-res" className="text-sm">
                  High resolution images
                </label>
                <Switch id="high-res" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <button className="w-full p-3 bg-white rounded-lg shadow text-center">Report an Issue</button>
          <button className="w-full p-3 bg-white rounded-lg shadow text-center">Privacy Policy</button>
          <button className="w-full p-3 bg-white rounded-lg shadow text-center">Terms of Service</button>
          <div className="text-center text-sm text-gray-500 mt-4">App Version 1.0.0</div>
        </div>
      </main>
    </div>
  )
}

