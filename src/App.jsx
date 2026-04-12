import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Process from "./components/Process";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <Services />
        <Process />
      </main>
    </div>
  );
}
