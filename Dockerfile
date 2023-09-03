FROM node:20.5
WORKDIR /app
VOLUME /app/node_modules
COPY package*.json ./
RUN npm install
EXPOSE 3000