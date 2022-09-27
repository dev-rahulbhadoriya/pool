import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  HOME_DISCONNECT_WALLET_BEGIN,
  HOME_DISCONNECT_WALLET_SUCCESS,
  HOME_DISCONNECT_WALLET_FAILURE,
} from "./constants";

export function chanegeNetwork(web3Modal, networkId) {
  return (dispatch) => {
    dispatch({ type: HOME_DISCONNECT_WALLET_BEGIN });

    const promise = new Promise(async (resolve, reject) => {
      try {
        await web3Modal.clearCachedProvider();
        dispatch({ type: HOME_DISCONNECT_WALLET_SUCCESS });
        resolve();
      } catch (error) {
        dispatch({ type: HOME_DISCONNECT_WALLET_FAILURE });
        window.localStorage.removeItem("walletconnect");
        reject(error);
      }
    });
    return promise;
  };
}

export function useChanegeNetwork() {
  const dispatch = useDispatch();
  const disconnectWalletPending = useSelector(
    (state) => state.main.disconnectWalletPending,
    shallowEqual
  );
  const boundAction = useCallback(
    (web3, web3Modal) => dispatch(chanegeNetwork(web3, web3Modal)),
    [dispatch]
  );

  return { disconnectWalletPending, chanegeNetwork: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_DISCONNECT_WALLET_BEGIN:
      return {
        ...state,
        disconnectWalletPending: true,
      };

    case HOME_DISCONNECT_WALLET_SUCCESS:
      return {
        ...state,
        address: "",
        web3: null,
        connected: false,
        disconnectWalletPending: false,
      };
    case HOME_DISCONNECT_WALLET_FAILURE:
      return {
        ...state,
        web3: null,
        address: "",
        disconnectWalletPending: false,
      };

    default:
      return state;
  }
}
export const actnType = {
  networkChange : "netwrkID"
}


export function networkChangeId(payload) {
  return {
    type : actnType.networkChange,  payload
  }
}

