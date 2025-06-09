import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersList, partnersSection } from "../data/PartnersSection";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contacts from "../components/Contacts";
import { contactsSection } from "../data/ContactsSection";

import parse from "html-react-parser";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        <section id="courses">
          <div className="kolom">{parse(coursesSection.content)}</div>
          <img src={coursesSection.image} />
        </section>
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnersList={partnersList}/>
          </div>
        </section>
    
      </div>
      <Contacts contactsSection={contactsSection}/>
      <Footer />
    </>
  );
}

export default Home;
