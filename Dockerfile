FROM node:8.12-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=true && npm config set depth 0 && npm cache clean --force

RUN npm i && mkdir / frontend && mv ./node_modules ./frontend

WORKDIR /frontend

COPY . .

# CMD npm start

RUN npm run build --prod

FROM nginx:1.15-alpine

RUN rm -rf /usr/share/nginx/html/*

# COPY nginx.conf /etc/nginx/conf.d/

COPY --from=builder /frontend/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]