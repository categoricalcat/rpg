FROM node:latest as client

ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/app

EXPOSE ${PORT}

CMD ["pnpm", "start:client"]

# server
FROM node:latest as server

ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/app

EXPOSE ${PORT}

CMD ["pnpm", "start:server"]
