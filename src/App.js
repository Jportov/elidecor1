import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import Footer from './components/Footer/index';
import Form from "./components/form/index";
import Header from "./components/Header/header"; // Caminho do componente
import Home from "./components/Home/home";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Form/>
      <Footer/>
      
      {/* Outros componentes aqui */}
    </div>
  );
}

export default App;
