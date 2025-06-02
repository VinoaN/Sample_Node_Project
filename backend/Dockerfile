FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install --production    
# Copy the rest of the application code
COPY . .                
# Expose the port the app runs on
EXPOSE 3000             
# Start the application         
CMD ["node", "server.js"]