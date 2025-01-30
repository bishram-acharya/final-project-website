FROM node:18-alpine

WORKDIR /app

# Install dependencies required for node-gyp and other build tools
RUN apk add --no-cache python3 make g++ gcc

# Copy package files
COPY package*.json ./

# Install dependencies with specific platform
RUN npm install --platform=linux --arch=x64

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "preview"]