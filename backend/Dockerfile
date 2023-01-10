FROM node:current-alpine3.16  as build-stage

ENV HOST_MYSQL=database-connection.com
ENV USER_MYSQL=root
ENV PASS_MYSQL=password
ENV DB_MYSQL=users

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g pm2
RUN pm2 init
COPY . .
EXPOSE 9001
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
