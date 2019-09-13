export const imports = {
  'README_test.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "readme-test" */ 'README_test.mdx'
    ),
}
