import React from 'react';
import { Navbar,Hero,Service,Clock, PokeApi,Accordion,GoogleKeep, TypeSpeedChecker,CopyRight} from './Components';
import {Routes, Route} from 'react-router-dom';
// import Projects from "./Components/Projects";
function App() {
  return (
    <>
      <>
      <div className="bg-primary">
            <Clock/>
            <Navbar />
            <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/service'>
              <Route index element={<Service />}/>
              <Route path='/service/notesapp' element={<GoogleKeep/>} />
              <Route path='pokemongame' element={<PokeApi />}/>
              <Route path='accordion' element={<Accordion/>} />
              <Route path='typechecker' element={<TypeSpeedChecker/>} />
            </Route>
              <Route path="*" element={<h1 className='min-h-[87vh] max-h-fit text-gradient font-ubantu font-extrabold text-[50px] text-center'>Page Yet To Be Created</h1>} />
            </Routes>
            <CopyRight />
            </div>
        </>
    </>
  );
}

export default App;
