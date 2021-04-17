# grpc_nodejs_windows
npm i @grpc/grpc-js
npm i @grpc/proto-loader
npm i google-protobuf
install grpc_tools in global --npm install -g grpc-tools
Download PROTC Compiler for windows from
https://github.com/protocolbuffers/protobuf/releases
Install it in the folder C:/Apps/protoc-3.15.6-win64/bin/protoc 

And execute the below command to generate the static grpc files
Verified working Command - 16/04/2021
Below command generate schema file named retirementaccount_grpc_pb
C:/Apps/protoc-3.15.6-win64/bin/protoc --js_out=import_style=commonjs,binary:src/static/build/ proto/retirementaccount.proto
below command generate service object retirementaccount_pb reference the schema file generated in previous step
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/static/build/proto --grpc_out=grpc_js:src/static/build/proto  --proto_path=./proto ./proto/*.proto

Run the below commands in a terminal to execute the static server
npm run staticserver
open another terminal and execute below command to run static client
npm run staticclient

Run the below commands in a terminal to execute the dynamic server
npm run dynamicserver
open another terminal and execute below command to run dynamic client
npm run dynamicclient

Refer the site for sample implementation
https://dev.to/joker666/the-complete-microservice-tutorial-part-1-building-user-service-with-grpc-node-js-and-mongodb-2abp
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:userService/proto/ \
    --grpc_out=grpc_js:userService/proto \
    --proto_path=./protos/user ./protos/user/*.proto

Interesting read the express js with grpc integration
    https://mherman.org/blog/node-grpc-postgres/
