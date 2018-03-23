import { AccountAction, ISignIn, IGetStatistic } from "../actionsCreator/index";
import  IStoreState  from "../types/iStoreState";
import { SIGN_IN, SIGN_OUT, GET_STATISTIC } from "../constants/accountActions";

function accountReducer(state: IStoreState = null,
action: AccountAction): IStoreState {
  switch (action.type) {
    case SIGN_IN:
    {
        return Object.assign({}, state, {
            userName: (<ISignIn> action).value,
            signIn: true
        });
    }
    case SIGN_OUT:
    {
        return Object.assign({}, state, {
            userName: "",
            signIn: false,
            uri: undefined
        });
    }
    case GET_STATISTIC:
    {
        return Object.assign({}, state, {uri: (<IGetStatistic> action).value});
    }
    default: return state;
  }
}
export default accountReducer;
