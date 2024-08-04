import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import SectionTemp from "./components/SectionTemp/SectionTemp";

function App() {
  return (
    <>
      <Hero />
      <SectionTemp
        number={"01"}
        isImageRight={true}
        heading={"GEt Started"}
        title={"What level of  hiker are you?"}
        desc={
          "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        }
        imageLink={
          "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <SectionTemp
        number={"02 "}
        isImageRight={false}
        heading={"Hiking Essentials"}
        title={"Picking the right Hiking Gear!"}
        desc={
          "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        }
        imageLink={
          "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <SectionTemp
        number={"03 "}
        isImageRight={true}
        heading={"where you go is the key"}
        title={"Understand Your Map & Timing"}
        desc={
          "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        }
        imageLink={
          "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Footer />
    </>
  );
}

export default App;
