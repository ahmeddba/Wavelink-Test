# Test solution

## Overview

This project includes a **Flask backend** and a **React Native frontend**.
---

## Folder Structure

- **/Tasks**: The Flask backend that serves API endpoints.
- **/product**: The React Native app that consumes the Flask API.

---

## Running the Flask Project Localy

1. Navigate to the `/Tasks` directory:
    ```bash
    cd Tasks
    ```

2. **Install dependencies** using `pip`:
    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Flask application**:
    ```bash
    python run.py
    ```

   The backend will be running on `http://localhost:5000`.

---

## Running the Flask Project with Docker Compose

1. Navigate to the `/Tasks` directory:
    ```bash
    cd Tasks
    ```

2. **Build the Docker image**:
    ```bash
    docker-compose build
    ```

3. **Start the Flask application** using Docker Compose:
    ```bash
    docker-compose up
    ```

   The backend will be running on `http://localhost:5000`.

4. **Stop the Flask containers** when you're done:
    ```bash
    docker-compose down
    ```

---

### Additional Notes

- **Docker**: Make sure you have Docker and Docker Compose installed on your machine.

## Running the React Native Project

1. Navigate to the `/react-native-project` directory:
    ```bash
    cd react-native-project
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the React Native app** on an emulator or connected device:
    ```bash
    npm run android  # For Android
    npm run ios      # For iOS
    npx run web      # Open in browser click inspect and then the mobile device mode  
    ```

4. The app will be available on your emulator or device.

---

## Technical Decisions

### Flask Backend
- Flask because it is a lightweight Python framework that allows for rapid API development and also scalable.

### React Native Frontend
- React Native was chosen for building a cross-platform mobile application that works on both Android and iOS.
  
