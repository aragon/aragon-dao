# Aragon DAO [<img height="100" align="right" alt="aragon-dao-logo" src="https://user-images.githubusercontent.com/33203511/217436477-b2dae151-5e47-454c-885f-9158793e6790.png">](https://github.com/aragon/aragon-dao)

The web app for the Aragon DAO.

<br/>


## How to run locally

1. Git clone this repo.

```sh
git clone https://github.com/aragon/aragon-dao.git
```

2. Go to directory.
```sh
cd aragon-dao/
```
3. Install dependencies.

```sh
yarn
```

4. Set the environment variables.
5. Run the development server.

```sh
yarn start
```

## Environment variables

Create a `.env` file with environment variables. You can use the `.env.example` file as a reference.

Below you can find a list of all the required variables:

| Env variable              | Description                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `CHAIN_ID`                | The ID of the chain where the DAO is located on.                                        |
| `DAO_ID`                  | The Aragon ID (ENS name) or address of the DAO.                                         |
| `GUARDIANS_TOKEN_MANAGER` | The address of the Guardian Token Manager app.                                          |
| `STATIC_ETH_NODE` | Ethereum JSON-RPC endpoint                                          |


And here a list of optional variables:

| Env variable              | Description                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `ALCHEMY_API_KEY`         | The API key for Alchemy.com.                                                          |
| `INFURA_API_KEY`          | The API key for Infura.io.                                                              |
| `POCKET_API_KEY`          | The API key for Pokt.network.                                                           |
| `ANKR_API_KEY`            | The API key for Ankr.com.                                                               |
| `IPFS_RESOLVER`           | An URL similar to https://gateway.ipfs.io/ipfs/{cid}{path} with a custom IPFS gateway.  |
| `BUDGET_APP_ADDRESSES`    | A list of comma-separated addresses of DAO apps that should be labeled as "Budget".     |
| `GOVERNANCE_APP_ADDRESSES`| A list of comma-separated addresses of DAO apps that should be labeled as "Governance". |

The optional API keys env variables are useful for setting different providers for request balancing in production environments.
