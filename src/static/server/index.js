const schema = require("../build/proto/retirementaccount_pb");
const services = require("../build/proto/retirementaccount_grpc_pb");
var grpc = require('@grpc/grpc-js');
var fs = require ('fs');

const myPolicy = new schema.PolicyDetail();
//console.log(vinoPolicy);
//vinoPolicy.setPolicyNumber(234324);
myPolicy.setPolicyNumber(234324);
myPolicy.setStartDate("22-01-2010");
myPolicy.setRetirementAge(62);
myPolicy.setSchemeName("Retirement Account");
myPolicy.setMakePayment(true);

console.log("Policy Name is: "+myPolicy.getSchemeName());

const xFund = new schema.Fund();
xFund.setCode("XX");
xFund.setName("FullName of Fund");
xFund.setFactSheet("http://xyz.com");
xFund.setPercentage(35.34);
xFund.setValueGbp(2567.34);
xFund.setValuationDate("1999-02-01");
const yFund = new schema.Fund();
xFund.setCode("YY");
xFund.setName("FullName of YY Fund");
xFund.setFactSheet("http://xyz.com");
xFund.setPercentage(36.34);
xFund.setValueGbp(2544.34);
xFund.setValuationDate("2021-03-01");
const xxyyFund = new schema.Fund();
xFund.setCode("XXYY");
xFund.setName("FullName of XXYY Fund");
xFund.setFactSheet("http://xyz.com");
xFund.setPercentage(35.24);
xFund.setValueGbp(3544.34);
xFund.setValuationDate("2021-03-02");


console.log("Fund Name is: "+xFund.getName());

const funds =  new schema.Funds();
funds.addFunds(xFund);
funds.addFunds(yFund);
funds.addFunds(xxyyFund);
//write the funds JSON in a file
fs.writeFileSync("./output/funds", JSON.stringify(funds));
console.log(funds);
const fundBytes = funds.serializeBinary();
console.log("Binary data: "+fundBytes);
//write funds binary in a file
//binary format utilize less space, a good candidate to store in DB
fs.writeFileSync("./output/binaryfunds", fundBytes);

//now read the file and reconstruct the object
const data = fs.readFileSync('./output/binaryfunds', null);
const funds2 = new schema.Funds.deserializeBinary(data);
console.log("Data from file "+ JSON.stringify(funds2));
 
/**
 * Implements the RetrievePolicy RPC method.
 */
 function retrievePolicyDetail(call, callback) {
    console.log("retrievePolicyDetail is invoked");
    console.log(call.request.getPolicyNumber());
    callback(null, myPolicy);
  }

/**
 * Implements the RetrievePolicy RPC method.
 */
 function getCurrentFunds(call, callback) {
    console.log("getCurrentFunds is invoked");
    console.log(call.request.getPolicyNumber());
    callback(null, funds);
  }

    /**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    
    //server.addService(services.RetirementAccountService, { retrievePolicy: retrievePolicyDetail});
    server.addService(services.RetirementAccountService, {
      retrievePolicy: retrievePolicyDetail,
      getCurrentFunds: getCurrentFunds,
    });
    server.bindAsync('localhost:8080', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.log("Got error" +err);
            throw err;
        }
      console.log(`Listening on 8080`);  
      server.start();
      console.log(`server listening on 8080`);  
    });
  }

  main();