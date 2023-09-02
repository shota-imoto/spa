FROM golang:1.21 as dev
ENV ROOT=/go/src/app
COPY docker/server/air.toml $ROOT/server/air.toml
COPY server/go.mod server/go.sum $ROOT/server/
WORKDIR $ROOT/server
RUN go mod download
RUN go install github.com/cosmtrek/air@latest
CMD ["air"]
# CMD ["sleep", "7200"]