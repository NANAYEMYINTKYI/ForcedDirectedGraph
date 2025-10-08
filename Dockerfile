# Stage 1: Build the application
FROM node:22.13-alpine3.20 AS builder

# Set working directory
WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# ------------------------------------

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the server
CMD ["nginx", "-g", "daemon off;"]