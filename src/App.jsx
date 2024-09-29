import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Benefits from './components/Benifits';
import Collaboration from './components/Collaboration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Login from './components/Login'; // Directly using Login here

const App = () => {
    return (
        <Routes>
            <Route path="/" element={
                <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                    <Header />
                    <HeroSection />
                    <Benefits />
                    <Collaboration />
                    <Services />
                    <Pricing />
                    <Roadmap />
                    <Footer />
                </div>
            } />
            <Route path="/login" element={<Login />} /> {/* Login route */}
        </Routes>
    );
};

export default App;
