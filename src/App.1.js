import React from 'react';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import CardsDetails from './Components/CardsDetails';
import Cards from "./Components/Cards";

//import 'bootstrsp/dist/css/bootstrap.min.css';
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path='/cart/:id' element={<CardsDetails />} />
            </Routes>

        </>
    );
}
export default App;
