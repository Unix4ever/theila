// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.15.7
// source: common/theila.proto

package common

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// Data source.
type Runtime int32

const (
	// Kubernetes control plane.
	Runtime_Kubernetes Runtime = 0
	// Talos apid.
	Runtime_Talos Runtime = 1
	// Internal runtime.
	Runtime_Internal Runtime = 2
)

// Enum value maps for Runtime.
var (
	Runtime_name = map[int32]string{
		0: "Kubernetes",
		1: "Talos",
		2: "Internal",
	}
	Runtime_value = map[string]int32{
		"Kubernetes": 0,
		"Talos":      1,
		"Internal":   2,
	}
)

func (x Runtime) Enum() *Runtime {
	p := new(Runtime)
	*p = x
	return p
}

func (x Runtime) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Runtime) Descriptor() protoreflect.EnumDescriptor {
	return file_common_theila_proto_enumTypes[0].Descriptor()
}

func (Runtime) Type() protoreflect.EnumType {
	return &file_common_theila_proto_enumTypes[0]
}

func (x Runtime) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Runtime.Descriptor instead.
func (Runtime) EnumDescriptor() ([]byte, []int) {
	return file_common_theila_proto_rawDescGZIP(), []int{0}
}

// Cluster contains settings for fetching the config from cluster resource in Kubernetes.
type Cluster struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the cluster.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Namespace of the cluster.
	Namespace string `protobuf:"bytes,2,opt,name=namespace,proto3" json:"namespace,omitempty"`
	// UID of the cluster.
	Uid string `protobuf:"bytes,3,opt,name=uid,proto3" json:"uid,omitempty"`
}

func (x *Cluster) Reset() {
	*x = Cluster{}
	if protoimpl.UnsafeEnabled {
		mi := &file_common_theila_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Cluster) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Cluster) ProtoMessage() {}

func (x *Cluster) ProtoReflect() protoreflect.Message {
	mi := &file_common_theila_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Cluster.ProtoReflect.Descriptor instead.
func (*Cluster) Descriptor() ([]byte, []int) {
	return file_common_theila_proto_rawDescGZIP(), []int{0}
}

func (x *Cluster) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Cluster) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *Cluster) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

// Context represents Kubernetes or Talos config source.
type Context struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name fetches the config from the top level Kubeconfig or Talosconfig.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Cluster fetches the context from the cluster resource in Kubernetes.
	Cluster *Cluster `protobuf:"bytes,2,opt,name=cluster,proto3" json:"cluster,omitempty"`
	// Nodes to fetch the data from using Talos client.
	Nodes []string `protobuf:"bytes,3,rep,name=nodes,proto3" json:"nodes,omitempty"`
}

func (x *Context) Reset() {
	*x = Context{}
	if protoimpl.UnsafeEnabled {
		mi := &file_common_theila_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Context) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Context) ProtoMessage() {}

func (x *Context) ProtoReflect() protoreflect.Message {
	mi := &file_common_theila_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Context.ProtoReflect.Descriptor instead.
func (*Context) Descriptor() ([]byte, []int) {
	return file_common_theila_proto_rawDescGZIP(), []int{1}
}

func (x *Context) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Context) GetCluster() *Cluster {
	if x != nil {
		return x.Cluster
	}
	return nil
}

func (x *Context) GetNodes() []string {
	if x != nil {
		return x.Nodes
	}
	return nil
}

var File_common_theila_proto protoreflect.FileDescriptor

var file_common_theila_proto_rawDesc = []byte{
	0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x74, 0x68, 0x65, 0x69, 0x6c, 0x61, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x22, 0x4d, 0x0a,
	0x07, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09,
	0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x22, 0x5e, 0x0a, 0x07,
	0x43, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x29, 0x0a, 0x07, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x52, 0x07, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x64, 0x65, 0x73, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x6e, 0x6f, 0x64, 0x65, 0x73, 0x2a, 0x32, 0x0a, 0x07,
	0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x0a, 0x4b, 0x75, 0x62, 0x65, 0x72,
	0x6e, 0x65, 0x74, 0x65, 0x73, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x54, 0x61, 0x6c, 0x6f, 0x73,
	0x10, 0x01, 0x12, 0x0c, 0x0a, 0x08, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x10, 0x02,
	0x42, 0x2c, 0x5a, 0x2a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74,
	0x61, 0x6c, 0x6f, 0x73, 0x2d, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x73, 0x2f, 0x74, 0x68, 0x65,
	0x69, 0x6c, 0x61, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_common_theila_proto_rawDescOnce sync.Once
	file_common_theila_proto_rawDescData = file_common_theila_proto_rawDesc
)

func file_common_theila_proto_rawDescGZIP() []byte {
	file_common_theila_proto_rawDescOnce.Do(func() {
		file_common_theila_proto_rawDescData = protoimpl.X.CompressGZIP(file_common_theila_proto_rawDescData)
	})
	return file_common_theila_proto_rawDescData
}

var file_common_theila_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_common_theila_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_common_theila_proto_goTypes = []interface{}{
	(Runtime)(0),    // 0: common.Runtime
	(*Cluster)(nil), // 1: common.Cluster
	(*Context)(nil), // 2: common.Context
}
var file_common_theila_proto_depIdxs = []int32{
	1, // 0: common.Context.cluster:type_name -> common.Cluster
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_common_theila_proto_init() }
func file_common_theila_proto_init() {
	if File_common_theila_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_common_theila_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Cluster); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_common_theila_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Context); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_common_theila_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_common_theila_proto_goTypes,
		DependencyIndexes: file_common_theila_proto_depIdxs,
		EnumInfos:         file_common_theila_proto_enumTypes,
		MessageInfos:      file_common_theila_proto_msgTypes,
	}.Build()
	File_common_theila_proto = out.File
	file_common_theila_proto_rawDesc = nil
	file_common_theila_proto_goTypes = nil
	file_common_theila_proto_depIdxs = nil
}
