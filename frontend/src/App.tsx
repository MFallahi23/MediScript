import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import "./styles/container.scss";
import "./styles/noramlize.scss";
import "./styles/visually-hidden.scss";
import Success from "./components/Success/Success";
import Home from "./pages/Home/Home";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogPost from "./pages/BlogPost/BlogPost";
import About from "./pages/About/About";
import Legal from "./pages/Legal/Legal";
import Politic from "./pages/Politic/Politic";
import WhatsAppIcon from "./assets/icons/whatsapp.svg?react";

const number = "212666666666"; // votre numéro en format international
const placeholderMessage =
  "Bonjour, je suis [votre nom ou titre professionnel] et je vous contacte pour que vous puissiez créer un site web, une application ou autre pour mon cabinet médical.";
const url = `https://wa.me/${number}?text=${encodeURIComponent(
  placeholderMessage
)}`;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <Router>
      <Header setShowModal={setShowModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setSuccess={setSuccess}
      />
      <Success success={success} setSuccess={setSuccess} />
      <a
        className="whatsapp-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Envoyer un message WhatsApp"
      >
        <WhatsAppIcon className="whatsapp-icon" width={50} height={50} />
      </a>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home setShowModal={setShowModal} setSuccess={setSuccess} />
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route
            path="/about"
            element={<About setShowModal={setShowModal} />}
          />
          <Route path="/legal" element={<Legal />} />
          <Route path="/politic" element={<Politic />} />
        </Routes>
      </main>
      <Footer setShowModal={setShowModal} />
    </Router>
  );
}

export default App;
