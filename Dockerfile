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

CMD ["./server","serve","--http","localhost:8090","--publicDir","dist","--indexFallback"]