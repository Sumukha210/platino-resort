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

export const passwordProps = {
  required: "This is required",
  pattern: {
    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
    message:
      "7 to 20 characters which contain at least one numeric digit and a special character",
  },
};

export const phoneNumberProps = {
  required: "This is required",
  pattern: {
    value: /^[6789]\d{9}$/,
    message: "Invalid phone number",
  },
};
