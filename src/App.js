// NOTE to use links you must import and use route and router
import { BrowserRouter as Router,Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen ">
        <Navbar/>
          <main className="conatiner mx-auto px-3 pb-12">
            content 
          </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
