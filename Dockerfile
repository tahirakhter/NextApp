FROM node:20-alpine3.18 as builder

WORKDIR /app
COPY package.json ./
RUN npm instal --production
RUN npm install -g json-server

COPY . .
RUN npm run build
EXPOSE 3000
EXPOSE 3001
COPY ./start.sh /start.sh
RUN chmod +x /start.sh
CMD ["npm","run","start"]
