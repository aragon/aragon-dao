export const connectors = [
  {
    id: 'injected',
    properties: {
      chainId: [1, 100], // add here to handle more injected chains
    },
  },
  {
    id: 'frame',
    properties: {
      chainId: [1, 100],
    },
  },
  {
    id: 'walletconnect',
    properties: {
      chainId: [1, 100], // add here to handle more injected chains
      rpc: {
        '100': 'https://rpc.gnosis.gateway.fm/',
      },
    },
  },
].filter(p => p)

// the final data that we pass to use-wallet package.
export const useWalletConnectors = connectors.reduce((current, connector) => {
  current[connector.id] = connector.properties || {}
  return current
}, {})
