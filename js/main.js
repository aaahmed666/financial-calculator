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

let VendorAmount = parseFloat(VendorInput.value);
let MediaAmount = parseFloat(MediaInput.value);
let CorporationAmount = parseFloat(CorporationInput.value);
let TeamProjectAmount = parseFloat(TeamProjectInput.value);

let sum = VendorAmount + MediaAmount + CorporationAmount + TeamProjectAmount;

const BrexCalc = () => {
  let BrexAmount = sum * 0.3;
  return BrexAmount;
};

const StripeCalc = () => {
  let StripeAmount = sum * 2.9;
  return StripeAmount;
};

const AmexCalc = () => {
  let AmexAmount = sum * 1.3;
  return AmexAmount;
};

const UnlimitedValueCalc = () => {
  let UnlimitedValue = sum * 1.1;
  return UnlimitedValue;
};

const LifeTimeValueCalc = () => {
  let LifeTimeValue = sum * 1.2;
  return LifeTimeValue;
};

const updateBrex = (BrexAmount) => {
  FinalTitleChange.innerHTML = "BREX Bussiness Card";
  FinalResualtValue.innerHTML = Math.round(BrexAmount);
};

const updateStripe = (StripeAmount) => {
  FinalTitleChange.innerHTML = "Stripe Business Card";
  FinalResualtValue.innerHTML = Math.round(StripeAmount);
};

const updateAmex = (AmexAmount) => {
  FinalTitleChange.innerHTML = "Amex Business Card";
  FinalResualtValue.innerHTML = Math.round(AmexAmount);
};

const updateUnlimited = (UnlimitedValue) => {
  UnlimitedRewardValue.innerHTML = Math.round(UnlimitedValue);
};

const updateTimeLife = (LifeTimeValue) => {
  LifeTimeRewardValue.innerHTML = Math.round(LifeTimeValue);
};

const refreshInputValues = () => {
  VendorAmount = parseFloat(VendorInput.value);
  MediaAmount = parseFloat(MediaInput.value);
  CorporationAmount = parseFloat(CorporationInput.value);
  TeamProjectAmount = parseFloat(TeamProjectInput.value);

  sum = VendorAmount + MediaAmount + CorporationAmount + TeamProjectAmount;
};

const checkInputValues = () => {
  if (
    VendorInput.value === 0 ||
    MediaInput.value === 0 ||
    CorporationInput.value === 0 ||
    TeamProjectInput.value === 0
  ) {
    return;
  }
};

const initBrex = () => {
  refreshInputValues();
  let BrexAmount = BrexCalc();
  updateBrex(BrexAmount);
};

initBrex();

const initStripe = () => {
  refreshInputValues();
  let StripeAmount = StripeCalc();
  updateStripe(StripeAmount);
};

initStripe();

const initAmex = () => {
  refreshInputValues();
  let AmexAmount = AmexCalc();
  updateAmex(AmexAmount);
};

initAmex();

BrexCalcBtn.addEventListener("click", initBrex);
StripeCalcBtn.addEventListener("click", initStripe);
AmexCalcBtn.addEventListener("click", initAmex);

const initUnlimitedReward = () => {
  let UnlimitedValue = UnlimitedValueCalc();
  updateUnlimited(UnlimitedValue);
};

initUnlimitedReward();

const initLifeTimeValue = () => {
  let LifeTimeValue = LifeTimeValueCalc();
  updateTimeLife(LifeTimeValue);
};

initLifeTimeValue();
