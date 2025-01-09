# Weather App

This web app provides the user with meteorological data given latitude and longitude of the location. The project is completely developed in React and it utilizes meteorological data from the [Open Weather Map API](https://openweathermap.org/api/one-call-3).

I used the Material UI library to create all the components and implement responsive, modern CSS styling.

A Live Demo is available [here](https://stupendous-meerkat-5bdd52.netlify.app/)

## Features

- Real-time weather data: Displays temperature, humidity, wind speed, and weather conditions for a specific location.
- Geographic flexibility: Users can input any real location to fetch weather information.
- Responsive design: Optimized for different screen sizes using Material UI.
- Interactive interface: Clean, intuitive design for a seamless user experience.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14 or above)
- npm or yarn (Node package managers)

## Installation

Follow these steps to set up the project:

### Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
```

### Navigate to the project directory:

```bash
cd weather-app
```

### Install dependencies:

```bash
npm install
```

Or, if you're using yarn:

```bash
yarn install
```

### Running the Application

Start the development server:

```bash
npm start
```

Or, if you're using yarn:

```bash
yarn start
```

### Open your browser and navigate to:

```arduino
http://localhost:3000
```

Use the input fields to enter the desired location to view its weather data.

## Building the Application

To build the application for production:

Run the build command:

```bash
npm run build
```

Or, if you're using yarn:

```bash
yarn build
```

The production-ready files will be available in the `dist` directory.

## API Usage

This application uses the Open Weather Map API to fetch weather data. To use the app, you must have an API key from Open Weather Map.

1. Obtain an API key by creating an account on Open Weather Map.
2. Add the API key to your environment variables:
   - Create a `.env` file in the root directory.
   - Add the following line:
     ```makefile
     VITE_OPENWEATHER_API_URL = https://api.openweathermap.org
     VITE_OPENWEATHER_API_KEY = your_api_key
     ```

## Technologies Used

- React: For building the UI components and managing application state.
- Material UI: For pre-styled components and responsive design.
- Open Weather Map API: For fetching real-time weather data.
- CSS: For custom styling where needed.
