FROM node:16.14.2-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN yarn cache clean \
  rm yarn.lock \
  rm -rf node_modules \
  yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]