import addresses from "../Resources/lib/constants/contracts";
import tokens from "../Resources/lib/constants/tokens";
import { Address } from "../Resources/lib/constants/types";

export const getAddress = (address: Address): string => {
  const mainNetChainId = 56;
  const chainId = mainNetChainId;
  return address[chainId] ? address[chainId] : address[mainNetChainId];
};

export const getRCUBEAddress = () => {
  return getAddress(tokens.rcube.address);
};
export const getQBertAddress = () => {
  return getAddress(tokens.qbert.address);
};
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef);
};
export const getMulticallAddress = () => {
  return getAddress(addresses.mulltiCall);
};
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address);
};
