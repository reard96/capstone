import Business from "../../build/contracts/Business.json"
const contract = require("truffle-contract")
const agreementStorage = contract(Business)

//Initial State
const defaultContract = {}

//Action Types
const GET_CONTRACT = "GET_CONTRACT"

//Action Creators
const setContract = contract => ({ type: GET_CONTRACT, contract })

//Thunk Creators
export const fetchContract = web3 => {
  web3.currentProvider && agreementStorage.setProvider(web3.currentProvider)
  return dispatch =>
    agreementStorage
    .deployed()
    .then(contract => dispatch(setContract(contract)));
};

//Reducer
export default function(state = defaultContract, action) {
  switch (action.type) {
    case GET_CONTRACT:
      return action.contract;
    default:
      return state;
  }
}
