import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Banner />
      <Navbar />
      <MainSection />
    </main>
  );
}
