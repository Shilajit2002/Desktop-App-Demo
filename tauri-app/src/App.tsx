import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Table from "./Components/Table";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/data" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
