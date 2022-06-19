const VendorInput = document.getElementById("vendor");
const MediaInput = document.getElementById("Media");
const CorporationInput = document.getElementById("Corporation");
const TeamProjectInput = document.getElementById("TeamProject");

const BrexCalcBtn = document.querySelector(".Brex");
const StripeCalcBtn = document.querySelector(".Stripe");
const AmexCalcBtn = document.querySelector(".Amex");

const FinalResualtValue = document.getElementById("FinalValue");
const UnlimitedRewardValue = document.getElementById("UnlimitedValue");
const LifeTimeRewardValue = document.getElementById("LifeValue");

const FinalTitleChange = document.getElementById("FinalTitle");

const BrexCalc = () => {
  let sum = calcSum();
  let BrexAmount = sum * 0.3;
  return BrexAmount;
};

const StripeCalc = () => {
  let sum = calcSum();
  let StripeAmount = sum * 2.9;
  return StripeAmount;
};

const AmexCalc = () => {
  let sum = calcSum();
  let AmexAmount = sum * 1.3;
  return AmexAmount;
};

const UnlimitedValueCalc = () => {
  let sum = calcSum();
  let UnlimitedValue = sum * 1.1;
  return UnlimitedValue;
};

const LifeTimeValueCalc = () => {
  let sum = calcSum();
  let LifeTimeValue = sum * 1.2;
  return LifeTimeValue;
};

const updateBrex = (BrexAmount) => {
  FinalTitleChange.innerHTML = "BREX Bussiness Card";
  FinalResualtValue.innerHTML = "$ " + Math.round(BrexAmount);
};

const updateStripe = (StripeAmount) => {
  FinalTitleChange.innerHTML = "Stripe Business Card";
  FinalResualtValue.innerHTML = "$ " + Math.round(StripeAmount);
};

const updateAmex = (AmexAmount) => {
  FinalTitleChange.innerHTML = "Amex Business Card";
  FinalResualtValue.innerHTML = "$ " + Math.round(AmexAmount);
};

const updateUnlimited = (UnlimitedValue) => {
  UnlimitedRewardValue.innerHTML = "$ " + Math.round(UnlimitedValue);
};

const updateTimeLife = (LifeTimeValue) => {
  LifeTimeRewardValue.innerHTML = "$ " + Math.round(LifeTimeValue);
};

const validateInput = (value) => {
  if (value === "" || isNaN(value) || value < 0) {
    return 0;
  } else {
    return value;
  }
};

const calcSum = () => {
  VendorAmount = validateInput(VendorInput.value);
  MediaAmount = validateInput(MediaInput.value);
  CorporationAmount = validateInput(CorporationInput.value);
  TeamProjectAmount = validateInput(TeamProjectInput.value);

  sum = VendorAmount + MediaAmount + CorporationAmount + TeamProjectAmount;
  return sum;
};

const checkEmptyInput = () => {
  if (
    VendorInput.value === "" &&
    MediaInput.value === "" &&
    CorporationInput.value === "" &&
    TeamProjectInput.value === ""
  ) {
    return false;
  } else {
    return true;
  }
};

const checkEmptyRewards = () => {
  if (
    VendorInput.value === "" ||
    MediaInput.value === "" ||
    CorporationInput.value === "" ||
    TeamProjectInput.value === ""
  ) {
    return false;
  } else {
    return true;
  }
};

const initBrex = () => {
  if (checkEmptyInput()) {
    let BrexAmount = BrexCalc();
    updateBrex(BrexAmount);
  } else {
    alert("Please fill all the fields");
  }
};

const initStripe = () => {
  if (checkEmptyInput()) {
    let StripeAmount = StripeCalc();
    updateStripe(StripeAmount);
  } else {
    alert("Please fill all the fields");
  }
};

const initAmex = () => {
  if (checkEmptyInput()) {
    let AmexAmount = AmexCalc();
    updateAmex(AmexAmount);
  } else {
    alert("Please fill all the fields");
  }
};

BrexCalcBtn.addEventListener("click", initBrex);
StripeCalcBtn.addEventListener("click", initStripe);
AmexCalcBtn.addEventListener("click", initAmex);

const initUnlimitedReward = () => {
  let UnlimitedValue = UnlimitedValueCalc();
  updateUnlimited(UnlimitedValue);
};

const initLifeTimeValue = () => {
  let LifeTimeValue = LifeTimeValueCalc();
  updateTimeLife(LifeTimeValue);
};

const calcRewards = () => {
  if (checkEmptyRewards()) {
    initUnlimitedReward();
    initLifeTimeValue();
  }
};

document.querySelectorAll(".input").forEach((el) => {
  el.addEventListener("change", () => {
    calcRewards();
  });
});
