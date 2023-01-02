FROM node as builder

ADD . /app
WORKDIR /app
RUN yarn install
RUN yarn run build
RUN apt-get update; apt-get install ca-certificates

FROM scratch

COPY --from=builder /app/dist /app/dist
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
ADD server /app/server

WORKDIR /app
EXPOSE 8090

ARG CAPROVER_GIT_COMMIT_SHA=Default
ENV CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}

CMD ["/app/server","serve","--http","0.0.0.0:8090","--publicDir","/app/dist","--indexFallback"]