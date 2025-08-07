import { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest, API_ENDPOINTS } from '../config/apiConfig';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedToken = localStorage.getItem('adminToken');
        const storedUser = localStorage.getItem('adminUser');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // Clear invalid data
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const result = await apiRequest(API_ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (result.success && result.data.success) {
        const { token: newToken, user: newUser } = result.data.data;

        // Store in localStorage
        localStorage.setItem('adminToken', newToken);
        localStorage.setItem('adminUser', JSON.stringify(newUser));

        // Update state
        setToken(newToken);
        setUser(newUser);

        return { success: true, data: result.data.data };
      } else {
        return { success: false, message: result.data.message };
      }
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message: 'Network error. Please check if the backend server is running.'
      };
    }
  };

  // Logout function
  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    // Clear state
    setToken(null);
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!(token && user);
  };

  // Check if user is admin
  const isAdmin = () => {
    return user?.role === 'admin';
  };

  // Verify token with backend
  const verifyToken = async () => {
    console.log('AuthContext: Verifying token...');
    if (!token) {
      console.log('AuthContext: No token found');
      return false;
    }

    try {
      console.log('AuthContext: Making API request to /me endpoint');
      const result = await apiRequest(API_ENDPOINTS.AUTH.ME, {
        method: 'GET',
        includeAuth: true,
      });

      console.log('AuthContext: API response:', result);

      if (result.success && result.data.success) {
        console.log('AuthContext: Token is valid, updating user data');
        // Update user data
        setUser(result.data.data.user);
        localStorage.setItem('adminUser', JSON.stringify(result.data.data.user));
        return true;
      } else if (result.status === 401) {
        console.log('AuthContext: Token is invalid (401), logging out');
        // Only logout on 401 (unauthorized) responses
        logout();
        return false;
      } else {
        console.log('AuthContext: API error but not 401, keeping user logged in');
        // For other errors (network, 500, etc.), don't logout immediately
        return false;
      }
    } catch (error) {
      console.error('AuthContext: Token verification error:', error);
      // Don't logout on network errors
      return false;
    }
  };

  const value = {
    user,
    token,
    isLoading,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    verifyToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
