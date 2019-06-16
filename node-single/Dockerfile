FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# trick to use cache, only reinstall if package.json is changed

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 8080

CMD ["npm", "start"]