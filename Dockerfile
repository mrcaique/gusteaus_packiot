FROM node:20.5
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3000