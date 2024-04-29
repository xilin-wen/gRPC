export function loginHandler(call: any, callback: any) {
// export function Echo(call: ServerUnaryCall<EchoRequest>, callback: sendUnaryData<EchoRequest>) {
    const request = call.request;
    console.log("request====>", request)
    // 第一个参数是错误信息，第二个参数是响应相关信息
    callback(null, {
        message: "登录咯"
    });
}