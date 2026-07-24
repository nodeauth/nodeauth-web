export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 记录访问日志
    console.log(`[Request] ${request.method} ${url.pathname}`);
    
    // 处理旧版 /en/ 路径的 301 永久重定向
    if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
      let newPath = url.pathname.replace(/^\/en(\/|$)/, '/');
      if (!newPath.startsWith('/')) {
        newPath = '/' + newPath;
      }
      const redirectUrl = new URL(newPath + url.search, url.origin);
      console.log(`[301 Redirect] ${url.pathname} -> ${redirectUrl.pathname}`);
      return Response.redirect(redirectUrl.toString(), 301);
    }

    // 交给静态资产处理
    const response = await env.ASSETS.fetch(request);
    
    // 记录响应状态
    console.log(`[Response] ${response.status} ${url.pathname}`);
    
    // 如果访问的是 xml 文件（如 sitemap.xml, sitemap-0.xml 等），确保响应头包含正确的 XML Content-Type
    if (url.pathname.endsWith('.xml')) {
      const headers = new Headers(response.headers);
      headers.set('Content-Type', 'application/xml; charset=utf-8');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};
