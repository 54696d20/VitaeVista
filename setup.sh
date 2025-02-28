#!/bin/bash

# Set project directory
PROJECT_NAME="vitaevista-frontend"

# Create project directory
# mkdir -p $PROJECT_NAME
cd $PROJECT_NAME
#mkdir src
cd src
# Initialize a Next.js app with Tailwind CSS
#npx create-next-app@latest . --ts --eslint --tailwind --use-npm

# Create pages
#mkdir -p pages
#touch pages/index.tsx
touch pages/dashboard.tsx
touch pages/upload.tsx
touch pages/analysis.tsx
touch pages/profile.tsx

# Create components folder
mkdir -p components
touch components/Sidebar.tsx
touch components/Header.tsx
touch components/ResumeUpload.tsx
touch components/AIAnalysis.tsx

# Create styles folder
#mkdir -p styles
#touch styles/globals.css

# Create utils folder
mkdir -p utils
touch utils/api.ts

# Display success message
echo "✅ VitaeVista frontend structure has been set up!"
echo "Run 'npm install' and 'npm run dev' to start the project."
