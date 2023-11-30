import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-screen h-screen bg-primary ">
      <nav className="px-6 flex justify-center items-center ">
        <Navbar></Navbar>
      </nav>
      <div className="px-6 flex justify-center items-center ">
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
