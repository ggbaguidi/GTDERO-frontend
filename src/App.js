import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Login from './components/Login';
import Features from './components/Features';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ErrorPage from "./error-page";
import Sites from './components/Sites';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Common from './components/dashboard/Common';
import SiteDetail from './components/SiteDetail';
import StrategyDisplay from './components/StrategyDisplay';
import UserManagement from './components/User';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Upload from './components/Upload';
import Forecasting from './components/Forcast';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<>
            <Header />
            <Hero />
            <Features />
          </>} errorElement={<ErrorPage />} />
          <Route path="/about" element={<><Header /><AboutUs /></>} errorElement={<ErrorPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} errorElement={<ErrorPage />} />
          <Route path="/login" element={<><Header /><Login /></>} errorElement={<ErrorPage />} />
          <Route path="/signup" element={<><Header /><Signup /></>} errorElement={<ErrorPage />} />
          <Route path="/dashboard" element={<Common><Dashboard /></Common>} errorElement={<ErrorPage />} />
          <Route path='/features' element={<><Header /><Features /></>} errorElement={<ErrorPage />} />
          <Route path="/sites" element={<Common><Sites /></Common>} />
          <Route path="/analytics" element={<Common><Analytics /></Common>} />
          <Route path="/settings" element={<Common><Settings /></Common>} />
          <Route path="/sites/:siteId" element={<Common><SiteDetail /></Common>} />
          <Route path="/strategy" element={<Common><StrategyDisplay /></Common>} />
          <Route path="/users" element={<Common><UserManagement /></Common>} />
          <Route path="/upload" element={<Common><Upload /></Common>} />
          <Route path="/forcast" element={<Common><Forecasting /></Common>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
// Inside your Routes in App.js

export default App;
