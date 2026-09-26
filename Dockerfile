FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
ENV NODE_ENV=production PORT=8080
EXPOSE 8080
# The image's own "node" user, by number, so the platform can tell it isn't root.
USER 1000
CMD ["node", "server.js"]
