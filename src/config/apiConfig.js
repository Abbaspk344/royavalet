/**
 * API Configuration utility for handling different environments
 * Provides robust fallback handling for local and production environments
 */

// Get the appropriate API base URL based on environment
export const getApiBaseUrl = () => {
  // Check if we're in production
  const isProduction = import.meta.env.PROD || import.meta.env.VITE_NODE_ENV === 'production';
  
  // Get the API URL from environment variables
  const envApiUrl = import.meta.env.VITE_API_URL;
  
  // Fallback URLs
  const productionUrl = 'https://royavaletbackend.onrender.com';
  const developmentUrl = 'http://localhost:5000';
  
  // Return appropriate URL based on environment
  if (envApiUrl) {
    console.log(`🌐 Using API URL from environment: ${envApiUrl}`);
    return envApiUrl;
  } else if (isProduction) {
    console.log(`🚀 Production mode detected, using: ${productionUrl}`);
    return productionUrl;
  } else {
    console.log(`🛠️ Development mode detected, using: ${developmentUrl}`);
    return developmentUrl;
  }
};

// Get API URL with error handling
export const getApiUrl = () => {
  try {
    return getApiBaseUrl();
  } catch (error) {
    console.error('❌ Error getting API URL:', error);
    // Fallback to localhost in case of any errors
    return 'http://localhost:5000';
  }
};

// API endpoints configuration
export const API_ENDPOINTS = {
  // Contact endpoints
  CONTACT: '/api/contact',
  CONTACT_BY_ID: (id) => `/api/contact/${id}`,
  CONTACT_STATS: '/api/contact/stats',
  
  // Email endpoints
  EMAIL_SUBSCRIBE: '/api/email/subscribe',
  EMAIL_UNSUBSCRIBE: '/api/email/unsubscribe',
  EMAIL_SUBSCRIPTIONS: '/api/email/subscriptions',
  EMAIL_SUBSCRIPTION_BY_ID: (id) => `/api/email/subscription/${id}`,
  EMAIL_STATS: '/api/email/stats',
  
  // Auth endpoints
  AUTH_LOGIN: '/api/auth/login',
  AUTH_LOGOUT: '/api/auth/logout',
  AUTH_ME: '/api/auth/me',
  AUTH_SIGNUP: '/api/auth/signup',
  
  // Dashboard endpoints
  DASHBOARD_OVERVIEW: '/api/dashboard/overview',
  DASHBOARD_ANALYTICS: '/api/dashboard/analytics',
  
  // Health check
  HEALTH: '/api/health'
};

// Create full URL for an endpoint
export const createApiUrl = (endpoint) => {
  const baseUrl = getApiUrl();
  return `${baseUrl}${endpoint}`;
};

// Default fetch options with error handling
export const createFetchOptions = (options = {}) => {
  const token = localStorage.getItem('adminToken');
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };
  
  return defaultOptions;
};

// Enhanced fetch function with error handling
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = createApiUrl(endpoint);
    const fetchOptions = createFetchOptions(options);
    
    console.log(`🔄 API Request: ${options.method || 'GET'} ${url}`);
    
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }
    
    console.log(`✅ API Response: ${response.status} ${response.statusText}`);
    return data;
    
  } catch (error) {
    console.error(`❌ API Request failed for ${endpoint}:`, error);
    throw error;
  }
};

// Environment info for debugging
export const getEnvironmentInfo = () => {
  return {
    isProduction: import.meta.env.PROD,
    nodeEnv: import.meta.env.VITE_NODE_ENV,
    apiUrl: import.meta.env.VITE_API_URL,
    mode: import.meta.env.MODE,
    baseUrl: getApiUrl()
  };
};

// Log environment info (useful for debugging)
if (import.meta.env.DEV) {
  console.log('🔧 Environment Info:', getEnvironmentInfo());
}

export default {
  getApiUrl,
  getApiBaseUrl,
  API_ENDPOINTS,
  createApiUrl,
  createFetchOptions,
  apiRequest,
  getEnvironmentInfo
};
