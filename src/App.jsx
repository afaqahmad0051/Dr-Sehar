import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Education from "./components/Skills";
import Research from "./components/Services";
import Publications from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Research />
      <Publications />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
