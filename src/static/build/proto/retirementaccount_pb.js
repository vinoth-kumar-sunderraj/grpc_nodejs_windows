// source: proto/retirementaccount.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.retirementAccount.Fund', null, global);
goog.exportSymbol('proto.retirementAccount.Funds', null, global);
goog.exportSymbol('proto.retirementAccount.PolicyDetail', null, global);
goog.exportSymbol('proto.retirementAccount.PolicyReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.retirementAccount.PolicyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.retirementAccount.PolicyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.retirementAccount.PolicyReq.displayName = 'proto.retirementAccount.PolicyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.retirementAccount.PolicyDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.retirementAccount.PolicyDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.retirementAccount.PolicyDetail.displayName = 'proto.retirementAccount.PolicyDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.retirementAccount.Funds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.retirementAccount.Funds.repeatedFields_, null);
};
goog.inherits(proto.retirementAccount.Funds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.retirementAccount.Funds.displayName = 'proto.retirementAccount.Funds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.retirementAccount.Fund = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.retirementAccount.Fund, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.retirementAccount.Fund.displayName = 'proto.retirementAccount.Fund';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.retirementAccount.PolicyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.retirementAccount.PolicyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.retirementAccount.PolicyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.PolicyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.retirementAccount.PolicyReq}
 */
proto.retirementAccount.PolicyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.retirementAccount.PolicyReq;
  return proto.retirementAccount.PolicyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.retirementAccount.PolicyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.retirementAccount.PolicyReq}
 */
proto.retirementAccount.PolicyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPolicyNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.retirementAccount.PolicyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.retirementAccount.PolicyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.retirementAccount.PolicyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.PolicyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 policy_number = 1;
 * @return {number}
 */
proto.retirementAccount.PolicyReq.prototype.getPolicyNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.retirementAccount.PolicyReq} returns this
 */
proto.retirementAccount.PolicyReq.prototype.setPolicyNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.retirementAccount.PolicyDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.retirementAccount.PolicyDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.retirementAccount.PolicyDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.PolicyDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    retirementAge: jspb.Message.getFieldWithDefault(msg, 3, 0),
    schemeName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    makePayment: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.retirementAccount.PolicyDetail}
 */
proto.retirementAccount.PolicyDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.retirementAccount.PolicyDetail;
  return proto.retirementAccount.PolicyDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.retirementAccount.PolicyDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.retirementAccount.PolicyDetail}
 */
proto.retirementAccount.PolicyDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPolicyNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetirementAge(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemeName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMakePayment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.retirementAccount.PolicyDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.retirementAccount.PolicyDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.retirementAccount.PolicyDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.PolicyDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRetirementAge();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSchemeName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMakePayment();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int32 policy_number = 1;
 * @return {number}
 */
proto.retirementAccount.PolicyDetail.prototype.getPolicyNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.retirementAccount.PolicyDetail} returns this
 */
proto.retirementAccount.PolicyDetail.prototype.setPolicyNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string start_date = 2;
 * @return {string}
 */
proto.retirementAccount.PolicyDetail.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.retirementAccount.PolicyDetail} returns this
 */
proto.retirementAccount.PolicyDetail.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 retirement_age = 3;
 * @return {number}
 */
proto.retirementAccount.PolicyDetail.prototype.getRetirementAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.retirementAccount.PolicyDetail} returns this
 */
proto.retirementAccount.PolicyDetail.prototype.setRetirementAge = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string scheme_name = 4;
 * @return {string}
 */
proto.retirementAccount.PolicyDetail.prototype.getSchemeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.retirementAccount.PolicyDetail} returns this
 */
proto.retirementAccount.PolicyDetail.prototype.setSchemeName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool make_payment = 5;
 * @return {boolean}
 */
proto.retirementAccount.PolicyDetail.prototype.getMakePayment = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.retirementAccount.PolicyDetail} returns this
 */
proto.retirementAccount.PolicyDetail.prototype.setMakePayment = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.retirementAccount.Funds.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.retirementAccount.Funds.prototype.toObject = function(opt_includeInstance) {
  return proto.retirementAccount.Funds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.retirementAccount.Funds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.Funds.toObject = function(includeInstance, msg) {
  var f, obj = {
    fundsList: jspb.Message.toObjectList(msg.getFundsList(),
    proto.retirementAccount.Fund.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.retirementAccount.Funds}
 */
proto.retirementAccount.Funds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.retirementAccount.Funds;
  return proto.retirementAccount.Funds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.retirementAccount.Funds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.retirementAccount.Funds}
 */
proto.retirementAccount.Funds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.retirementAccount.Fund;
      reader.readMessage(value,proto.retirementAccount.Fund.deserializeBinaryFromReader);
      msg.addFunds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.retirementAccount.Funds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.retirementAccount.Funds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.retirementAccount.Funds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.Funds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.retirementAccount.Fund.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Fund funds = 1;
 * @return {!Array<!proto.retirementAccount.Fund>}
 */
proto.retirementAccount.Funds.prototype.getFundsList = function() {
  return /** @type{!Array<!proto.retirementAccount.Fund>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.retirementAccount.Fund, 1));
};


/**
 * @param {!Array<!proto.retirementAccount.Fund>} value
 * @return {!proto.retirementAccount.Funds} returns this
*/
proto.retirementAccount.Funds.prototype.setFundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.retirementAccount.Fund=} opt_value
 * @param {number=} opt_index
 * @return {!proto.retirementAccount.Fund}
 */
proto.retirementAccount.Funds.prototype.addFunds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.retirementAccount.Fund, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.retirementAccount.Funds} returns this
 */
proto.retirementAccount.Funds.prototype.clearFundsList = function() {
  return this.setFundsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.retirementAccount.Fund.prototype.toObject = function(opt_includeInstance) {
  return proto.retirementAccount.Fund.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.retirementAccount.Fund} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.Fund.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    factSheet: jspb.Message.getFieldWithDefault(msg, 3, ""),
    percentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    valueGbp: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    valuationDate: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.retirementAccount.Fund}
 */
proto.retirementAccount.Fund.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.retirementAccount.Fund;
  return proto.retirementAccount.Fund.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.retirementAccount.Fund} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.retirementAccount.Fund}
 */
proto.retirementAccount.Fund.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFactSheet(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValueGbp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.retirementAccount.Fund.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.retirementAccount.Fund.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.retirementAccount.Fund} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.retirementAccount.Fund.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFactSheet();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getValueGbp();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getValuationDate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.retirementAccount.Fund.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.retirementAccount.Fund} returns this
 */
proto.retirementAccount.Fund.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.retirementAccount.Fund.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.retirementAccount.Fund} returns this
 */
proto.retirementAccount.Fund.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fact_sheet = 3;
 * @return {string}
 */
proto.retirementAccount.Fund.prototype.getFactSheet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.retirementAccount.Fund} returns this
 */
proto.retirementAccount.Fund.prototype.setFactSheet = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float percentage = 4;
 * @return {number}
 */
proto.retirementAccount.Fund.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.retirementAccount.Fund} returns this
 */
proto.retirementAccount.Fund.prototype.setPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double value_gbp = 5;
 * @return {number}
 */
proto.retirementAccount.Fund.prototype.getValueGbp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.retirementAccount.Fund} returns this
 */
proto.retirementAccount.Fund.prototype.setValueGbp = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string valuation_date = 6;
 * @return {string}
 */
proto.retirementAccount.Fund.prototype.getValuationDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.retirementAccount.Fund} returns this
 */
proto.retirementAccount.Fund.prototype.setValuationDate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.retirementAccount);