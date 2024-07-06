'use client'
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [itemAmount, setItemAmount] = useState(0)

    useEffect(() => {
        const amount = cart.reduce((a, c) => {
            return a + c.amount
        }, 0)
        setItemAmount(amount)
    })

    useEffect(() => {
        const price = cart.reduce((a, c) => {
            return a + Number(c.price) * c.amount
        }, 0)
        setCartTotal(price)
    }, [cart])

    const addToCart = (
        id, image, name, price, additionalTopping, size, crust
    ) => {
        additionalTopping.sort((a, b) => a.name.localeCompare(b.name))

        const newItem = {
            id, image, name, price, additionalTopping, size, crust, amount: 1
        }

        const cartItemIndex = cart.findIndex((item) =>
            item.id === id &&
            item.price === price &&
            item.size === size &&
            JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) &&
            item.crust === crust
        )

        if (cartItemIndex === -1) {
            setCart([...cart, newItem])

        } else {
            const newCart = [...cart]
            newCart[cartItemIndex].amount += 1
            setCart(newCart)
        }
        setIsOpen(true)
    }

    const removeItem = (id, price, crust) => {
        // const itemIndex = cart.findIndex((item) => item.id === id && item.price === price && item.crust === crust)
        const itemIndex = cart.filter((item) => item.id !== id || item.price !== price || item.crust !== crust)
        setCart(itemIndex)

        // if (itemIndex !== -1) {
        //     const newCart = [...cart]
        //     newCart.splice(itemIndex, 1)
        //     setCart(newCart)
        // }

    }

    const increaseAmount = (id, price) => {
        const getItem = cart.findIndex(item => item.id === id && item.price === price)

        if (getItem !== -1) {
            const newCart = [...cart]
            newCart[getItem].amount += 1
            setCart(newCart)
        }

    }

    const decreaseAmount = (id, price) => {
        const getItem = cart.findIndex(item => item.id === id && item.price === price)

        if (getItem !== -1) {

            const newCart = [...cart]
            if (newCart[getItem].amount > 1) {
                newCart[getItem].amount -= 1
                setCart(newCart)

            }

        }

    }
    return (
        <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart, setCart, removeItem, increaseAmount, decreaseAmount, itemAmount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider 