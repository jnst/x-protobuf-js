# x-protobuf-rpc

Sample code of Protocol Buffers service interface.

- [Defining Services - Protocol Buffers](https://developers.google.com/protocol-buffers/docs/proto#services)
- [Using services - dcodeIO/protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/#using-services)

## Setup

```bash
brew install yarn --without-node
```

```bash
yarn install
```

## Version

```bash
$ yarn --version
1.9.4
```

```bash
$ node --version
v10.10.0
```

## Generate protobuf code

```bash
tools/gen.sh
```

## Run

```bash
$ yarn start

GetProfile: {"name":"taro","bio":"He loves protocol buffers."}
✨  Done in 0.27s.
```
