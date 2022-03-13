FROM node:16.14-buster-slim
WORKDIR app/
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install python3 -y
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start