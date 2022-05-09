// NOTE to use links you must import and use route and router
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import About from "./components/layouts/pages/About";
import Home from "./components/layouts/pages/Home";
import NotFound from "./components/layouts/pages/NotFound";
import Footer from "./components/layouts/Footer";


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen ">
        <Navbar/>
          <main className="conatiner mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/notfound" element={<NotFound/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>  
          </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;