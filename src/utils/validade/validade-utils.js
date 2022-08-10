import moment from "moment";

export const validadeForm = (form, errors = {}) => {
  let newErrors = errors;

  for (let i = 0; i < form.length; i++) {
    const obj = form[i];
    if (obj) {
      const { name, birth_date, cpf } = obj;

      if (name || birth_date || cpf) {
        newErrors = {
          ...newErrors,
          [i]: {
            name: validadeName(name) ? null : "mensagem de erro no nome",
            birthDate: validadeDate(birth_date) ? null : "mensagem de erro no aniversario",
            CPF: validadeCPF(cpf) ? null : "mensagem de erro no CPF",
          },
        };
      } else {
        delete newErrors[i];
      }
    }
  }
  return { newErrors };
};

export const validadeObjectContentAreTruth = (obj = {}, value) => {
  return Object.values(obj).every((item, index) => !!item === value);
};

export const validadeName = (name = "") => {
  const [_, ...lastName] = name?.trim()?.split(" ");

  return lastName.length ? true : false;
};

export const validadeDate = (date, format = "DD/MM/YYYY") => {
  return moment(date, format, true).isValid();
};

export const validadeCPF = (value = "") => {
  const cleanCPF = String(value).replace(/[\s.-]/g, "");
  const firstNineDigits = cleanCPF.slice(0, 9);
  const checker = cleanCPF.slice(9, 11);

  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false;
  }

  const checker1 = calcFirstChecker(firstNineDigits);
  const checker2 = calcSecondChecker(`${firstNineDigits}${checker1}`);

  return checker === `${checker1}${checker2}`;
};

const hasCPFLength = cpf => {
  if (cpf.length > 11 || cpf.length < 11) {
    return false;
  }

  return true;
};

const allDigitsAreEqual = digits => {
  for (let i = 0; i < 10; i++) {
    if (digits === new Array(digits.length + 1).join(String(i))) {
      return true;
    }
  }

  return false;
};

const calcFirstChecker = firstNineDigits => {
  let sum = 0;

  for (let i = 0; i < 9; ++i) {
    sum += Number(firstNineDigits.charAt(i)) * (10 - i);
  }

  const lastSumChecker = sum % 11;
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
};

const calcSecondChecker = cpfWithChecker1 => {
  let sum = 0;

  for (let i = 0; i < 10; ++i) {
    sum += Number(cpfWithChecker1.charAt(i)) * (11 - i);
  }

  const lastSumChecker2 = sum % 11;
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
};
