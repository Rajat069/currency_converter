const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");


for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i == 0
        ? currency_code == "INR"
          ? "selected"
          : ""
        : currency_code == "USD"
        ? "selected"
        : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    // inserting options tag inside select tag
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target); // calling loadFlag with passing target element as an argument
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      // if currency code of country list is equal to option value
      let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
      // passing country code of a selected currency code in a img url
      imgTag.src = `https://flagsapi.com/${country_list[code]}/flat/32.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault(); //preventing form from submitting
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value; // temporary currency code of FROM drop list
  fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
  toCurrency.value = tempCode; // passing temporary currency code to TO currency code
  loadFlag(fromCurrency); // calling loadFlag with passing select element (fromCurrency) of FROM
  loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
  getExchangeRate(); // calling getExchangeRate
});

function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  exchangeRateTxt.innerText = "Getting exchange rate...";
  let url = `https://v6.exchangerate-api.com/v6/afd2ec3d7c3b7ea7c869663c/latest/${fromCurrency.value}`;
  // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate
      let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "Something went wrong";
    });
}
