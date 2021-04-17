const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = "./proto/retirementaccount.proto";

const policyDetail = {
    "policy_number": 234324,
    "start_date": "2000-01-01",
    "retirement_age": 64,
    "scheme_name": "LEX CORP",
    "make_payment": true
};

const funds = [
    {
        "code": "XX",
        "name": "Fund XX",
        "fact_sheet": "http://lorempdf.now.sh/dky/0136_HYY.pdf",
        "percentage": 24,
        "value_gbp": 12567,
        "valuation_date": "2021-03-02" 
    },
    {
        "code": "YY",
        "name": "Fund YY",
        "fact_sheet": "http://lorempdf.now.sh/dky/0136_HYY.pdf",
        "percentage": 15,
        "value_gbp": 23567,
        "valuation_date": "2021-03-04" 
    }
]

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

 /**
 * Starts a RPC server that receives requests for the pension service at the
 * sample server port
 */
  function main() {
    var server = new grpc.Server();
    
    server.bindAsync('localhost:5000', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.log("Got error in starting server" +err);
            throw err;
        }     
      server.start();
      console.log(`server listening on 5000`);  
      server.addService(service.RetirementAccount.service, {
          "RetrievePolicy": retrievePolicyDetail,
          "GetCurrentFunds": retrieveFunds
      })
    });
  }

  /**
 * Retrive policy Detail service implementaiton
 * sample server port
 */
  function retrievePolicyDetail(call, callback){
      console.log("Service::RetrievePolicyDetail invoked" + call.request.policy_number);
      const reqPolicyNo = call.request.policy_number;
      if(reqPolicyNo == 33434){
          callback({
              code: grpc.status.NOT_FOUND, //sample negative failure scenario
              details: "Not Found"
          })
      } else {
          callback(null, policyDetail);
      }
  }

  /**
 * Retrive Fund service implementaiton
 * sample server port
 */
   function retrieveFunds(call, callback){
    console.log("Service::retrieveFunds invoked" + call.request.policy_number);
    const reqPolicyNo = call.request.policy_number;
    callback(null, funds);
}
  main();