FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config* ./
COPY . .

RUN npm install
RUN npm run build

# serve with nginx
FROM nginx:latest

# copy built files
COPY --from=builder /app/dist /usr/share/nginx/html