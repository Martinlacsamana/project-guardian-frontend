import Image from "next/image";
import LandingPage from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar/>
      <LandingPage/>
    </main>
  );
}
