import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { apiRequest, API_ENDPOINTS } from '../config/api';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          navigate('/admin/login');
          return;
        }

        const result = await apiRequest(API_ENDPOINTS.AUTH.DASHBOARD, {
          method: 'GET',
          includeAuth: true,
        });

        if (result.success && result.data.success) {
          setUser(result.data.data.user);
          setDashboardData(result.data.data.dashboardData);
        } else {
          setError(result.data.message || 'Failed to load dashboard');
          if (result.status === 401) {
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminUser');
            navigate('/admin/login');
          }
        }
      } catch (error) {
        console.error('Dashboard fetch error:', error);
        setError('Network error. Please check if the backend server is running.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-teal-600 font-semibold">Loading Dashboard...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 flex items-center justify-center">
        <motion.div
          className="text-center max-w-md mx-auto p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Error Loading Dashboard</h3>
            <p className="text-sm">{error}</p>
          </div>
          <Link
            to="/admin/login"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">
      <motion.div
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center">
            <div>
              <motion.div
                className="flex items-center mb-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-teal-600 mr-3">🅿️ ROYAVALET</div>
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  ADMIN
                </span>
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome to Dashboard!
              </h1>
              <p className="text-gray-600">
                Hello, {user?.email} - You're logged in as an administrator
              </p>
            </div>
            <motion.button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Logout
            </motion.button>
          </div>
        </motion.div>

        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center">
              <div className="text-3xl mr-4">👥</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
                <p className="text-2xl font-bold text-teal-600">{dashboardData?.totalUsers || 0}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center">
              <div className="text-3xl mr-4">🟢</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
                <p className="text-2xl font-bold text-green-600">{dashboardData?.systemStatus || 'Online'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center">
              <div className="text-3xl mr-4">🕒</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Last Login</h3>
                <p className="text-sm font-medium text-gray-600">
                  {user?.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'First login'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* User Info Card */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">User Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <p className="mt-1 text-sm text-gray-900 capitalize">{user?.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">User ID</label>
              <p className="mt-1 text-sm text-gray-900 font-mono">{user?.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Updated</label>
              <p className="mt-1 text-sm text-gray-900">
                {dashboardData?.lastUpdated ? new Date(dashboardData.lastUpdated).toLocaleString() : 'N/A'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/"
              className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl mb-2">🏠</div>
                <h3 className="font-semibold text-gray-900">Go to Website</h3>
                <p className="text-sm text-gray-600">Visit the main website</p>
              </motion.div>
            </Link>

            <motion.div
              className="p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-900">View Analytics</h3>
              <p className="text-sm text-gray-600">Check system analytics</p>
            </motion.div>

            <motion.div
              className="p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold text-gray-900">Settings</h3>
              <p className="text-sm text-gray-600">Manage system settings</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
