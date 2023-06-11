import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { initialProducts } from '../data/initialProducts'
import { v4 as productId } from 'uuid'
import { productsReducer } from '../reducer/products'
import { ProductContextProps } from '../interfaces/interfaces'
const INITIAL_STATE = {
    products: initialProducts,
}

export const ProductsContext = createContext<ProductContextProps>({
    products: [],
    addProduct: (product: any) => { },
    deleteProduct: (id: number) => { },
    updateProduct: (id: number, product: any) => { },
})

const localProducts = localStorage.getItem('products')
const initialState = localProducts ? JSON.parse(localProducts) : INITIAL_STATE

export const ProductsProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(productsReducer, initialState)
    const addProduct = (product: any) => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {
                id: productId(),
                ...product,
            },
        })
    }
    const deleteProduct = (id: number) => {
        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id,
        })
    }
    const updateProduct = (id: number, product: any) => {
        dispatch({
            type: 'UPDATE_PRODUCT',
            payload: {
                id,
                ...product,
            },
        })
    }
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(state))
    }
        , [state])
    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                addProduct,
                deleteProduct,
                updateProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error('useProductsContext debe estar dentro del proveedor ProductsProvider')
    }
    return context
}


