# build modules
FROM node:16 AS nodemodule
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ic
RUN npm prune --production

# new stage
FROM node:16 AS buildtime
WORKDIR /usr/src/app
COPY --from=nodemodule /usr/src/app/node_modules /usr/src/app/node_modules

# copy source code
COPY . .

# build add
RUN npm run build

# last stage
FROM amd64/alpine
WORKDIR /
COPY --from=buildtime /usr/src/app/dockerizenodeapp /app

CMD [ "app" ]