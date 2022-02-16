FROM node:16.6.2

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g node-gyp
RUN npm install

COPY . .

RUN npm run compile

EXPOSE 3200

CMD [ "npm", "run", "start-docker" ]
