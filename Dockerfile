FROM node:10.5 as build

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build


FROM nginx:1.15

COPY --from=build /app/dist/ /app/

COPY --from=build /app/assets/ /app/assets

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
