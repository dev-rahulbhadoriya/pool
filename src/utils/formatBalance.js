export const formatNumberHumanize = (num, decimals) => {
  if (typeof num !== "number") {
    num = parseFloat(num);
  }
  num = num.toFixed(decimals);
  if (decimals == 0) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    num = num.split(".");
    return num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + num[1];
  }
};

export const formatNumberSuffix = (
  num,
  decimals,
  ignoreBelowThousand = false
) => {
  if (typeof num !== "number") {
    num = parseFloat(num);
  }
  if (num < 1e6) {
    return formatNumberHumanize(num, ignoreBelowThousand ? 0 : decimals);
  } else if (num >= 1e6 && num < 1e9) {
    num /= 1e6;
    return formatNumberHumanize(num, decimals) + "M";
  } else if (num >= 1e9 && num < 1e12) {
    num /= 1e9;
    return formatNumberHumanize(num, decimals) + "B";
  } else if (num >= 1e12 && num < 1e15) {
    num /= 1e12;
    return formatNumberHumanize(num, decimals) + "T";
  } else if (num >= 1e15) {
    num /= 1e15;
    return formatNumberHumanize(num, decimals) + "Q";
  }
  return formatNumberHumanize(num, decimals);
};

export const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num.toFixed(2); // if value < 1000, nothing to do
  }
};
