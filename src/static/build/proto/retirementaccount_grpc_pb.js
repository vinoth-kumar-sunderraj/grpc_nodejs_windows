// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var retirementaccount_pb = require('./retirementaccount_pb.js');

function serialize_retirementAccount_Funds(arg) {
  if (!(arg instanceof retirementaccount_pb.Funds)) {
    throw new Error('Expected argument of type retirementAccount.Funds');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_retirementAccount_Funds(buffer_arg) {
  return retirementaccount_pb.Funds.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_retirementAccount_PolicyDetail(arg) {
  if (!(arg instanceof retirementaccount_pb.PolicyDetail)) {
    throw new Error('Expected argument of type retirementAccount.PolicyDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_retirementAccount_PolicyDetail(buffer_arg) {
  return retirementaccount_pb.PolicyDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_retirementAccount_PolicyReq(arg) {
  if (!(arg instanceof retirementaccount_pb.PolicyReq)) {
    throw new Error('Expected argument of type retirementAccount.PolicyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_retirementAccount_PolicyReq(buffer_arg) {
  return retirementaccount_pb.PolicyReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var RetirementAccountService = exports.RetirementAccountService = {
  retrievePolicy: {
    path: '/retirementAccount.RetirementAccount/RetrievePolicy',
    requestStream: false,
    responseStream: false,
    requestType: retirementaccount_pb.PolicyReq,
    responseType: retirementaccount_pb.PolicyDetail,
    requestSerialize: serialize_retirementAccount_PolicyReq,
    requestDeserialize: deserialize_retirementAccount_PolicyReq,
    responseSerialize: serialize_retirementAccount_PolicyDetail,
    responseDeserialize: deserialize_retirementAccount_PolicyDetail,
  },
  getCurrentFunds: {
    path: '/retirementAccount.RetirementAccount/GetCurrentFunds',
    requestStream: false,
    responseStream: false,
    requestType: retirementaccount_pb.PolicyReq,
    responseType: retirementaccount_pb.Funds,
    requestSerialize: serialize_retirementAccount_PolicyReq,
    requestDeserialize: deserialize_retirementAccount_PolicyReq,
    responseSerialize: serialize_retirementAccount_Funds,
    responseDeserialize: deserialize_retirementAccount_Funds,
  },
};

exports.RetirementAccountClient = grpc.makeGenericClientConstructor(RetirementAccountService);
