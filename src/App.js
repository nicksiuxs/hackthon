import { Route, Routes } from "react-router";

// Pages
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
