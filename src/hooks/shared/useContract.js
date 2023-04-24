import { useMemo } from 'react'
import { Contract as EthersContract } from 'ethers'
import { useWallet } from '../../providers/Wallet'
import { getProvider } from '@/utils/web3-utils'

export function useContractReadOnly(address, abi, chainId) {
  return useMemo(() => {
    if (!address) {
      return null
    }
    return getContractWithProvider(address, abi, getProvider(chainId))
  }, [abi, address, chainId])
}

export function useContract(address, abi, signer) {
  const { account, ethers } = useWallet()

  return useMemo(() => {
    // Apparently .getSigner() returns a new object every time, so we use the
    // connected account as memo dependency.

    if (!address || !ethers || !account) {
      return null
    }

    return getContractWithProvider(
      address,
      abi,
      signer ? ethers.getSigner() : ethers
    )
  }, [abi, account, address, ethers, signer])
}

export function getContractWithProvider(
  address,
  abi,
  provider = getProvider()
) {
  return new EthersContract(address, abi, provider)
}

export function getContract(address, abi, chainId) {
  const provider = getProvider(chainId)
  return new EthersContract(address, abi, provider)
}
