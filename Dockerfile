FROM node as builder

ADD . /app
WORKDIR /app
RUN yarn install
RUN yarn run build

FROM scratch

COPY --from=builder /app/dist /app
ADD server /app/server

WORKDIR /app
EXPOSE 8090

ARG CAPROVER_GIT_COMMIT_SHA=Default
ENV CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}

CMD ["/app/server","serve","--http","0.0.0.0:8090","--publicDir","dist","--indexFallback"]