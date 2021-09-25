import { reducer } from './reducers';
import { createStore } from 'redux';
import { useProductReducer } from './reducers';

// redux global state

const store = createStore(reducer)

const { Provider } = store;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
    });
    // use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};



export {StoreProvider}