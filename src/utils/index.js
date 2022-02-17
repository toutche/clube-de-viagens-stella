export const copyrightSwitch = option => {
  switch (option) {
    case 1:
      return `Copyright \u00A9 2021 Stella Barros Turismo`;
    case 2:
      return `Ao contratar, você concorda com os termos e condições de uso`;
    default:
      return `Sorry, we are out of ${option}.`;
  }
};

export const formatMoneyToBRL = money => money.toFixed(2).toString().replace(".", ",");
