# Use Node.js to build the frontend
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .
EXPOSE 5173


# Start Nginx server
CMD ["npm", "run", "dev"]
