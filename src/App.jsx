import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShowDetail from "./Components/ShowDetail/ShowDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShowDetail" element={<ShowDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
