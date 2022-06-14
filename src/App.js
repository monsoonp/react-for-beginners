// https://nomadcoders.co/react-for-beginners/lectures/3290

// gh-pages
// package.json 
// add "homepage": "https://monsoonp.github.io/{repo}"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App