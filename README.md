# grpc_nodejs_windows
This project is a sample GRPC service built using NodeJS in windows. 
## Install NPM dependency
```
1. npm i @grpc/grpc-js
2. npm i @grpc/proto-loader
3. npm i google-protobuf
4. install grpc_tools in global --npm install -g grpc-tools
```

## Download latest [PROTC Compiler](https://github.com/protocolbuffers/protobuf/releases) for windows 
```
Install it in the folder 
C:/Apps/protoc-3.15.6-win64/bin/protoc 
```
### Execute the below command to generate the static grpc files ### 
Verified working Command - 16/04/2021
### Execute below command generate schema file named retirementaccount_grpc_pb ### 
C:/Apps/protoc-3.15.6-win64/bin/protoc --js_out=import_style=commonjs,binary:src/static/build/ proto/retirementaccount.proto
### Execute below command generate service object retirementaccount_pb reference the schema file generated in previous step ### 
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/static/build/proto --grpc_out=grpc_js:src/static/build/proto  --proto_path=./proto ./proto/*.proto
## Static code
### Run the below commands in a terminal [Execute the static server]
```
npm run staticserver
```
### open another terminal [Eecute below command to run static client]
```
npm run staticclient
```
## Dynamic Code
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
