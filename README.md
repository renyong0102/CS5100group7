# CS5100 group7

# Project Name: G7 Stock Price Prediction

## Project GitHub Link :

https://github.com/Dabaiee/CS5100group7

## How to run the website

In the project directory /client, you can run:
### `npm install`

Wait until packages installed, then run:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 1. Creators

- Tong Zhou
- Zixuan Yang
- Renyong Zheng
- Yan Wang
- Yucen Cao

## 2. Project Description

A website platform that forecast the Stocks

## 3. Functions:

### Iteration 1:

- HomePage:
  ![GitHub Logo](/InfoImg/homepage.jpg)

- Stock forecasting
  ![GitHub Logo](/InfoImg/stock0.jpg)

- Stock forecasting
  ![GitHub Logo](/InfoImg/market_page.png)
  
## 4.Targeted Environment

### Language
Model: Python
Frontend: javascript
Backend: nodeJS

### Development Environment
Jupyter, VSCode

### Packages and Frameworks
Model: sklearn, pandas, keras
Frontend: bootstrap
Backend: express

## 5. PEAS Environment

Performance Measures: accurate stock price forecast, accurate stock price trend

Environment: shareholders, financial institutions, past stock data and trends

Actuators: stock forecast UI, website, software

Sensor: dataset API, crawler

Rational depends on the performance measure that defines success. Stock prediction uses accurate stock price forecasts, accurate stock price trends as performance measures. Also, for each possible percept sequence, the stock prediction system selects an action expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in knowledge the agent has. For example, in stock prediction, system gives stock forecast UI based on dataset API and crawler.

For different financial institutions -> we need to use different dataset API -> website and stock forecast UI will be changed

For past stock data and trends -> use crawler -> stock forecast UI, website, and software will be different


![GitHub Logo](/InfoImg/PEAS_enviroment.png)
