FROM node:latest as install

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

# client
FROM install as client

WORKDIR /usr/src/app/client

EXPOSE 6789

CMD ["pnpm", "dev"]

# server
FROM install as server

WORKDIR /usr/src/app/server

EXPOSE 9876

CMD ["pnpm", "dev"]
