import * as grpc from '@grpc/grpc-js';
import * as path from "path";
// const protoLoader = require('@grpc/proto-loader')
import { loadSync } from "@grpc/proto-loader";
const PROTO_PATH = path.join(__dirname, './input/example.proto')
const packageDefinition = loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true })
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
function main() {
    // @ts-ignore
    const client = new protoDescriptor.pb.Hello('localhost:6666', grpc.credentials.createInsecure());
    client.Echo({ message: 'Hello' }, function(err: any, response: { message: any; }) {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log("response.message===>", response.message)
        }
    })

    // @ts-ignore
    // const clientTest = new protoDescriptor.pb.User('localhost:6666', grpc.credentials.createInsecure());
    // clientTest.login({ message: 'login' }, function(err: any, response: { message: any; }) {
    //     if (err) {
    //         console.error('Error: ', err)
    //     } else {
    //         console.log(response.message)
    //     }
    // })
}

main()