import PropTypes from "prop-types";
import logo from "./assets/logo-tuhoc.png";
import {myData } from "../data"

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React</h1>
        <p>
        Learn React – Explore how to build flexible, modern, and creative applications!
        </p>
      </header>
    </>
  );
}

function MainContent({image,title,desc}){
  return(
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  )
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
} 

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Key Concepts in React</h2>
          <ul>
            <MainContent {...myData[0]}/>
            <MainContent {...myData[1]}/>
            <MainContent {...myData[2]}/>
            <MainContent {...myData[3]}/>
            
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
