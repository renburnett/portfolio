FROM node:18.2.0 AS builder

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

# override default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
