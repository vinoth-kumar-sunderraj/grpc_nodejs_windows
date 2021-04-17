const schema = require("../build/proto/retirementaccount_pb");
const services = require("../build/proto/retirementaccount_grpc_pb");
const grpc = require('@grpc/grpc-js');

function main() {
    const clientStub = new services.RetirementAccountClient('localhost:8080', grpc.credentials.createInsecure());

    let policyReq = new schema.PolicyReq();
    policyReq.setPolicyNumber(23432);
    console.log("Policy No is: "+ policyReq.getPolicyNumber());
    //invoke the policy detail service
    clientStub.retrievePolicy(policyReq, function(err, response) {
        console.log(response + grpc.status);
        console.log(err);
    });

    //invoke the funds service
    clientStub.getCurrentFunds(policyReq, function(err, response) {
        console.log(response + grpc.status);
        console.log(err);
    });
}

main();