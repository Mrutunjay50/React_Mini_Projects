import React from 'react';
import { Navbar,Hero,Service,Clock, PokeApi,Accordion,GoogleKeep, TypeSpeedChecker,CopyRight} from './Components';
import {Link,Routes, Route} from 'react-router-dom';
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
              <Route path="*" element={<>
                <div className='min-h-[87vh] max-h-fit text-gradient font-ubantu font-extrabold text-[50px] text-center'>Page Yet To Be Created<br/><Link to='/'><button className='border border-yellow-50 rounded-md px-4 py-1'>Home Page</button></Link></div>
                
              </>} />
            </Routes>
            <CopyRight />
            </div>
        </>
    </>
  );
}

export default App;
