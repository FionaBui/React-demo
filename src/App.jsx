import Header from "./components/Header/Header";
import Examples from "./components/MainContent/Examples";
import Maincontents from "./components/MainContent/MainContents";


function App() {
  
  return (
    <>
      {/* Render the Header component */}
      <Header />
      <main>
        <Maincontents/>
        {/* Section displaying example topics */}
        <Examples/>
      </main>
      
    </>
  );
}

export default App;
