export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 记录访问日志
    console.log(`[Request] ${request.method} ${url.pathname}`);
    
    // 交给静态资产处理
    const response = await env.ASSETS.fetch(request);
    
    // 记录响应状态
    console.log(`[Response] ${response.status} ${url.pathname}`);
    
    return response;
  },
};
