/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.Rpc = (function() {

        /**
         * Constructs a new Rpc service.
         * @memberof rpc
         * @classdesc Represents a Rpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Rpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Rpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Rpc;

        /**
         * Creates new Rpc service using the specified rpc implementation.
         * @function create
         * @memberof rpc.Rpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Rpc} RPC service. Useful where requests and/or responses are streamed.
         */
        Rpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.Rpc#getProfile}.
         * @memberof rpc.Rpc
         * @typedef GetProfileCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.GetProfileResponse} [response] GetProfileResponse
         */

        /**
         * Calls GetProfile.
         * @function getProfile
         * @memberof rpc.Rpc
         * @instance
         * @param {user.IGetProfileRequest} request GetProfileRequest message or plain object
         * @param {rpc.Rpc.GetProfileCallback} callback Node-style callback called with the error, if any, and GetProfileResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.getProfile = function getProfile(request, callback) {
            return this.rpcCall(getProfile, $root.user.GetProfileRequest, $root.user.GetProfileResponse, request, callback);
        }, "name", { value: "GetProfile" });

        /**
         * Calls GetProfile.
         * @function getProfile
         * @memberof rpc.Rpc
         * @instance
         * @param {user.IGetProfileRequest} request GetProfileRequest message or plain object
         * @returns {Promise<user.GetProfileResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#updateProfile}.
         * @memberof rpc.Rpc
         * @typedef UpdateProfileCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UpdateProfileResponse} [response] UpdateProfileResponse
         */

        /**
         * Calls UpdateProfile.
         * @function updateProfile
         * @memberof rpc.Rpc
         * @instance
         * @param {user.IUpdateProfileRequest} request UpdateProfileRequest message or plain object
         * @param {rpc.Rpc.UpdateProfileCallback} callback Node-style callback called with the error, if any, and UpdateProfileResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.updateProfile = function updateProfile(request, callback) {
            return this.rpcCall(updateProfile, $root.user.UpdateProfileRequest, $root.user.UpdateProfileResponse, request, callback);
        }, "name", { value: "UpdateProfile" });

        /**
         * Calls UpdateProfile.
         * @function updateProfile
         * @memberof rpc.Rpc
         * @instance
         * @param {user.IUpdateProfileRequest} request UpdateProfileRequest message or plain object
         * @returns {Promise<user.UpdateProfileResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#getTeam}.
         * @memberof rpc.Rpc
         * @typedef GetTeamCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {team.GetTeamResponse} [response] GetTeamResponse
         */

        /**
         * Calls GetTeam.
         * @function getTeam
         * @memberof rpc.Rpc
         * @instance
         * @param {team.IGetTeamRequest} request GetTeamRequest message or plain object
         * @param {rpc.Rpc.GetTeamCallback} callback Node-style callback called with the error, if any, and GetTeamResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.getTeam = function getTeam(request, callback) {
            return this.rpcCall(getTeam, $root.team.GetTeamRequest, $root.team.GetTeamResponse, request, callback);
        }, "name", { value: "GetTeam" });

        /**
         * Calls GetTeam.
         * @function getTeam
         * @memberof rpc.Rpc
         * @instance
         * @param {team.IGetTeamRequest} request GetTeamRequest message or plain object
         * @returns {Promise<team.GetTeamResponse>} Promise
         * @variation 2
         */

        return Rpc;
    })();

    return rpc;
})();

$root.team = (function() {

    /**
     * Namespace team.
     * @exports team
     * @namespace
     */
    var team = {};

    team.GetTeamRequest = (function() {

        /**
         * Properties of a GetTeamRequest.
         * @memberof team
         * @interface IGetTeamRequest
         * @property {number|null} [teamId] GetTeamRequest teamId
         */

        /**
         * Constructs a new GetTeamRequest.
         * @memberof team
         * @classdesc Represents a GetTeamRequest.
         * @implements IGetTeamRequest
         * @constructor
         * @param {team.IGetTeamRequest=} [properties] Properties to set
         */
        function GetTeamRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTeamRequest teamId.
         * @member {number} teamId
         * @memberof team.GetTeamRequest
         * @instance
         */
        GetTeamRequest.prototype.teamId = 0;

        /**
         * Creates a new GetTeamRequest instance using the specified properties.
         * @function create
         * @memberof team.GetTeamRequest
         * @static
         * @param {team.IGetTeamRequest=} [properties] Properties to set
         * @returns {team.GetTeamRequest} GetTeamRequest instance
         */
        GetTeamRequest.create = function create(properties) {
            return new GetTeamRequest(properties);
        };

        /**
         * Encodes the specified GetTeamRequest message. Does not implicitly {@link team.GetTeamRequest.verify|verify} messages.
         * @function encode
         * @memberof team.GetTeamRequest
         * @static
         * @param {team.IGetTeamRequest} message GetTeamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTeamRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
            return writer;
        };

        /**
         * Encodes the specified GetTeamRequest message, length delimited. Does not implicitly {@link team.GetTeamRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof team.GetTeamRequest
         * @static
         * @param {team.IGetTeamRequest} message GetTeamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTeamRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTeamRequest message from the specified reader or buffer.
         * @function decode
         * @memberof team.GetTeamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {team.GetTeamRequest} GetTeamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTeamRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.team.GetTeamRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTeamRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof team.GetTeamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {team.GetTeamRequest} GetTeamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTeamRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTeamRequest message.
         * @function verify
         * @memberof team.GetTeamRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTeamRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId))
                    return "teamId: integer expected";
            return null;
        };

        /**
         * Creates a GetTeamRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof team.GetTeamRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {team.GetTeamRequest} GetTeamRequest
         */
        GetTeamRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.team.GetTeamRequest)
                return object;
            var message = new $root.team.GetTeamRequest();
            if (object.teamId != null)
                message.teamId = object.teamId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetTeamRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof team.GetTeamRequest
         * @static
         * @param {team.GetTeamRequest} message GetTeamRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTeamRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.teamId = 0;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                object.teamId = message.teamId;
            return object;
        };

        /**
         * Converts this GetTeamRequest to JSON.
         * @function toJSON
         * @memberof team.GetTeamRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTeamRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTeamRequest;
    })();

    team.GetTeamResponse = (function() {

        /**
         * Properties of a GetTeamResponse.
         * @memberof team
         * @interface IGetTeamResponse
         * @property {string|null} [name] GetTeamResponse name
         * @property {common.city.City|null} [hometown] GetTeamResponse hometown
         */

        /**
         * Constructs a new GetTeamResponse.
         * @memberof team
         * @classdesc Represents a GetTeamResponse.
         * @implements IGetTeamResponse
         * @constructor
         * @param {team.IGetTeamResponse=} [properties] Properties to set
         */
        function GetTeamResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTeamResponse name.
         * @member {string} name
         * @memberof team.GetTeamResponse
         * @instance
         */
        GetTeamResponse.prototype.name = "";

        /**
         * GetTeamResponse hometown.
         * @member {common.city.City} hometown
         * @memberof team.GetTeamResponse
         * @instance
         */
        GetTeamResponse.prototype.hometown = 0;

        /**
         * Creates a new GetTeamResponse instance using the specified properties.
         * @function create
         * @memberof team.GetTeamResponse
         * @static
         * @param {team.IGetTeamResponse=} [properties] Properties to set
         * @returns {team.GetTeamResponse} GetTeamResponse instance
         */
        GetTeamResponse.create = function create(properties) {
            return new GetTeamResponse(properties);
        };

        /**
         * Encodes the specified GetTeamResponse message. Does not implicitly {@link team.GetTeamResponse.verify|verify} messages.
         * @function encode
         * @memberof team.GetTeamResponse
         * @static
         * @param {team.IGetTeamResponse} message GetTeamResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTeamResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.hometown != null && message.hasOwnProperty("hometown"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hometown);
            return writer;
        };

        /**
         * Encodes the specified GetTeamResponse message, length delimited. Does not implicitly {@link team.GetTeamResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof team.GetTeamResponse
         * @static
         * @param {team.IGetTeamResponse} message GetTeamResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTeamResponse message from the specified reader or buffer.
         * @function decode
         * @memberof team.GetTeamResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {team.GetTeamResponse} GetTeamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTeamResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.team.GetTeamResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.hometown = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTeamResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof team.GetTeamResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {team.GetTeamResponse} GetTeamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTeamResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTeamResponse message.
         * @function verify
         * @memberof team.GetTeamResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTeamResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.hometown != null && message.hasOwnProperty("hometown"))
                switch (message.hometown) {
                default:
                    return "hometown: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a GetTeamResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof team.GetTeamResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {team.GetTeamResponse} GetTeamResponse
         */
        GetTeamResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.team.GetTeamResponse)
                return object;
            var message = new $root.team.GetTeamResponse();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.hometown) {
            case "UNKNOWN":
            case 0:
                message.hometown = 0;
                break;
            case "NEWYOUR":
            case 1:
                message.hometown = 1;
                break;
            case "MADRID":
            case 2:
                message.hometown = 2;
                break;
            case "TOKYO":
            case 3:
                message.hometown = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTeamResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof team.GetTeamResponse
         * @static
         * @param {team.GetTeamResponse} message GetTeamResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTeamResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.hometown = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.hometown != null && message.hasOwnProperty("hometown"))
                object.hometown = options.enums === String ? $root.common.city.City[message.hometown] : message.hometown;
            return object;
        };

        /**
         * Converts this GetTeamResponse to JSON.
         * @function toJSON
         * @memberof team.GetTeamResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTeamResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTeamResponse;
    })();

    return team;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.city = (function() {

        /**
         * Namespace city.
         * @memberof common
         * @namespace
         */
        var city = {};

        /**
         * City enum.
         * @name common.city.City
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} NEWYOUR=1 NEWYOUR value
         * @property {number} MADRID=2 MADRID value
         * @property {number} TOKYO=3 TOKYO value
         */
        city.City = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "NEWYOUR"] = 1;
            values[valuesById[2] = "MADRID"] = 2;
            values[valuesById[3] = "TOKYO"] = 3;
            return values;
        })();

        return city;
    })();

    common.lang = (function() {

        /**
         * Namespace lang.
         * @memberof common
         * @namespace
         */
        var lang = {};

        /**
         * Language enum.
         * @name common.lang.Language
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} ENGLISH=1 ENGLISH value
         * @property {number} SPANISH=2 SPANISH value
         * @property {number} JAPANESE=3 JAPANESE value
         */
        lang.Language = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "ENGLISH"] = 1;
            values[valuesById[2] = "SPANISH"] = 2;
            values[valuesById[3] = "JAPANESE"] = 3;
            return values;
        })();

        return lang;
    })();

    /**
     * StatusCode enum.
     * @name common.StatusCode
     * @enum {string}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} ERROR=1 ERROR value
     */
    common.StatusCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1] = "ERROR"] = 1;
        return values;
    })();

    return common;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.GetProfileRequest = (function() {

        /**
         * Properties of a GetProfileRequest.
         * @memberof user
         * @interface IGetProfileRequest
         * @property {number|null} [userId] GetProfileRequest userId
         */

        /**
         * Constructs a new GetProfileRequest.
         * @memberof user
         * @classdesc Represents a GetProfileRequest.
         * @implements IGetProfileRequest
         * @constructor
         * @param {user.IGetProfileRequest=} [properties] Properties to set
         */
        function GetProfileRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetProfileRequest userId.
         * @member {number} userId
         * @memberof user.GetProfileRequest
         * @instance
         */
        GetProfileRequest.prototype.userId = 0;

        /**
         * Creates a new GetProfileRequest instance using the specified properties.
         * @function create
         * @memberof user.GetProfileRequest
         * @static
         * @param {user.IGetProfileRequest=} [properties] Properties to set
         * @returns {user.GetProfileRequest} GetProfileRequest instance
         */
        GetProfileRequest.create = function create(properties) {
            return new GetProfileRequest(properties);
        };

        /**
         * Encodes the specified GetProfileRequest message. Does not implicitly {@link user.GetProfileRequest.verify|verify} messages.
         * @function encode
         * @memberof user.GetProfileRequest
         * @static
         * @param {user.IGetProfileRequest} message GetProfileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetProfileRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetProfileRequest message, length delimited. Does not implicitly {@link user.GetProfileRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.GetProfileRequest
         * @static
         * @param {user.IGetProfileRequest} message GetProfileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetProfileRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetProfileRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.GetProfileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.GetProfileRequest} GetProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetProfileRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.GetProfileRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetProfileRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.GetProfileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.GetProfileRequest} GetProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetProfileRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetProfileRequest message.
         * @function verify
         * @memberof user.GetProfileRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetProfileRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a GetProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetProfileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetProfileRequest} GetProfileRequest
         */
        GetProfileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetProfileRequest)
                return object;
            var message = new $root.user.GetProfileRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetProfileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetProfileRequest
         * @static
         * @param {user.GetProfileRequest} message GetProfileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetProfileRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GetProfileRequest to JSON.
         * @function toJSON
         * @memberof user.GetProfileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetProfileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetProfileRequest;
    })();

    user.GetProfileResponse = (function() {

        /**
         * Properties of a GetProfileResponse.
         * @memberof user
         * @interface IGetProfileResponse
         * @property {string|null} [name] GetProfileResponse name
         * @property {string|null} [bio] GetProfileResponse bio
         * @property {common.city.City|null} [city] GetProfileResponse city
         * @property {common.lang.Language|null} [language] GetProfileResponse language
         */

        /**
         * Constructs a new GetProfileResponse.
         * @memberof user
         * @classdesc Represents a GetProfileResponse.
         * @implements IGetProfileResponse
         * @constructor
         * @param {user.IGetProfileResponse=} [properties] Properties to set
         */
        function GetProfileResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetProfileResponse name.
         * @member {string} name
         * @memberof user.GetProfileResponse
         * @instance
         */
        GetProfileResponse.prototype.name = "";

        /**
         * GetProfileResponse bio.
         * @member {string} bio
         * @memberof user.GetProfileResponse
         * @instance
         */
        GetProfileResponse.prototype.bio = "";

        /**
         * GetProfileResponse city.
         * @member {common.city.City} city
         * @memberof user.GetProfileResponse
         * @instance
         */
        GetProfileResponse.prototype.city = 0;

        /**
         * GetProfileResponse language.
         * @member {common.lang.Language} language
         * @memberof user.GetProfileResponse
         * @instance
         */
        GetProfileResponse.prototype.language = 0;

        /**
         * Creates a new GetProfileResponse instance using the specified properties.
         * @function create
         * @memberof user.GetProfileResponse
         * @static
         * @param {user.IGetProfileResponse=} [properties] Properties to set
         * @returns {user.GetProfileResponse} GetProfileResponse instance
         */
        GetProfileResponse.create = function create(properties) {
            return new GetProfileResponse(properties);
        };

        /**
         * Encodes the specified GetProfileResponse message. Does not implicitly {@link user.GetProfileResponse.verify|verify} messages.
         * @function encode
         * @memberof user.GetProfileResponse
         * @static
         * @param {user.IGetProfileResponse} message GetProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetProfileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.bio != null && message.hasOwnProperty("bio"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bio);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.city);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.language);
            return writer;
        };

        /**
         * Encodes the specified GetProfileResponse message, length delimited. Does not implicitly {@link user.GetProfileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.GetProfileResponse
         * @static
         * @param {user.IGetProfileResponse} message GetProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetProfileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.GetProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.GetProfileResponse} GetProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetProfileResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.GetProfileResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.bio = reader.string();
                    break;
                case 3:
                    message.city = reader.int32();
                    break;
                case 4:
                    message.language = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetProfileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.GetProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.GetProfileResponse} GetProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetProfileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetProfileResponse message.
         * @function verify
         * @memberof user.GetProfileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetProfileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.bio != null && message.hasOwnProperty("bio"))
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                switch (message.city) {
                default:
                    return "city: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.language != null && message.hasOwnProperty("language"))
                switch (message.language) {
                default:
                    return "language: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a GetProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetProfileResponse} GetProfileResponse
         */
        GetProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetProfileResponse)
                return object;
            var message = new $root.user.GetProfileResponse();
            if (object.name != null)
                message.name = String(object.name);
            if (object.bio != null)
                message.bio = String(object.bio);
            switch (object.city) {
            case "UNKNOWN":
            case 0:
                message.city = 0;
                break;
            case "NEWYOUR":
            case 1:
                message.city = 1;
                break;
            case "MADRID":
            case 2:
                message.city = 2;
                break;
            case "TOKYO":
            case 3:
                message.city = 3;
                break;
            }
            switch (object.language) {
            case "UNKNOWN":
            case 0:
                message.language = 0;
                break;
            case "ENGLISH":
            case 1:
                message.language = 1;
                break;
            case "SPANISH":
            case 2:
                message.language = 2;
                break;
            case "JAPANESE":
            case 3:
                message.language = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetProfileResponse
         * @static
         * @param {user.GetProfileResponse} message GetProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.bio = "";
                object.city = options.enums === String ? "UNKNOWN" : 0;
                object.language = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.bio != null && message.hasOwnProperty("bio"))
                object.bio = message.bio;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = options.enums === String ? $root.common.city.City[message.city] : message.city;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = options.enums === String ? $root.common.lang.Language[message.language] : message.language;
            return object;
        };

        /**
         * Converts this GetProfileResponse to JSON.
         * @function toJSON
         * @memberof user.GetProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetProfileResponse;
    })();

    user.UpdateProfileRequest = (function() {

        /**
         * Properties of an UpdateProfileRequest.
         * @memberof user
         * @interface IUpdateProfileRequest
         * @property {string|null} [name] UpdateProfileRequest name
         * @property {string|null} [bio] UpdateProfileRequest bio
         * @property {common.city.City|null} [city] UpdateProfileRequest city
         * @property {common.lang.Language|null} [language] UpdateProfileRequest language
         */

        /**
         * Constructs a new UpdateProfileRequest.
         * @memberof user
         * @classdesc Represents an UpdateProfileRequest.
         * @implements IUpdateProfileRequest
         * @constructor
         * @param {user.IUpdateProfileRequest=} [properties] Properties to set
         */
        function UpdateProfileRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateProfileRequest name.
         * @member {string} name
         * @memberof user.UpdateProfileRequest
         * @instance
         */
        UpdateProfileRequest.prototype.name = "";

        /**
         * UpdateProfileRequest bio.
         * @member {string} bio
         * @memberof user.UpdateProfileRequest
         * @instance
         */
        UpdateProfileRequest.prototype.bio = "";

        /**
         * UpdateProfileRequest city.
         * @member {common.city.City} city
         * @memberof user.UpdateProfileRequest
         * @instance
         */
        UpdateProfileRequest.prototype.city = 0;

        /**
         * UpdateProfileRequest language.
         * @member {common.lang.Language} language
         * @memberof user.UpdateProfileRequest
         * @instance
         */
        UpdateProfileRequest.prototype.language = 0;

        /**
         * Creates a new UpdateProfileRequest instance using the specified properties.
         * @function create
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {user.IUpdateProfileRequest=} [properties] Properties to set
         * @returns {user.UpdateProfileRequest} UpdateProfileRequest instance
         */
        UpdateProfileRequest.create = function create(properties) {
            return new UpdateProfileRequest(properties);
        };

        /**
         * Encodes the specified UpdateProfileRequest message. Does not implicitly {@link user.UpdateProfileRequest.verify|verify} messages.
         * @function encode
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {user.IUpdateProfileRequest} message UpdateProfileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProfileRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.bio != null && message.hasOwnProperty("bio"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bio);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.city);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.language);
            return writer;
        };

        /**
         * Encodes the specified UpdateProfileRequest message, length delimited. Does not implicitly {@link user.UpdateProfileRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {user.IUpdateProfileRequest} message UpdateProfileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProfileRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateProfileRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UpdateProfileRequest} UpdateProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProfileRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UpdateProfileRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.bio = reader.string();
                    break;
                case 3:
                    message.city = reader.int32();
                    break;
                case 4:
                    message.language = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateProfileRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UpdateProfileRequest} UpdateProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProfileRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateProfileRequest message.
         * @function verify
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateProfileRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.bio != null && message.hasOwnProperty("bio"))
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                switch (message.city) {
                default:
                    return "city: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.language != null && message.hasOwnProperty("language"))
                switch (message.language) {
                default:
                    return "language: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates an UpdateProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateProfileRequest} UpdateProfileRequest
         */
        UpdateProfileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateProfileRequest)
                return object;
            var message = new $root.user.UpdateProfileRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.bio != null)
                message.bio = String(object.bio);
            switch (object.city) {
            case "UNKNOWN":
            case 0:
                message.city = 0;
                break;
            case "NEWYOUR":
            case 1:
                message.city = 1;
                break;
            case "MADRID":
            case 2:
                message.city = 2;
                break;
            case "TOKYO":
            case 3:
                message.city = 3;
                break;
            }
            switch (object.language) {
            case "UNKNOWN":
            case 0:
                message.language = 0;
                break;
            case "ENGLISH":
            case 1:
                message.language = 1;
                break;
            case "SPANISH":
            case 2:
                message.language = 2;
                break;
            case "JAPANESE":
            case 3:
                message.language = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateProfileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateProfileRequest
         * @static
         * @param {user.UpdateProfileRequest} message UpdateProfileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateProfileRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.bio = "";
                object.city = options.enums === String ? "UNKNOWN" : 0;
                object.language = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.bio != null && message.hasOwnProperty("bio"))
                object.bio = message.bio;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = options.enums === String ? $root.common.city.City[message.city] : message.city;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = options.enums === String ? $root.common.lang.Language[message.language] : message.language;
            return object;
        };

        /**
         * Converts this UpdateProfileRequest to JSON.
         * @function toJSON
         * @memberof user.UpdateProfileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateProfileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateProfileRequest;
    })();

    user.UpdateProfileResponse = (function() {

        /**
         * Properties of an UpdateProfileResponse.
         * @memberof user
         * @interface IUpdateProfileResponse
         * @property {common.StatusCode|null} [code] UpdateProfileResponse code
         * @property {string|null} [message] UpdateProfileResponse message
         */

        /**
         * Constructs a new UpdateProfileResponse.
         * @memberof user
         * @classdesc Represents an UpdateProfileResponse.
         * @implements IUpdateProfileResponse
         * @constructor
         * @param {user.IUpdateProfileResponse=} [properties] Properties to set
         */
        function UpdateProfileResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateProfileResponse code.
         * @member {common.StatusCode} code
         * @memberof user.UpdateProfileResponse
         * @instance
         */
        UpdateProfileResponse.prototype.code = 0;

        /**
         * UpdateProfileResponse message.
         * @member {string} message
         * @memberof user.UpdateProfileResponse
         * @instance
         */
        UpdateProfileResponse.prototype.message = "";

        /**
         * Creates a new UpdateProfileResponse instance using the specified properties.
         * @function create
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {user.IUpdateProfileResponse=} [properties] Properties to set
         * @returns {user.UpdateProfileResponse} UpdateProfileResponse instance
         */
        UpdateProfileResponse.create = function create(properties) {
            return new UpdateProfileResponse(properties);
        };

        /**
         * Encodes the specified UpdateProfileResponse message. Does not implicitly {@link user.UpdateProfileResponse.verify|verify} messages.
         * @function encode
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {user.IUpdateProfileResponse} message UpdateProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProfileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified UpdateProfileResponse message, length delimited. Does not implicitly {@link user.UpdateProfileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {user.IUpdateProfileResponse} message UpdateProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateProfileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UpdateProfileResponse} UpdateProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProfileResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UpdateProfileResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateProfileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UpdateProfileResponse} UpdateProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProfileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateProfileResponse message.
         * @function verify
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateProfileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates an UpdateProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateProfileResponse} UpdateProfileResponse
         */
        UpdateProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateProfileResponse)
                return object;
            var message = new $root.user.UpdateProfileResponse();
            switch (object.code) {
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "ERROR":
            case 1:
                message.code = 1;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from an UpdateProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateProfileResponse
         * @static
         * @param {user.UpdateProfileResponse} message UpdateProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.common.StatusCode[message.code] : message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this UpdateProfileResponse to JSON.
         * @function toJSON
         * @memberof user.UpdateProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateProfileResponse;
    })();

    return user;
})();

module.exports = $root;
