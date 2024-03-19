# Dockerfile

# Use Node.js image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Transpile TypeScript to JavaScript
RUN npm run build

# Expose port
EXPOSE 3000

# Command to run the app
CMD [ "npm", "start" ]
