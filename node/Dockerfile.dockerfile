FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 3000

ENTRYPOINT ["node","index.js"]