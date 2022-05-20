import {Routes, Route} from "react-router-dom"
import "./sass/App.css";
import Header from "./components/Header"
import Products from "./components/Products"
import IndividualProduct from "./pages/IndividualProduct"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="main-grid">
      <Header />
      <Routes>
        <Route exact path="/" element={<Products />}/> 
        <Route exact path="/individual-product/:id" element={<IndividualProduct />}/>  
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
