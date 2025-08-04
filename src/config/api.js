// API Configuration for Royavalet Frontend

// Backend API base URL
export const API_BASE_URL = 'http://localhost:5000';

// API endpoints
export const API_ENDPOINTS = {
  // Authentication endpoints
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',
    ME: '/api/auth/me',
    DASHBOARD: '/api/auth/dashboard'
  },
  
  // Health check
  HEALTH: '/api/health'
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Default headers for API requests
export const getDefaultHeaders = (includeAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (includeAuth) {
    const token = localStorage.getItem('adminToken');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};

// API request helper function
export const apiRequest = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint);
  const config = {
    ...options,
    headers: {
      ...getDefaultHeaders(options.includeAuth),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    return {
      success: response.ok,
      status: response.status,
      data: data,
    };
  } catch (error) {
    console.error('API request error:', error);
    return {
      success: false,
      status: 0,
      data: {
        success: false,
        message: 'Network error. Please check if the backend server is running.',
      },
    };
  }
};
