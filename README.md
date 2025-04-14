# **Weather API README Documentation**

## **Project Overview**
The Weather API is a web application that provides real-time weather information for various cities around the world. Users can input a city name and receive data such as temperature, humidity, and weather conditions. The application utilizes the OpenWeatherMap API to fetch weather data.

## **Live Demo**
You can view the live application at the following link: [Weather API Live Demo](https://weather-api-eight-self.vercel.app/)

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## **Features**
- **Real-time Weather Data**: Fetches current weather data based on user input.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive.
- **Dynamic Backgrounds**: Changes background images based on weather conditions (clear, cloudy, rainy, snowy, thunderstorm).
- **User -Friendly Interface**: Simple and intuitive user interface for easy navigation.

## **Technologies Used**
- **HTML**: For structuring the web pages.
- **CSS**: For styling the application.
- **JavaScript**: For handling user interactions and fetching data from the API.
- **Bootstrap**: For responsive design and layout.
- **OpenWeatherMap API**: For retrieving weather data.

## **Installation**
To set up the Weather API project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-api.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd weather-api
   ```

3. **Open the `index.html` file** in your preferred web browser.

## **Usage**
1. **Open the Application**: Launch the `index.html` file in a web browser.
2. **Enter a City Name**: Type the name of the city you want to check the weather for in the input field.
3. **Submit the Form**: Click the search button (magnifying glass icon) to fetch the weather data.
4. **View Weather Information**: The application will display the city name, temperature, humidity, and weather description along with a relevant background image.

## **API Key**
To use the OpenWeatherMap API, you need an API key. Follow these steps to obtain one:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/).
2. Sign up for an account.
3. Navigate to the API section and generate a new API key.
4. Replace the placeholder API key in the `script.js` file:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

## **File Structure**
The project has the following file structure:

```
/weather-api
│
├── .git/                     # Git version control files
├── images/                   # Folder containing weather-related images
│   ├── clear-sky-2.jpg
│   ├── clear-sky-night.jpg
│   ├── cloudy-sky-night.jpg
│   ├── rainy-sky-night.jpg
│   ├── snowny-sky-night.jpg
│   ├── thunderStorm-sky.webp
│   └── ...
│
├── index.html                # Main HTML file
├── README.md                 # Project documentation
├── script.js                 # JavaScript file for fetching and displaying weather data
└── style.css                 # CSS file for styling the application
```

## **Contributing**
Contributions are welcome! If you would like to contribute to the Weather API project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## **License**
This project is licensed under the MIT License. See the LICENSE file for more details.
