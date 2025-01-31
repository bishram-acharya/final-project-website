# Use official Node.js image as base
FROM node:18-alpine 

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Expose port 5173 (default for Vite)
EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "dev", "--", "--host"]
