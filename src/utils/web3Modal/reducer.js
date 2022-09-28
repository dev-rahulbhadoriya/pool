import { reducer as connectWalletReducer } from "./connectWallet";
import { reducer as disconnectWalletReducer } from "./disconnectWallet";
import {actnType} from "./networkChange"

const reducers = [connectWalletReducer, disconnectWalletReducer];

const initialState = {
  address: "",
  web3: null,
  connected: false,
  networkId: 56,
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case  actnType.networkChange:
      console.log("@@@",action.payload);
      return {
        ...state,
        ...{networkId : action.payload}
      }
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}

// export default function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case actnType.NTWRK:
//       return {
//         ...state,
//         ...{ networkId: action.payload },
//       };
//     // Handle cross-topic actions here
//     default:
//       newState = state;
//       break;
//   }
//   /* istanbul ignore next */
//   return reducers.reduce((s, r) => r(s, action), newState);
// }
