FROM node:14 AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ic

COPY . .
RUN npm run build

FROM amd64/alpine
COPY --from=builder /usr/src/app/nodeappbin /nodeappbin

ENTRYPOINT /nodeappbin