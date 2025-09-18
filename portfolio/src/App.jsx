import { Route, Routes,  } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MusicWorkShop from "./pages/MusicWorkShop";
import AdvertisingAgency from "./pages/AdvertisingAgency";
import TheCourtyard from "./pages/TheCourtyard";
import Ecosaa from "./pages/Ecosaa";
import BritaniaBeYou from "./pages/BritaniaBeYou";
import Jivraj9 from "./pages/Jivraj9";
import SureshZaveri from "./pages/SureshZaveri";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/musicWorkShop" element={<MusicWorkShop />} />
          <Route path="/advertisingAgency" element={<AdvertisingAgency />} />
          <Route path="/theCourtyard" element={<TheCourtyard />} />
          <Route path="/ecosaa" element={<Ecosaa />} />
          <Route path="/britaniaBeYou" element={<BritaniaBeYou />} />
          <Route path="/jivraj9" element={<Jivraj9 />} />
          <Route path="/sureshZaveri" element={<SureshZaveri />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
