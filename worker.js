export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();

    // www.nodeauth.io 永久 301 重定向到裸域 nodeauth.io
    if (hostname === 'www.nodeauth.io') {
      return Response.redirect(`https://nodeauth.io${url.pathname}${url.search}`, 301);
    }

    // 处理旧版 /en/ 路径的 301 永久重定向
    if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
      const newPath = url.pathname.replace(/^\/en(\/|$)/, '/') || '/';
      return Response.redirect(new URL(newPath + url.search, url.origin).toString(), 301);
    }

    // 将历史法务与公司路径统一 301 指回母站 nextmatrix.app
    if (/^\/(?:cn\/)?(about|brand|contact|privacy|terms|refund)(?:\/|$)/.test(url.pathname)) {
      const normalized = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
      const target = normalized.replace(/^\/cn\/(privacy|terms|refund)\/$/, '/$1/');
      return Response.redirect(`https://nextmatrix.app${target}${url.search}`, 301);
    }

    // 将历史碎片路径 /sitemap-index.xml 与 /sitemap-0.xml 301 永久重定向至规范的 /sitemap.xml
    if (url.pathname === '/sitemap-index.xml' || url.pathname === '/sitemap-0.xml') {
      return Response.redirect(new URL('/sitemap.xml' + url.search, url.origin).toString(), 301);
    }

    // 交给静态资产处理
    const response = await env.ASSETS.fetch(request);

    // 确保 XML 文件响应头包含正确的 XML Content-Type
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
