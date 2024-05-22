FROM node:20-alpine
RUN addgroup app && adduser -S -G app app
# RUN mkdir -p app/node_modules && chown -R node:node /app

USER app
WORKDIR /app
COPY --chown=app:node package*.json .
RUN npm install --legacy-peer-deps
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
EXPOSE 3000
CMD ["npm" "run" "dev"]
# CMD ["node" "app.js"]


