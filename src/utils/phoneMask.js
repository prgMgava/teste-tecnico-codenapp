export const celularMascara = (value) => {
  if (!value) {
    return value;
  }
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\(\d{2}\))\s(\d{4})(\-)(\d{5})/, (e) => {
      return e
        .split("-")
        .join("")
        .replace(/(\(\d{2}\)\s\d{5})(\d{4})/, "$1-$2");
    })
    .replace(/(-\d{4})\d+?$/, "$1");
};
