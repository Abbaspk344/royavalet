// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API Utility Functions
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Contact API methods
  async submitContact(contactData) {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  async getContacts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/api/contact${queryString ? `?${queryString}` : ''}`;
    return this.request(endpoint);
  }

  async getContact(id) {
    return this.request(`/api/contact/${id}`);
  }

  async updateContact(id, updateData) {
    return this.request(`/api/contact/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
  }

  async deleteContact(id) {
    return this.request(`/api/contact/${id}`, {
      method: 'DELETE',
    });
  }

  async getContactStats() {
    return this.request('/api/contact/stats');
  }

  // Email Subscription API methods
  async subscribeEmail(emailData) {
    return this.request('/api/email/subscribe', {
      method: 'POST',
      body: JSON.stringify(emailData),
    });
  }

  async unsubscribeEmail(emailData) {
    return this.request('/api/email/unsubscribe', {
      method: 'POST',
      body: JSON.stringify(emailData),
    });
  }

  async getEmailSubscriptions(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/api/email/subscriptions${queryString ? `?${queryString}` : ''}`;
    return this.request(endpoint);
  }

  async getEmailStats() {
    return this.request('/api/email/stats');
  }

  async updateEmailSubscription(id, updateData) {
    return this.request(`/api/email/subscription/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
  }

  // Dashboard API methods
  async getDashboardOverview() {
    return this.request('/api/dashboard/overview');
  }

  async getDashboardAnalytics(period = '30d') {
    return this.request(`/api/dashboard/analytics?period=${period}`);
  }

  // Auth API methods
  async login(credentials) {
    return this.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    return this.request('/api/auth/logout', {
      method: 'POST',
    });
  }

  async getProfile() {
    return this.request('/api/auth/profile');
  }

  async updateProfile(profileData) {
    return this.request('/api/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/api/health');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();

export default apiService;

// Export individual methods for convenience
export const {
  submitContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  getContactStats,
  subscribeEmail,
  unsubscribeEmail,
  getEmailSubscriptions,
  getEmailStats,
  updateEmailSubscription,
  getDashboardOverview,
  getDashboardAnalytics,
  login,
  register,
  logout,
  getProfile,
  updateProfile,
  healthCheck,
} = apiService;
