FROM node:19-alpine

WORKDIR /usr/src/app

RUN npm install pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . . 

EXPOSE 3001

CMD [ "pnpm", "start" ]