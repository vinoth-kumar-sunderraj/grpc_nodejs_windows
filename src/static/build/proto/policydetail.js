// source: retirementaccount.proto
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

goog.provide('proto.retirementAccount.PolicyDetail');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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

