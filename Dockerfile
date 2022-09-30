FROM node:latest as install

WORKDIR /usr/src/app

RUN apt update && apt install -y git

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

FROM install as client

ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/app

EXPOSE ${PORT}

CMD ["pnpm", "start:client"]

FROM install as server

ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/app

EXPOSE ${PORT}

CMD ["pnpm", "start:server"]
