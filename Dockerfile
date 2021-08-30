# build modules
FROM node:14 AS step0
WORKDIR /app
COPY package*.json ./
RUN npm ic
COPY . .
RUN npm run build

CMD npm start