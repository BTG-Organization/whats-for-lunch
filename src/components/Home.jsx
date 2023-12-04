import React from "react";
import Header from "./Template/Header";
import LunchButton from "./Buttons/LunchButton";
import TakeoutButton from "./Buttons/TakeoutButton";
import CalButton from "./Buttons/CalButton";
// import Footer from "../components/Footer";


const Home = () => {

  return (
    <>
      <Header />
    <section className="main-buttons">
      <LunchButton />
      <CalButton />
      <TakeoutButton />
      {/* <Footer /> */}
    </section>
    </>
  );
}


export default Home;
