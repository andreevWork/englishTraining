FROM node:10.5 as build

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

CMD ["npm", "run", "build"]
