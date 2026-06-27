import toast from 'react-hot-toast';

export const toastSuccess = (message: string) => {
  return toast.success(message, {
    duration: 4000,
    position: 'top-right',
  });
};

export const toastError = (message: string) => {
  return toast.error(message, {
    duration: 5000,
    position: 'top-right',
  });
};

export const toastInfo = (message: string) => {
  return toast(message, {
    duration: 4000,
    position: 'top-right',
    icon: 'ℹ️',
  });
};

export const toastLoading = (message: string) => {
  return toast.loading(message, {
    position: 'top-right',
  });
};

export const toastDismiss = (toastId: string) => {
  toast.dismiss(toastId);
};

export const toastPromise = <T>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: string;
    error: string;
  }
) => {
  return toast.promise(promise, messages, {
    position: 'top-right',
    success: {
      duration: 4000,
    },
    error: {
      duration: 5000,
    },
  });
};