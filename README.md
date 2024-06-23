ISS Tracker
The ISS Tracker is a web application that displays real-time information about the International Space Station (ISS), including its current geographic coordinates (latitude and longitude). This project leverages TLE (Two-Line Element) data retrieved from an API to compute and display the ISS's position relative to Earth's surface using orbital mechanics calculations.

Features:
Real-time Position Updates: Updates the ISS's position every 5 seconds, reflecting its orbital path around Earth.
Dynamic Display: Shows the ISS's latitude and longitude on the webpage, providing users with live tracking capabilities.
Minimalist UI: Clean and intuitive interface designed for ease of use, suitable for both desktop and mobile devices.
Technologies Used:
HTML/CSS: Basic structure and styling of the web interface.
JavaScript: Fetches data from the API, processes TLE data, and updates the UI dynamically.
Satellite.js: JavaScript library used for satellite tracking and orbital calculations.
Server-Side Considerations: The application requires a server environment to fetch data from external APIs securely and efficiently.
Usage:
To run the ISS Tracker locally:

Clone the repository: git clone <repository-url>
Navigate to the project directory.
Start a local server (e.g., using Python's SimpleHTTPServer or any preferred server setup).
Open the browser and access the application via http://localhost:<port>.
The application will display the current latitude and longitude of the ISS in real-time.
Demo:

<img width="959" alt="output" src="https://github.com/ashokthota333/iss_tracker/assets/109545754/ff16ee36-ce84-43cf-a798-295feb6cffa4">

