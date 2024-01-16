import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
// import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer  from "./components/Footer.jsx";
import Profile  from "./components/Profile.jsx";
import { Toaster } from "react-hot-toast";
import { useState } from "react";


function App() {

  const [menuOpen , setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
<>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home />
    <Work />
    <Timeline />
    <Services />
    {/* <Testimonails /> */}
    <Contact />
    <Footer />
    <Toaster />
</>
  );
}

export default App;
