
import Hero from './Hero/Hero'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        
        <Hero/>


        

        <section className="px-4 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">What is Your Journal Guardian?</h2>
            <p className="text-xl text-gray-700">
              Your Journal Guardian is a meaningful journaling app designed to help you document your life stories. It serves as a personal guardian for your memories, ensuring they are preserved for future generations.
            </p>
          </div>
        </section>



      </main>

      <footer className="bg-black shadow-md py-8">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2024 Your Project Guardian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}