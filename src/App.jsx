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

function MainContent(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
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
            <MainContent
            image ={myData[0].image}
            title = {myData[0].title}
            desc = {myData[0].desc}
            />
            <MainContent
            image ={myData[1].image}
            title = {myData[1].title}
            desc = {myData[1].desc}
            />
            <MainContent
            image ={myData[2].image}
            title = {myData[2].title}
            desc = {myData[2].desc}
            />
            <MainContent
            image ={myData[3].image}
            title = {myData[3].title}
            desc = {myData[3].desc}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
