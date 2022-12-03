FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm i -g npm pnpm

RUN pnpm i

RUN pnpm generate

EXPOSE 9876

CMD ["pnpm", "dev"]
