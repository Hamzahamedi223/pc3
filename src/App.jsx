import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import Service from "./Sections/Services";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import "swiper/css";
import About  from "./Sections/About";
import Gallery2 from "./Sections/Business_gallery/index2";
import Gallery3 from "./Sections/bathroom_gallery/index3";
import Gallery from "./Sections/outdoor_Gallery";


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Service/>
      <About/>
      <Gallery/>
      <Gallery2/>
      <Gallery3/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
