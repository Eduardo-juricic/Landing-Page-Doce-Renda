import Hero from "./components/Hero";
import About from "./components/About";
import Learning from "./components/Learning";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
// import Instructor from './components/Instructor'; // Se você criar este componente
// import Testimonials from './components/Testimonials'; // Se você tiver depoimentos
// import Pricing from './components/Pricing'; // Se você tiver preços

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Learning />
      {/* <Instructor /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
