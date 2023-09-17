# Use an official Node.js runtime as the base image
FROM node:18.14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Build
RUN npm run build

# Expose the port your Express.js app will run on
EXPOSE 3000

# Define environment variables if necessary
ENV NODE_ENV=production
ENV PORT=3000

# Start your Express.js application
CMD ["node", "dist/app.js"]