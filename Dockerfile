# Use the official Node.js image as a base
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
