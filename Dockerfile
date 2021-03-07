FROM node:latest

LABEL maintainer "William Tenório da Silva <contato@williamtenorio.com.br>"

RUN mkdir -p /usr/src/app/node_modules && chmod -R 775 /usr/src/app && chmod -R 775 /usr/local/lib/node_modules

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . .

CMD ["npm", "start"]
