// https://www.makeuseof.com/react-drag-and-drop-components/
import './App.css'
import Mainframe from './Pages/Mainframe'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageRoiRegister from './Pages/RoiRegister';
import Filters from './Pages/filters';

function App() {


  return (
    
    <>
    
      {/* <Mainframe /> */}
      {/* <Mainframe /> */}

      <BrowserRouter>
        <Routes>
          
          <Route  element={<Mainframe />} path="/mainframe" ></Route>
          <Route  element={<PageRoiRegister />} path="/Cadastro-de-roi" ></Route>
          <Route  element={<Filters />} path="/Painel" ></Route>
       
        </Routes>
      </BrowserRouter>


    </>

  )

}

export default App
