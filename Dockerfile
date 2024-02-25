FROM node:latest AS build
WORKDIR /app
ENV REPO_NAME=patrickluiz.tech
RUN npm install -g pnpm && apt install git
RUN git clone https://github.com/patrickluizdev/${REPO_NAME}.git
WORKDIR /app/${REPO_NAME}
RUN pnpm install
RUN pnpm run build

FROM node:hydrogen-slim AS production
ENV REPO_NAME=patrickluiz.tech
WORKDIR /app
RUN npm install -g pnpm
COPY --from=build /app/${REPO_NAME}/node_modules ./node_modules
COPY --from=build /app/${REPO_NAME}/.next ./.next
COPY --from=build /app/${REPO_NAME}/public ./public

CMD ["npx", "serve@latest", "out"]
