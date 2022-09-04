const validateField = (fieldName: string, value: string) => {
  switch (fieldName) {
    case 'email':
      return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value,
      );
    case 'password':
      return !/[\w!@#$%^&*)(+=.,_-]{8,}/.test(value);
    default:
      return false;
  }
};

export default validateField;
