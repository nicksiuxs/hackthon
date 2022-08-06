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
import Footer from "./components/Footer/Footer";
import BackNavigation from "./components/BackNavigation/BackNavigation";
import Protected from "./Protected";
import Success from "./pages/Success/Success";

function App() {
  return (
    <AppProvider>
      <Header />
      <main className="main-content">
        <div className="navigation-controls">
          <BackNavigation/>
          <Stepper />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/register"
            element={
              <Protected>
                <Register />
              </Protected>
            } />
          <Route
            path="/payment"
            element={
              <Protected>
                <Payment />
              </Protected>
            } />
        </Routes>
      </main>
      <Footer />
    </AppProvider>
  );
}

export default App;
