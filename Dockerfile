ARG NODE_VERSION=18.18.0

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

FROM node:${NODE_VERSION}-alpine AS app

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000