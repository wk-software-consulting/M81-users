FROM node:16.17.0-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]