import React from 'react';
import { MortgageFoam } from './component/mortgage/MortgageFoam';
import { MortgageWrapper } from './component/MortgageWrapper';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<MortgageWrapper />} />
        <Route path="question" element={<MortgageFoam />} />
        
      </Routes>
    </BrowserRouter>
          </>
  )
}

export default App
