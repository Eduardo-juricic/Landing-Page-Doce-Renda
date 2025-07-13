import Hero from "./components/Hero";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Products from "./components/Products";
import WhatsAppButton from "./components/WhatsAppButton";
// import Instructor from './components/Instructor'; // Se você criar este componente
// import Testimonials from './components/Testimonials'; // Se você tiver depoimentos
// import Pricing from './components/Pricing'; // Se você tiver preços

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      {/* <Instructor /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
