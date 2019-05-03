import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import db from '@/components/firebaseInit'

export const store = new Vuex.Store({

    state: {
        products: [],
        cart: []
    },

    getters: {
        featuredProducts: (state) => {
            return state.products.filter(product => product.featured)
        },
        cartTotal: (state) => {

            return {
                totalPrice: state.cart.map(product => product.amount *  product.price).reduce((a,b) => a + b, 0),
                totalAmount: state.cart.map(product => product.amount).reduce((a, b) => a + b, 0)
            }
        }
    },

    mutations: {
        getProducts: (state, payload) => {
            state.products = payload
        },
        buyItem: (state, payload) => {
            
            if(state.cart.some(product => product.id == payload.id)){
                state.cart.forEach(product => {
                    if(product.id == payload.id){
                        product.amount += 1
                    }
                })  
            }else{
                state.cart.push({
                    amount: 1,
                    ...payload
                })
            }
        },
        addProduct: (state, payload) => {
            state.cart.forEach(product => {
                if(product.id == payload.id){
                    product.amount += 1
                }
            })
        },
        removeProduct: (state, payload) => {
            state.cart.forEach((product, index) => {
                if(product.id == payload.id){
                    if(product.amount > 1){
                        product.amount -= 1
                    }else{
                        state.cart.splice(index, 1)
                    }
                }
            })
        }
    },

    actions: {
        getProducts: (context) => {
            const payload = []
            db.collection('furnitures').get()
                .then(querySnapshot => {
                    querySnapshot.forEach((doc) =>{
                        payload.push({
                            'id': doc.id,
                            'img': doc.data().img,
                            'name': doc.data().name,
                            'type': doc.data().type,
                            'price': doc.data().price,
                            'quantity': doc.data().quantity,
                            'rating': doc.data().rating,
                            'featured': doc.data().featured  
                        })
                    })
                })
                
            context.commit('getProducts', payload)
        },
        buyItem: (context, payload) => {
            context.commit('buyItem', payload)
        },
        addProduct: (context, payload) =>{
            context.commit('addProduct', payload)
        },
        removeProduct: (context, payload) => {
            context.commit('removeProduct', payload)
        }
    }

})