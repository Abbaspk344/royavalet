import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiRequest, API_ENDPOINTS } from '../config/apiConfig';

const DashboardHome = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalEmails: 0,
    totalUsers: 0,
    pendingContacts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('DashboardHome: Component mounted');
    // Get user data from localStorage
    const userData = localStorage.getItem('adminUser');
    console.log('DashboardHome: User data from localStorage:', userData);
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        console.log('DashboardHome: User set:', parsedUser);
      } catch (error) {
        console.error('DashboardHome: Error parsing user data:', error);
      }
    }

    // Fetch dashboard data from API
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const data = await apiRequest(API_ENDPOINTS.DASHBOARD_OVERVIEW, {
        includeAuth: true
      });

      if (data.success) {
        const { contacts, emails, users } = data.data;
        setStats({
          totalContacts: contacts.total,
          totalEmails: emails.total,
          totalUsers: users.total,
          pendingContacts: contacts.pending
        });
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Keep default values on error
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: '�',
      color: 'bg-blue-500',
      change: loading ? '...' : '+12%'
    },
    {
      title: 'Email Subscriptions',
      value: stats.totalEmails,
      icon: '�',
      color: 'bg-green-500',
      change: loading ? '...' : '+8%'
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: '👥',
      color: 'bg-purple-500',
      change: loading ? '...' : '+5%'
    },
    {
      title: 'Pending Contacts',
      value: stats.pendingContacts,
      icon: '⏳',
      color: 'bg-yellow-500',
      change: loading ? '...' : 'New'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Header */}
      <motion.div variants={itemVariants}>
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name || 'Admin'}! 👋
          </h1>
          <p className="text-teal-100">
            Here's what's happening with your valet service today.
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  {stat.change} from last month
                </p>
              </div>
              <div className={`${stat.color} rounded-full p-3 text-white text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { action: 'New booking received', time: '2 minutes ago', icon: '📅' },
                { action: 'Service completed', time: '15 minutes ago', icon: '✅' },
                { action: 'New user registered', time: '1 hour ago', icon: '👤' },
                { action: 'Payment processed', time: '2 hours ago', icon: '💳' }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-2xl">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Add New Service', icon: '➕', color: 'bg-blue-500' },
              { title: 'View All Bookings', icon: '📋', color: 'bg-green-500' },
              { title: 'Generate Report', icon: '📊', color: 'bg-purple-500' }
            ].map((action, index) => (
              <motion.button
                key={action.title}
                className={`${action.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.title}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardHome;
