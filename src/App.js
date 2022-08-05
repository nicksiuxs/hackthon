import { Route, Routes } from "react-router";
import AppProvider from "./context/AppContext";

// Pages
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import Register from "./pages/Register/Register";

// components
import Stepper from "./components/Stepper/Stepper";
import Header from "./components/Header/Header";

// styles
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Header />
      <main className="main-content">
        <Stepper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
    </AppProvider>
  );
}

export default App;
