import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import DoctorWebsite from "../../components/DoctorWebsite/DoctorWebsite";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Services from "../../components/Services/Services";
import WhyUs from "../../components/WhyUs/WhyUs";

interface iHome {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<iHome> = ({ setShowModal, setSuccess }) => {
  return (
    <>
      <Hero setShowModal={setShowModal} />
      <DoctorWebsite />
      <Services />
      <WhyUs />
      <Portfolio />
      <Blog />
      <Contact setSuccess={setSuccess} />
    </>
  );
};

export default Home;
