import logo from "../../assets/Logo-CodeLab.png";
import "./Header.css"
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
export default Header
