// import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
export function login(call: any, callback: any) {
    console.log("call====>", call);
    console.log("call.request=======>", call.request);
    const requestLogin = call.request
    console.log("request====>", requestLogin)
    // 第一个参数是错误信息，第二个参数是响应相关信息
    callback(null, {
        message: "登录啦"
    });
}

export function Echo(call: any, callback: any) {
// export function Echo(call: ServerUnaryCall<EchoRequest>, callback: sendUnaryData<EchoRequest>) {
    const request = call.request;
    console.log("request====>", request)
    // 第一个参数是错误信息，第二个参数是响应相关信息
    callback(null, {
        message: "zhang"
    });
}
