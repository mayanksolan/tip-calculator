var billValue = document.getElementById("billValue").value;
var peopleCount = document.getElementById("peopleCount").value;
var customTip = document.getElementById("customTip").value;
var errorDiv = document.getElementById("error");

var tipValue = 0;
var tipAmoutPerPerson = 0;
var totalPerPerson = 0;

const setBillValue = () => {
  billValue = document.getElementById("billValue").value;
};

const setCustomTip = () => {
  customTip = document.getElementById("customTip").value;
  tipValue = customTip;
};

const setPeopleCount = () => {
  peopleCount = document.getElementById("peopleCount").value;
  calculate();
};

const showError = () => {
  if (!billValue || !tipValue || !peopleCount) {
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }
};

const calculate = () => {
  console.log(billValue, tipValue, peopleCount);
  if (!billValue || !tipValue || !peopleCount) {
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
    if (billValue && tipValue && peopleCount) {
      tipAmoutPerPerson = (billValue * (tipValue / 100)) / peopleCount;
      totalPerPerson = billValue / peopleCount + tipAmoutPerPerson;
      document.getElementById("tip-amount-id").innerText = tipAmoutPerPerson;
      document.getElementById("total-amount-id").innerText = totalPerPerson;
    }
  }
};

const reset = () => {
  document.getElementById("billValue").value = null;
  tipSelect(null, true);
  document.getElementById("peopleCount").value = null;
  document.getElementById("tip-amount-id").innerText = 0.0;
  document.getElementById("total-amount-id").innerText = 0.0;
};

let tipArray = ["five", "ten", "fifteen", "twentyfive", "fifty"];

var tipSelect = (val, reset = false) => {
  tipValue = val;
  tipArray.map((item) => {
    if (document.getElementById(item).classList.contains("tip-box-selected")) {
      document.getElementById(item).classList.remove("tip-box-selected");
    }
  });
  if (reset) {
    document.getElementById("customTip").value = null;
  }
  switch (val) {
    case 5:
      document.getElementById("five").classList.add("tip-box-selected");
      document.getElementById("customTip").value = null;
      break;
    case 10:
      document.getElementById("ten").classList.add("tip-box-selected");
      document.getElementById("customTip").value = null;
      break;
    case 15:
      document.getElementById("fifteen").classList.add("tip-box-selected");
      document.getElementById("customTip").value = null;
      break;
    case 25:
      document.getElementById("twentyfive").classList.add("tip-box-selected");
      document.getElementById("customTip").value = null;
      break;
    case 50:
      document.getElementById("fifty").classList.add("tip-box-selected");
      document.getElementById("customTip").value = null;
      break;
    default:
      break;
  }
};

document.getElementById("five").addEventListener("click", () => tipSelect(5));
document.getElementById("ten").addEventListener("click", () => tipSelect(10));
document.getElementById("fifteen").addEventListener("click", () => tipSelect(15));
document.getElementById("twentyfive").addEventListener("click", () => tipSelect(25));
document.getElementById("fifty").addEventListener("click", () => tipSelect(50));
