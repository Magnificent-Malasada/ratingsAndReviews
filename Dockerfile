FROM node:14.16.0

RUN mkdir -p /src/app

WORKDIR /app

COPY Server  /app

RUN npm install

COPY . /app

EXPOSE 3002

CMD ["npm", "start"]