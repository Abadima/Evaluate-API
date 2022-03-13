FROM node:16.14-buster-slim
WORKDIR app/
RUN apt update && apt install python3
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start