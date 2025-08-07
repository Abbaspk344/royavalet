import Swal from 'sweetalert2';

// Custom SweetAlert2 configurations for Royal Valet
export const showSuccessAlert = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'success',
    title,
    text,
    confirmButtonText: 'Great!',
    confirmButtonColor: '#10b981',
    timer: 5000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    ...options
  });
};

export const showErrorAlert = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonText: 'Try Again',
    confirmButtonColor: '#ef4444',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    ...options
  });
};

export const showWarningAlert = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'warning',
    title,
    text,
    confirmButtonText: 'Understood',
    confirmButtonColor: '#f59e0b',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    ...options
  });
};

export const showInfoAlert = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'info',
    title,
    text,
    confirmButtonText: 'Got it!',
    confirmButtonColor: '#3b82f6',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    ...options
  });
};

export const showToastSuccess = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'success',
    title,
    text,
    toast: true,
    position: 'bottom-end',
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__fadeInUp'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutDown'
    },
    ...options
  });
};

export const showToastError = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'error',
    title,
    text,
    toast: true,
    position: 'bottom-end',
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__fadeInUp'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutDown'
    },
    ...options
  });
};

export const showToastInfo = (title, text, options = {}) => {
  return Swal.fire({
    icon: 'info',
    title,
    text,
    toast: true,
    position: 'bottom-end',
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__fadeInUp'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutDown'
    },
    ...options
  });
};

export const showValidationAlert = (errors) => {
  const errorMessages = Array.isArray(errors) 
    ? errors.map(error => error.msg || error.message || error).join('\n')
    : errors;
    
  return Swal.fire({
    icon: 'error',
    title: 'Validation Error',
    text: errorMessages,
    confirmButtonText: 'Fix Issues',
    confirmButtonColor: '#ef4444',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};

export const showDuplicateSubmissionAlert = () => {
  return Swal.fire({
    icon: 'warning',
    title: 'Already Submitted!',
    text: 'You have already submitted a contact request with this email in the last 24 hours. Please wait before submitting again.',
    confirmButtonText: 'Understood',
    confirmButtonColor: '#f59e0b',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};

export const showConnectionErrorAlert = () => {
  return Swal.fire({
    icon: 'error',
    title: 'Connection Error',
    text: 'Failed to connect to the server. Please check your internet connection and try again.',
    confirmButtonText: 'Retry',
    confirmButtonColor: '#ef4444',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};

// Loading alert
export const showLoadingAlert = (title = 'Processing...', text = 'Please wait while we process your request.') => {
  return Swal.fire({
    title,
    text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
};

export default {
  showSuccessAlert,
  showErrorAlert,
  showWarningAlert,
  showInfoAlert,
  showToastSuccess,
  showToastError,
  showToastInfo,
  showValidationAlert,
  showDuplicateSubmissionAlert,
  showConnectionErrorAlert,
  showLoadingAlert
};
