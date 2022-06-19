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

brandValues = {
  Brex: 0.3,
  Stripe: 2.9,
  Amex: 1.3,
};

const brandCalc = (brand) => {
  let sum = calcSum();
  let brandAmount = sum * brandValues[brand];
  return brandAmount;
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

const updateBrand = (BrandAmount, BrandName) => {
  FinalTitleChange.innerHTML = BrandName + " Bussiness Card";
  FinalResualtValue.innerHTML = "$ " + Math.round(BrandAmount);
};

const init = (BrandName) => {
  if (checkEmptyInput()) {
    const BrandAmount = brandCalc(BrandName);
    updateBrand(BrandAmount, BrandName);
  } else {
    alert("Please fill all the fields");
  }
};

BrexCalcBtn.addEventListener("click", () => init("Brex"));
StripeCalcBtn.addEventListener("click", () => init("Stripe"));
AmexCalcBtn.addEventListener("click", () => init("Amex"));

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
