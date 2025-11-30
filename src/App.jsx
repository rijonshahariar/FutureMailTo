import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar/Navbar'
import MessageComposer from './components/MessageComposer/MessageComposer'
import Features from './components/Features/Features'
import FAQ from './components/FAQ/FAQ'
import FAQPage from './components/FAQPage/FAQPage'
import Login from './components/Login/Login'
import UserProfile from './components/UserProfile/UserProfile'
import Dashboard from './components/Dashboard/Dashboard'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import HowItWorks from './components/HowItWorks/HowItWorks'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './components/TermsConditions/TermsConditions'
import Contact from './components/Contact/Contact'
import CookieConsentModal from './components/CookieConsent/CookieConsentModal'
import MessageSection from './components/MessageSection'
import SuccessPage from './components/MessageComposer/SuccessPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"
import Review from './components/Review/Review';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/profile" element={
            <>
              <Navbar />
              <UserProfile />
              <Footer />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <Navbar />
              <Dashboard />
              <Footer />
            </>
          } />

          <Route path="/review" element={
            <>
              <Navbar />
              <Review />
              <Footer/>
            </>
          } />
          <Route path="/" element={
            <div className="min-h-screen bg-gray-900">
              <Navbar />
              <div className="pt-40">
                <MessageComposer />
                <MessageSection />
                <Features />
                <FAQ />
              </div>
              <Footer />
            </div>
          } />
          <Route path="/admin" element={<><Navbar /><AdminDashboard /> <Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/how-it-works" element={<><Navbar /><HowItWorks /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><FAQPage /><Footer /></>} />
          <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
          <Route path="/terms-conditions" element={<><Navbar /><TermsConditions /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/success" element={<>
            <Navbar />
            <SuccessPage />
            <Footer />
          </>} />
        </Routes>
      </AuthProvider>
      <CookieConsentModal />
      <Analytics />
    </Router>
  )
}

export default App
