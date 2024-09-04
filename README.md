# AROHA IoT dashboard for students


Aroha is a React Native application built using Expo and TypeScript for tracking the height and weight of students over time. The app is designed to work alongside an IoT device for measurement.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Install [Node.js](https://nodejs.org/) (LTS version recommended)
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/) globally:
  ```bash
  npm install -g expo-cli
  ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sandip-pathe/aroha.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a `firebaseconfig.ts` file in the project root and add your Firebase configuration details. This file is ignored by Git.

   Example `firebaseconfig.ts`:
   ```typescript
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Start the development server:**
   ```bash
   expo start
   ```

## Project Structure

```
├── assets/               # Static assets (e.g., images, fonts)
├── components/           # Reusable components
├── screens/              # Application screens
├── firebaseconfig.ts     # Firebase configuration (gitignored)
├── App.tsx               # Entry point of the application
├── app.json              # Expo configuration
└── package.json          # Project dependencies
```

## Running the Project

1. Run the following command to start the Expo development server:
   ```bash
   expo start
   ```

2. Use the Expo Go app on your device or an emulator to preview the app.

## Contributing

We welcome contributions from the community! Follow these steps to get started:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`.
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`.
4. Push to the branch: `git push origin feature/AmazingFeature`.
5. Open a pull request.

### Code Style

- Ensure that your code adheres to the project's existing code style.
- If you're unsure about linting, don't worry! We'll help guide you through the process.

### Line Endings (LF/CRLF)

You may see warnings about line endings in `package.json` and `package-lock.json`. This is normal and related to differences in line ending styles between operating systems (LF for Unix, CRLF for Windows). No action is required unless it causes issues in your development environment.

## License

This project is currently not licensed. If you would like to contribute, feel free to reach out for discussions on licensing options.
```

### Explanation:
- **Firebase Setup:** The `firebaseconfig.ts` instructions are included since this file is `.gitignore`-d.
- **Line Ending Warnings:** The explanation is provided for the LF/CRLF warnings, which are common and harmless unless specific issues arise.
- **Contribution Guidelines:** Basic contribution instructions are included, with a placeholder for a potential open-source license.
  
You can customize this template as needed! Let me know if you need any further modifications.