
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/talentshow/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23578, hash: '60cf5fef1c85ad649ebaa355ad5b4f2333d500c2e524ddce728a3d81303b3e73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '16049c94bd616e6e777e2ddfdde486947f25194f146d31b573d10c8c1e838383', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
