
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/talentshow/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23578, hash: 'be31d2edd00f8bb78e382cf20555e40f3f775e33a4f9cfc88734d045ab8a59f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: 'b1aa53d4a459bef4655fda0458b534923850564a594cf6c7eea8be2cd40a117f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
