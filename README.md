# Currency Converter

This is a simple webpage that allows you to convert currencies using the ExchangeRate API and display country flags using the Flag API. The webpage also features a dynamic background created using Vanta.js.

![screenshot of the app](resources/screenshot.png?raw=true,"UI")

## Technologies Used

- HTML
- CSS
- JavaScript
- ExchangeRate API
- Flag API
- Vanta.js

## Features

- Currency conversion: Enter an amount in one currency and convert it to another currency using the ExchangeRate API.
- Country flags: Display the flags of the countries corresponding to the selected currencies using the Flag API.
- Dynamic background: The webpage has a visually appealing dynamic background created using Vanta.js.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```

2. Open the `index.html` file in your web browser.

3. Start converting currencies!

## API Keys

To use the ExchangeRate API and Flag API, you will need to obtain API keys. Follow the instructions below to get your API keys:

1. ExchangeRate API: Visit the [ExchangeRate API website](https://www.exchangerate-api.com/) and sign up for an account. Once you have an account, you will receive an API key.

2. Flag API: Visit the [Flag API website](https://www.flagapi.com/) and sign up for an account. After signing up, you will receive an API key.

## Configuration

1. Open the `script.js` file.

2. Replace the placeholder values for the ExchangeRate API key and Flag API key with your actual API keys.

   ```javascript
   const exchangeRateApiKey = "YOUR_EXCHANGERATE_API_KEY";
   const flagApiKey = "YOUR_FLAG_API_KEY";
   ```

3. Save the file.

## License

This project is licensed under the [MIT License](LICENSE).
