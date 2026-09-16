import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import PageTransition from "./components/PageTransition.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import FloatingCyberCar from "./components/FloatingCyberCar.jsx";

import Home from "./pages/home.jsx";
import Explore from "./pages/explore.jsx";
import Discover from "./pages/discover.jsx";
import VisionCorePage from "./pages/visionCore.jsx";

import { store } from "./store.js";
import { pins as mockPins } from "./data/pins.js";

// Load mock data
store.pins = mockPins;

// Toast system
export const showToast = (msg) => {
  const event = new CustomEvent("show-toast", {
    detail: msg,
  });

  window.dispatchEvent(event);
};

function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      setMessages((old) => [...old, e.detail]);

      setTimeout(() => {
        setMessages((old) => old.slice(1));
      }, 3000);
    };

    window.addEventListener("show-toast", handler);

    return () => {
      window.removeEventListener("show-toast", handler);
    };
  }, []);

  return (
    <div
      id="toast-container"
      aria-live="polite"
      aria-atomic="true"
    >
      {messages.map((m, i) => (
        <div key={i} className="toast">
          {m}
        </div>
      ))}
    </div>
  );
}

function App() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />

      <PageTransition>
        <main id="app">
          <ParticleBackground />
          <FloatingCyberCar page={location.pathname === '/' ? 'home' : location.pathname.slice(1).replace('-', '')} />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/vision-core" element={<VisionCorePage />} />
          </Routes>
        </main>
      </PageTransition>

      <ToastContainer />
    </>
  );
}

export default App;
