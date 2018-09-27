import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bb-wc',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
