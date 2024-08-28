
import Hero from './Hero/Hero'
import Prompts from './Prompts/Prompts'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        
        <Hero/>

        <Prompts/>


      </main>

      <footer className="bg-black shadow-md py-8">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2024 Your Project Guardian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}