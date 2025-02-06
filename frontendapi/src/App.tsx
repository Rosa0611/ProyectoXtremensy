import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActivitiesIndex from "./components/Activities/ActivitiesIndex";
import ActivityForm from "./components/Activities/ActivityForm";
import Products from "./components/Activities/Products";
import HeaderApp from "./components/Layout/HeaderApp";
import FooterApp from "./components/Layout/FooterApp";
import NavbarApp from "./components/Layout/NavbarApp";
import Conta from "./components/Activities/Conta";
import Welcome from "./components/Pages/Welcome";
import EditProduct from "./components/Activities/EditProduct"; 
import Login from "./components/Activities/Login"; 
import SignUp from "./components/Activities/SignUp"; // Importamos el formulario de edición

function App() {
  return (
    <Router>
      <div className="bg-zinc-800 min-h-screen text-white flex flex-col">
        <HeaderApp />
        <NavbarApp />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contacto" element={<Conta />} />
          <Route path="/ActivityForm" element={<ActivityForm />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          
        </Routes>

        <FooterApp />
      </div>
    </Router>
  );
}

export default App;



