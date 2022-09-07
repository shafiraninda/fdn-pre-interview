# build stage
FROM node:16-alpine AS development
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
CMD ["npm","run", "start"]