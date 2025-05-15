
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/talentshow/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23578, hash: 'f5e3a7b4cb56d05e60b0d5e0bc79f934644e64813f1f0f2373ef8c2936e43df1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '7a9b025b47593f00523411baea648a89dd9bc758746a916a09523aac9eddabf6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
