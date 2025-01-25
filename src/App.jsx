import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import Service from "./Sections/Services";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import "swiper/css";
import About  from "./Sections/About";
import Gallery from "./Sections/Kitchen_Gallery";
import Gallery1 from "./Sections/garden_gallery/index2";
import Gallery2 from "./Sections/bathroom_gallery/index3";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Gallery/>
      <Gallery1/>
      <Gallery2/>
      <Service/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
