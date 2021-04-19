# grpc_nodejs_windows
This project is a sample GRPC service, built using NodeJS in windows. 
GRPC services can be built using two ways and this project implements service in both ways.
1. Static - Static generation, using grpc-tools and thus protoc, plus grpc at runtime.
2. Dynamic - Dynamic generation, using @grpc/proto-loader and thus protobufjs, plus grpc at runtime.

## Install NPM dependency
```
1. npm i @grpc/grpc-js
2. npm i @grpc/proto-loader
3. npm i google-protobuf
4. install grpc_tools in global --npm install -g grpc-tools
```
### Execute the below command to generate the static grpc files ### 
Verified working Command - 16/04/2021
### Execute below command generate schema & service file name ends with *_grpc_pb & *_pb ### 
```
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/static/build/proto --grpc_out=grpc_js:src/static/build/proto  --proto_path=./proto ./proto/*.proto

```
## Run Static GRPC ]service ##
### Run the below commands in a terminal [Execute the static server]
```
npm run staticserver
```
### open another terminal [Eecute below command to run static client]
```
npm run staticclient
```
## Run Dynamic GRPC service
### Run the below commands in a terminal [Execute the dynamic server]
```
npm run dynamicserver
```
### Open another terminal [Execute below command to run dynamic client]
```
npm run dynamicclient
```

## Refer the site for sample implementation
https://dev.to/joker666/the-complete-microservice-tutorial-part-1-building-user-service-with-grpc-node-js-and-mongodb-2abp


## Interesting read the express js with grpc integration
    https://mherman.org/blog/node-grpc-postgres/
