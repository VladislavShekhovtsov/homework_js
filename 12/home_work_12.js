{   //  redux
    function createStore(reducer) {
        let state = reducer(undefined, {}); 
        let subscribers = [];

        function dispatch(action) {
            state = reducer(state, action); 
            subscribers.forEach((subscriber) => subscriber());
        }

        function getState() {
            return state;
        }

        function subscribe(subscriber) {
            subscribers.push(subscriber);
        }

        return {
            dispatch,
            getState,
            subscribe,
        };
    }

    function kioskReducer(state = { products: {}, cash: 0 }, action) {
        switch (action.type) {
            case "BUY_PRODUCT":
                const { product, quantity, funds } = action.payload;
                const productPrice = state.products[product].price;
                const totalPrice = productPrice * quantity;

                if (totalPrice <= funds && state.products[product].quantity >= quantity) {
                    return {
                        ...state,
                        products: {
                            ...state.products,
                            [product]: {
                                ...state.products[product],
                                quantity: state.products[product].quantity - quantity,
                            },
                        },
                        cash: state.cash + totalPrice,
                    };
                } else {
                    return state;
                }

            case "SET_PRODUCTS":
                return {
                    ...state,
                    products: action.payload,
                };

            case "SET_CASH":
                return {
                    ...state,
                    cash: action.payload,
                };

            default:
                return state;
        }
    }

    function buyProduct(product, quantity, funds) {
        return {
            type: "BUY_PRODUCT",
            payload: { product, quantity, funds },
        };
    }

    function setProducts(products) {
        return {
            type: "SET_PRODUCTS",
            payload: products,
        };
    }

    function setCash(cash) {
        return {
            type: "SET_CASH",
            payload: cash,
        };
    }

    const store = createStore(kioskReducer);

    function updateUI() {
        const state = store.getState();
        const productsContainer = document.getElementById("products-container");
        const cashField = document.getElementById("cash-field");

        productsContainer.innerHTML = "";
        Object.entries(state.products).forEach(([product, { quantity, price }]) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${product}: ${quantity}, Цена: ${price}`;

            productsContainer.appendChild(listItem);
        });

        cashField.value = state.cash;
        document.title = `Касса: ${state.cash}`;
    }
    store.subscribe(updateUI);

    function handleBuy() {
        const productSelect = document.getElementById("product-select");
        const quantityInput = document.getElementById("quantity-input");
        const fundsInput = document.getElementById("funds-input");

        const selectedProduct = productSelect.value;
        const quantity = Number(quantityInput.value);
        const funds = Number(fundsInput.value);

        store.dispatch(buyProduct(selectedProduct, quantity, funds));
    }

    const buyButton = document.getElementById("buy-button");
    buyButton.addEventListener("click", handleBuy);

    const initialProducts = {
        пиво: { quantity: 100, price: 50 },
        чипсы: { quantity: 200, price: 30 },
        шоколад: { quantity: 150, price: 70 },
    };
    const initialCash = 0;
    store.dispatch(setProducts(initialProducts));
    store.dispatch(setCash(initialCash));
}