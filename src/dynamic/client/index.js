const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = "./proto/retirementaccount.proto";
const inValidPolicyReq = {
    "policy_number": 33434
}
//the element name are to be exactly same as defined in the proto buff
const validPolicyReq = {
    "policy_number": 23435
}

//load proto file
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
// get service defintion package handle    
var service = grpc.loadPackageDefinition(packageDefinition).retirementAccount;
var clientStub = new service.RetirementAccount('localhost:5000', grpc.credentials.createInsecure());
//invalid policy request
clientStub.RetrievePolicy(inValidPolicyReq, (err, response) => {
    if(!err){
        console.log("Response"+ JSON.stringify(response));
    } else {
        console.log(err);
    }
});

//Valid policy request
clientStub.RetrievePolicy(validPolicyReq, (err, response) => {
    if(!err){
        console.log("Response"+ JSON.stringify(response));
    } else {
        console.log(err);
    }
});

//retrieve policy funds 
//dynamic client is hard to debug, the current rmi fails returns empty response and not throwing any error
//suspect the element names could be issue
clientStub.GetCurrentFunds(validPolicyReq, (err, response) => {
    if(!err){
        console.log("Response"+ JSON.stringify(response));//this call failing returning empty response
    } else {
        console.log(err);
    }
});
