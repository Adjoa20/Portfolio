import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe"
import ProjectSection from "./components/ProjectSection";
import ConnectPage from "./components/ConnectPage"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutralbg">
      <NavBar />
      <div class= "container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <ConnectPage />
      </div>
      <Footer />
    </main>
  );
}
