import { Route, Routes } from "react-router";
import AppProvider from "./context/AppContext";

// Pages
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Register from "./pages/Register";

// components
import Stepper from "./components/Stepper/Stepper";
import Header from "./components/Header/Header";

// styles
import "./App.css";

function App() {
  return (
    <AppProvider>
      <main className="main-content">
        <Header />
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
