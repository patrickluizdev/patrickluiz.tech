FROM node:latest AS build

WORKDIR /app

# COPY package.json ./
RUN npm install -g pnpm && apt install git
RUN git clone https://github.com/patrickluizdev/patrickluiz.tech.git
RUN cd patrickluiz.tech
RUN pnpm install

RUN pnpm run build

FROM node:hydrogen-slim AS production

WORKDIR /app

RUN npm install -g pnpm

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

CMD ["pnpm", "start"]
