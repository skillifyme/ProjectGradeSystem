import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
  Navigate
} from 'react-router-dom';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import LongevityGrid from './components/LongevityGrid';
import ElevateSection from './components/ElevateSection';
import Slideshow from './components/Slideshow';
import ExpertiseSection from './components/ExpertiseSection';
import FAQSection from './components/FAQSection';
import WellnessInsightsSection from './components/WellnessInsightSection';
import PricingSection from './components/PricingSection';
import LuxuryRetreats from './components/LuxuryRetreats';
import Footer from './components/Footer';
import ExplorePage from './pages/ExplorePage';
import ProgramListPage from './pages/ProgramListsPage';
import ProgramDetailsPage from './pages/ProgramDetailsPage';
import ImmersiveScrollSection from './components/ImmersiveScrollingSection';

import './styles/App.css';
import './styles/global.css';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ElevateSection />
      <LongevityGrid />
      <Slideshow />
      <ExpertiseSection />
      <FAQSection />
      <WellnessInsightsSection />
      <ImmersiveScrollSection />
      <PricingSection />
      <LuxuryRetreats />
    </>
  );
};

const Layout = () => {
  return (
    <div className="App min-h-screen bg-white">
      <Navigation />
      <ScrollRestoration />
      <div className="page-content-smooth">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: 'programs', element: <ProgramListPage /> },
      { path: 'program-details', element: <ProgramDetailsPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
