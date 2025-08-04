import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const DashboardNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('adminUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the admin panel',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      // Clear localStorage
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      
      // Show success message
      await Swal.fire({
        title: 'Logged out!',
        text: 'You have been successfully logged out',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
      
      // Navigate to login
      navigate('/admin/login');
    }
  };

  return (
    <motion.nav 
      className="bg-white shadow-sm border-b border-gray-200 fixed w-full z-30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <motion.div
                animate={{ rotate: sidebarOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.div>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
              <div className="text-2xl font-bold text-teal-600">🅿️ ROYAVALET</div>
              <span className="ml-2 text-sm text-gray-500 hidden sm:block">Admin Panel</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            {/* <motion.button
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 0-6 6v2.25a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V9.75a7.5 7.5 0 0 1 15 0v2.25a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75V9.75a6 6 0 0 0-6-6z" />
              </svg>
            </motion.button> */}

            {/* Profile dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center">
                  <span className="text-white font-medium">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                  </span>
                </div>
                <span className="hidden md:block text-gray-700 font-medium">
                  {user?.name || 'Admin'}
                </span>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <motion.div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <div className="font-medium">{user?.name || 'Admin'}</div>
                      <div className="text-gray-500">{user?.email}</div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default DashboardNavbar;
