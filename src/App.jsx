import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import all components
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import ProtectedRoute from './components/ProtectedRoute';
import ContactsManagement from './components/ContactsManagement';
import EmailsManagement from './components/EmailsManagement';

// Import context
import { AuthProvider } from './context/AuthContext';

// Error Boundary Component
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">We're sorry for the inconvenience. Please try refreshing the page.</p>
        <button
          onClick={resetErrorBoundary}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Loading Component
const LoadingSpinner = () => (
  <motion.div
    className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center">
      <motion.div
        className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full mx-auto mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="text-teal-600 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Loading Royavalet...
      </motion.p>
    </div>
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Handle quote request
  const handleGetQuote = useCallback(() => {
    // Navigate to contact page or scroll to contact section
    window.location.href = '/contact';
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <AnimatePresence>
              {isLoading && <LoadingSpinner />}
            </AnimatePresence>

            {/* Main Content with Routes */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header onGetQuote={handleGetQuote} />
                  <Home />
                  <Footer />
                </motion.div>
              } />

              <Route path="/about" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header onGetQuote={handleGetQuote} />
                  <AboutUs />
                  <Footer />
                </motion.div>
              } />

              <Route path="/contact" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header onGetQuote={handleGetQuote} />
                  <ContactUs />
                  <Footer />
                </motion.div>
              } />

              <Route path="/services" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header onGetQuote={handleGetQuote} />
                  <ServicesPage />
                  <Footer />
                </motion.div>
              } />

              <Route path="/gallery" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header onGetQuote={handleGetQuote} />
                  <Gallery />
                  <Footer />
                </motion.div>
              } />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute requireAdmin={true}>
                  <Dashboard />
                </ProtectedRoute>
              }>
                {/* Nested Dashboard Routes */}
                <Route index element={<DashboardHome />} />
                <Route path="contacts" element={<ContactsManagement />} />
                <Route path="emails" element={<EmailsManagement />} />
                <Route path="bookings" element={<div className="p-6 bg-white rounded-lg shadow-sm">Bookings Page - Coming Soon</div>} />
                <Route path="services" element={<div className="p-6 bg-white rounded-lg shadow-sm">Services Page - Coming Soon</div>} />
                <Route path="users" element={<div className="p-6 bg-white rounded-lg shadow-sm">Users Page - Coming Soon</div>} />
                <Route path="analytics" element={<div className="p-6 bg-white rounded-lg shadow-sm">Analytics Page - Coming Soon</div>} />
                <Route path="settings" element={<div className="p-6 bg-white rounded-lg shadow-sm">Settings Page - Coming Soon</div>} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

