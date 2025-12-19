import {Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import Todos from './Todos.jsx';
import NotFound from './NotFound.jsx';
import Navbar from './Navbar.jsx';
import "./App.css";

function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}>Home</Route>
      <Route path="/aboutus" element={<AboutUs/>}>About Us</Route>
      <Route path="/todos" element={<Todos/>}>Todos</Route>
      <Route path="*" element={<NotFound/>}>Not Found</Route>
    </Routes>
    </>
  )
};
export default App;