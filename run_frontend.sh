# !/bin/bash

echo "|-------- Beginning of Running Front-End Script --------|"
echo "Installing NPM Dependencies"
time npm install
echo "Running React + Vite Frontend:"
npm run format
npm run dev
echo "|-------- End of Running Front-End Script --------|"
