import { useState } from "react";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import DoctorWebsite from "./components/DoctorWebsite/DoctorWebsite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import WhyUs from "./components/WhyUs/WhyUs";
import "./styles/App.scss";
import "./styles/container.scss";
import "./styles/noramlize.scss";
import "./styles/visually-hidden.scss";
import Success from "./components/Success/Success";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <Header setShowModal={setShowModal} />

      <main>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          setSuccess={setSuccess}
        />
        <Success success={success} setSuccess={setSuccess} />
        <Hero setShowModal={setShowModal} />
        <DoctorWebsite />
        <Services />
        <WhyUs />
        <Portfolio />
        <Blog />
        <Contact setSuccess={setSuccess} />
      </main>
      <Footer setShowModal={setShowModal} />
    </>
  );
}

export default App;
