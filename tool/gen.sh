#!/usr/bin/env bash

SRC_DIR=proto/
DST_DIR=codegen/

cd $(dirname $0)/../
mkdir -p ${DST_DIR}

# protobuf.js
node_modules/.bin/pbjs \
--target static-module \
--wrap commonjs \
--path ${SRC_DIR} \
--out ${DST_DIR}/rpc.js \
${SRC_DIR}/*.proto \
${SRC_DIR}/**/*.proto \
${SRC_DIR}/**/**/*.proto
