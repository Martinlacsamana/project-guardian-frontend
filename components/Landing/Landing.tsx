import Link from 'next/link'
// Import DaisyUI components if necessary

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="px-4 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-xl md:text-4xl font-semibold mb-4 text-gray-800">Your Life is a Story.<br /> Journal with Meaning.</h1>
              <p className="text-md mb-6 text-gray-700">
                Capture your thoughts, memories, and experiences in a meaningful way. Create a legacy for your children that will last beyond your lifetime, training an AI to preserve your stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="name@company.com" className="input input-bordered max-w-sm" />
                <button className="btn btn-lg bg-blue-600 text-white hover:bg-blue-700">Sign Up for Free</button>
              </div>
              <div className="mt-8">
                <p className="mb-2 text-gray-700">Download the app for</p>
                <div className="flex space-x-4">
                  <button className="btn btn-outline text-blue-600 border-blue-600 hover:bg-blue-50">Windows</button>
                  <button className="btn btn-outline text-blue-600 border-blue-600 hover:bg-blue-50">Mac</button>
                  <button className="btn btn-outline text-blue-600 border-blue-600 hover:bg-blue-50">Linux</button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="/placeholder.svg?height=300&width=500" 
                  alt="Journaling App Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">What is Your Journal Guardian?</h2>
            <p className="text-xl text-gray-700">
              Your Journal Guardian is a meaningful journaling app designed to help you document your life stories. It serves as a personal guardian for your memories, ensuring they are preserved for future generations.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-50 py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 Your Journal Guardian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}