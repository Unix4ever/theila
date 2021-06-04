/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  Source,
  Context,
  Cluster,
  sourceFromJSON,
  sourceToJSON,
} from "../common/theila";
import { GetRequest, ListRequest } from "../talos/resource/resource";

export const protobufPackage = "resource";

export interface GetFromClusterRequest {
  resource: GetRequest | undefined;
  /** Context to use to get the resource. */
  context: Context | undefined;
  /** Data source to use to get the resource. */
  source: Source;
}

export interface GetFromClusterResponse {
  /** Body should contain JSON encoded spec. */
  body: string;
}

export interface ListFromClusterRequest {
  resource: ListRequest | undefined;
  /** Context to use to get the resource. */
  context: Context | undefined;
  /** Data source to use to get the resource. */
  source: Source;
  /** Selectors allow filtering list results by labels. */
  selectors: string[];
}

export interface ListFromClusterResponse {
  /** Messages should contain JSON encoded list spec. */
  messages: string[];
}

export interface ConfigRequest {
  /** Context to get the configuration from. */
  context: Context | undefined;
  /** Cluster to get the configuration for. */
  cluster: Cluster | undefined;
  /** Data source to use to get the resource. */
  source: Source;
}

export interface ConfigResponse {
  /** Data raw config data. */
  data: string;
}

const baseGetFromClusterRequest: object = { source: 0 };

export const GetFromClusterRequest = {
  encode(
    message: GetFromClusterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.resource !== undefined) {
      GetRequest.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetFromClusterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetFromClusterRequest } as GetFromClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = GetRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.context = Context.decode(reader, reader.uint32());
          break;
        case 3:
          message.source = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFromClusterRequest {
    const message = { ...baseGetFromClusterRequest } as GetFromClusterRequest;
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = GetRequest.fromJSON(object.resource);
    } else {
      message.resource = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromJSON(object.context);
    } else {
      message.context = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = sourceFromJSON(object.source);
    } else {
      message.source = 0;
    }
    return message;
  },

  toJSON(message: GetFromClusterRequest): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? GetRequest.toJSON(message.resource)
        : undefined);
    message.context !== undefined &&
      (obj.context = message.context
        ? Context.toJSON(message.context)
        : undefined);
    message.source !== undefined && (obj.source = sourceToJSON(message.source));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetFromClusterRequest>
  ): GetFromClusterRequest {
    const message = { ...baseGetFromClusterRequest } as GetFromClusterRequest;
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = GetRequest.fromPartial(object.resource);
    } else {
      message.resource = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromPartial(object.context);
    } else {
      message.context = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    return message;
  },
};

const baseGetFromClusterResponse: object = { body: "" };

export const GetFromClusterResponse = {
  encode(
    message: GetFromClusterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body !== "") {
      writer.uint32(10).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetFromClusterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetFromClusterResponse } as GetFromClusterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFromClusterResponse {
    const message = { ...baseGetFromClusterResponse } as GetFromClusterResponse;
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: GetFromClusterResponse): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetFromClusterResponse>
  ): GetFromClusterResponse {
    const message = { ...baseGetFromClusterResponse } as GetFromClusterResponse;
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseListFromClusterRequest: object = { source: 0, selectors: "" };

export const ListFromClusterRequest = {
  encode(
    message: ListFromClusterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.resource !== undefined) {
      ListRequest.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    for (const v of message.selectors) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListFromClusterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFromClusterRequest } as ListFromClusterRequest;
    message.selectors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = ListRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.context = Context.decode(reader, reader.uint32());
          break;
        case 3:
          message.source = reader.int32() as any;
          break;
        case 4:
          message.selectors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFromClusterRequest {
    const message = { ...baseListFromClusterRequest } as ListFromClusterRequest;
    message.selectors = [];
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = ListRequest.fromJSON(object.resource);
    } else {
      message.resource = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromJSON(object.context);
    } else {
      message.context = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = sourceFromJSON(object.source);
    } else {
      message.source = 0;
    }
    if (object.selectors !== undefined && object.selectors !== null) {
      for (const e of object.selectors) {
        message.selectors.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ListFromClusterRequest): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? ListRequest.toJSON(message.resource)
        : undefined);
    message.context !== undefined &&
      (obj.context = message.context
        ? Context.toJSON(message.context)
        : undefined);
    message.source !== undefined && (obj.source = sourceToJSON(message.source));
    if (message.selectors) {
      obj.selectors = message.selectors.map((e) => e);
    } else {
      obj.selectors = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListFromClusterRequest>
  ): ListFromClusterRequest {
    const message = { ...baseListFromClusterRequest } as ListFromClusterRequest;
    message.selectors = [];
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = ListRequest.fromPartial(object.resource);
    } else {
      message.resource = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromPartial(object.context);
    } else {
      message.context = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    if (object.selectors !== undefined && object.selectors !== null) {
      for (const e of object.selectors) {
        message.selectors.push(e);
      }
    }
    return message;
  },
};

const baseListFromClusterResponse: object = { messages: "" };

export const ListFromClusterResponse = {
  encode(
    message: ListFromClusterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.messages) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListFromClusterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFromClusterResponse,
    } as ListFromClusterResponse;
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFromClusterResponse {
    const message = {
      ...baseListFromClusterResponse,
    } as ListFromClusterResponse;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ListFromClusterResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListFromClusterResponse>
  ): ListFromClusterResponse {
    const message = {
      ...baseListFromClusterResponse,
    } as ListFromClusterResponse;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(e);
      }
    }
    return message;
  },
};

const baseConfigRequest: object = { source: 0 };

export const ConfigRequest = {
  encode(message: ConfigRequest, writer: Writer = Writer.create()): Writer {
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(10).fork()).ldelim();
    }
    if (message.cluster !== undefined) {
      Cluster.encode(message.cluster, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigRequest } as ConfigRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context = Context.decode(reader, reader.uint32());
          break;
        case 2:
          message.cluster = Cluster.decode(reader, reader.uint32());
          break;
        case 3:
          message.source = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigRequest {
    const message = { ...baseConfigRequest } as ConfigRequest;
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromJSON(object.context);
    } else {
      message.context = undefined;
    }
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = Cluster.fromJSON(object.cluster);
    } else {
      message.cluster = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = sourceFromJSON(object.source);
    } else {
      message.source = 0;
    }
    return message;
  },

  toJSON(message: ConfigRequest): unknown {
    const obj: any = {};
    message.context !== undefined &&
      (obj.context = message.context
        ? Context.toJSON(message.context)
        : undefined);
    message.cluster !== undefined &&
      (obj.cluster = message.cluster
        ? Cluster.toJSON(message.cluster)
        : undefined);
    message.source !== undefined && (obj.source = sourceToJSON(message.source));
    return obj;
  },

  fromPartial(object: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = { ...baseConfigRequest } as ConfigRequest;
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromPartial(object.context);
    } else {
      message.context = undefined;
    }
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = Cluster.fromPartial(object.cluster);
    } else {
      message.cluster = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    return message;
  },
};

const baseConfigResponse: object = { data: "" };

export const ConfigResponse = {
  encode(message: ConfigResponse, writer: Writer = Writer.create()): Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigResponse } as ConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigResponse {
    const message = { ...baseConfigResponse } as ConfigResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = { ...baseConfigResponse } as ConfigResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

export interface ClusterResourceService {
  Get(request: GetFromClusterRequest): Promise<GetFromClusterResponse>;
  List(request: ListFromClusterRequest): Promise<ListFromClusterResponse>;
  GetConfig(request: ConfigRequest): Promise<ConfigResponse>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
