FROM node:20-alpine
RUN addgroup app && adduser -S -G app app
RUN mkdir -p app/node_modules && chown -R node:node /app

USER app
WORKDIR /app
# WORKDIR /home/node/app
COPY --chown=app:node package*.json .
RUN npm install
