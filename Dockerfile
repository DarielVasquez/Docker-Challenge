FROM node:14-slim

WORKDIR /home/node/app

COPY . .

RUN apt update -y && npm install

EXPOSE 8080

CMD [ "npm", "start" ]