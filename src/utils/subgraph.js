import { env } from '@/environment'

export function getSubgraphUrl(app) {
  switch (app) {
    case 'org':
      return `https://gateway-arbitrum.network.thegraph.com/api/${env(
        'SUBGRAPH_API_KEY'
      )}/subgraphs/id/3dg4svN8zTYdgskuV6XvSXn4xZYHPEZcU9EjpnvGvQRo`
    case 'blossom-tao-voting':
      return `https://gateway.thegraph.com/api/${env(
        'SUBGRAPH_API_KEY'
      )}/subgraphs/id/DwDfEw2jteVrAPQBfUWVoeYY1yQSwRTtaUZBdFCSBCP7`
    case 'an-delay':
        case 'delay':
      return `https://gateway.thegraph.com/api/${env(
        'SUBGRAPH_API_KEY'
      )}/subgraphs/id/24cxr2WP5YZAyRTVKfucw53iz5fJQo9REYGXXJQscTQa`
        case 'finance':
      return `https://gateway.thegraph.com/api/${env(
        'SUBGRAPH_API_KEY'
      )}/subgraphs/id/2FimrYNeZ58czJkUqpBpEWPwYqBs1Duv29hXPyUmAre4`
        case 'blossom-token-wrapper':
      return `https://gateway.thegraph.com/api/${env(
        'SUBGRAPH_API_KEY'
      )}/subgraphs/id/4pwSXNwBrqGT74hzoJVMiJDfanpsazWdPoy2PR9jy8jx`
  }
}
