import { Route, Routes } from "react-router";
import AppProvider from "./context/AppContext";

// Pages
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Register from "./pages/Register";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
