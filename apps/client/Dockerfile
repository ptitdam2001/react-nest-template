FROM node:lts AS builder

WORKDIR /base

COPY package.json .
COPY yarn.lock .

COPY ./packages packages/
COPY ./apps/client/package.json apps/client/
COPY ./apps/client/nginx.conf apps/client/

RUN yarn install

# Build core package
WORKDIR /base/packages/core
RUN yarn build

WORKDIR /base/apps/client
COPY ./apps/client .
RUN yarn build


# -------------------------------
FROM nginx:stable-alpine

RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf

COPY --from=builder /base/apps/client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /base/apps/client/dist/ /webapp/packages/app/dist/
CMD ["nginx"]