export const imports = {
  'README.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "readme" */ 'README.mdx'
    ),
  'articles-tutorials-blog.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "articles-tutorials-blog" */ 'articles-tutorials-blog.mdx'
    ),
  'node-js-community.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "node-js-community" */ 'node-js-community.mdx'
    ),
}
