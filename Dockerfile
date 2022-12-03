FROM ubuntu:latest

WORKDIR /app

COPY . .

# keep container running
CMD tail -f /dev/null
