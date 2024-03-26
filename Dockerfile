# Use the base Node.js image from Google Cloud
FROM launcher.gcr.io/google/nodejs

# Copy application code into the container
COPY . /app/

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose the port your app will listen on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]
