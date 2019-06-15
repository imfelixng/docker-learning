FROM alpine

RUN apk add --update gcc

RUN apk add --update redis
# Not changing dockerfile after build image to use cache, put new line below

CMD ["redis-server"]