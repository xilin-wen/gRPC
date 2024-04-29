import * as grpc from '@grpc/grpc-js';
import * as path from "path";

const protoLoader = require('@grpc/proto-loader')
const PROTO_PATH = path.join(__dirname, './input/example.proto')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true })
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

import {Echo} from './server'


// @ts-ignore
server.addService(protoDescriptor.pb.Hello.service, {Echo})
// @ts-ignore
// server.addService(protoDescriptor.pb.User.service, {login})

server.bindAsync('0.0.0.0:6666', grpc.ServerCredentials.createInsecure(), ()=>{
    console.log('grpc server started')
});