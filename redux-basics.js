const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    count: 0
};
//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            count: state.count+ action.value
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscription', store.getState());
});

store.

//Dispatch action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});


console.log(store.getState());
