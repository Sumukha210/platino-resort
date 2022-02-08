export const emailProps = {
  required: "This is required",
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email address",
  },
};

export const nameProps = {
  required: "This is required",
  minLength: { value: 3, message: "Must contains at least 3 characters" },
  maxLength: {
    value: 15,
    message: "Must not contains more then 15 characters",
  },
};

export const subjectProps = {
  required: "This is required",
  minLength: { value: 6, message: "Must contains at least 6 characters" },
  maxLength: {
    value: 40,
    message: "Must not contains more then 40 characters",
  },
};
