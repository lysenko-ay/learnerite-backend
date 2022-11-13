FROM node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18 AS prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=build /usr/src/app/dist ./dist
RUN mkdir -p jobs

CMD ["node", "dist/src/main"]
