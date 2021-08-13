# Download dependencies the application step
FROM node:14-alpine AS deps
ENV NODE_ENV development
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --forzen-lockfile

# Build the application step
FROM node:14-alpine AS build
ARG SENTRY_AUTH_TOKEN
ARG SENTRY_RELEASE
ENV NODE_ENV development
ENV SENTRY_RELEASE=${SENTRY_RELEASE}
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build \
  && yarn install --prefer-offline

# Serve the application step
FROM node:14-alpine
LABEL maintainer="Aditya Rahman <aditya@dot-indonesia.com>"
ARG SENTRY_RELEASE
ENV NODE_ENV development
ENV SENTRY_RELEASE=${SENTRY_RELEASE}
WORKDIR /app
RUN addgroup -g 1001 -S appname \
	&& adduser -S appname -u 1001
COPY --from=build --chown=appname:appname /app/public ./public 
COPY --from=build --chown=appname:appname /app/.next ./.next
COPY --from=build --chown=appname:appname /app/node_modules ./node_modules
COPY --from=build --chown=appname:appname /app/package.json ./package.json
USER polpa
EXPOSE 3000
CMD ["yarn", "start"]
