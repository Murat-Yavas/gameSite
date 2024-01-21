import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import GameSection from "./components/gameSection/GameSection.jsx";
import "./App.css";

import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";

function App() {
  const { isShow } = useSelector((state) => state.game);

  return (
    <>
      <Navbar />
      <Hero />
      <GameSection />
      <Footer />
    </>
  );
}

export default App;
