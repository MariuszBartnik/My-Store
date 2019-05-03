<template>
    <div class="products-list">
        <div class="categories">
                <button id="all" @click="selectItems" :class="{active: isActive == 'all'}">All</button>

                <button id="bedroom" @click="selectItems" :class="{active: isActive == 'bedroom'}">Bedroom</button>

                <button id="living-room" @click="selectItems" :class="{active: isActive == 'living-room'}">Living room</button>

                <button id="kitchen" @click="selectItems" :class="{active: isActive == 'kitchen'}">Kitchen</button>
        </div>

        <div class="products-wrapper">
            
            <transition-group tag="div">
            <div class="product"
                v-for="product in products"
                :key = "product.id"
                v-show="checkShowType(product.type)">
                

                <div class="front" 
                    :class="{'last-pieces': product.quantity < 20, 
                    'best-choice': product.rating >= 9.5}">
                        <img :src="product.img">
                </div>

                <div class="back">
                    <div class="back-content">
                        <h3>{{product.name | uppercase}}</h3>

                        <p><i class="fas fa-star"></i> {{product.rating}}</p>
                        <p><i class="fas fa-dollar-sign"></i> {{product.price}}</p>

                        <a class="buy btn-primary" @click="buyItem(product)">Add to Cart</a>
                    </div>
                </div>

            </div>
            </transition-group>

        </div>

    </div>
</template>

<script>
export default {
    name: "ProductsList",
    data(){
        return{ 
            showType: ['armchair', 'bed', 'chair', 'kitchen', 'sofa', 'table'],
            isActive: 'all',
        }
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    methods: {
        checkShowType(product){
            return this.showType.includes(product)            
        },
        selectItems(e){
            let type = e.target.id;
            this.isActive = type;

            switch(type){
                case 'all':
                    this.showType = ['armchair', 'bed', 'chair', 'kitchen', 'sofa', 'table']
                    break;
                case 'bedroom':
                    this.showType = ['armchair', 'bed']
                    break;
                case 'living-room':
                    this.showType = ['armchair', 'chair', 'sofa']
                    break;
                case 'kitchen':
                    this.showType = ['chair', 'kitchen', 'table']
                    break;
            }
        },
        buyItem(product){
            this.$store.dispatch('buyItem', product)
        }
    }
}
</script>

<style lang="scss" scoped>

    .products-list{
        background: #6b6e70;
        padding: 1rem;
    }

    .categories{
        text-align: center;
        margin-bottom: 1rem;

        button{
            cursor: pointer;
            margin: 0 0.5rem;
            width: 20%;            
            height: 3rem;
            font-size: 0.8rem;
            line-height: 0.8rem;
            padding: 1rem 0;
            background: #222629;
            color: #f4f4f4;
            border: none;
            border-radius: 0.5rem;
            box-shadow: inset 1px 2px 3px rgba(255, 255, 255, 0.2),
                        inset -2px -3px 5px rgba(0,0,0,0.2),
                        5px 8px 5px rgba(0,0,0,0.4);
            outline: none;

            &:hover{
                background: #61892f;
            }
        }

        .active{
            background: #61892f;
        }

    }

    .products-wrapper > div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .product{
        position: relative;
        width: 45vw;
        height: 45vw;
        margin: 0.5rem 0;

        &:hover > .front{
            transform: perspective(900px) rotateY(-180deg);
        }

        &:hover > .back{
            transform: perspective(900px) rotateY(0);
        }
    }

    .front{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: perspective(900px) rotateY(0);
        transition: transform 0.5s ease-out;


        img{
            width: 100%;
            height: 100%;

        }
    }

    .best-choice{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;

        &::before{
            content: "";
        }
    }

    .last-pieces{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;

        &::before{
            content: "";
        }
    }

    .back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        transform: perspective(900px) rotateY(180deg);
        backface-visibility: hidden;
        transition: transform 0.5s ease-out;
        text-align: center;
    }

    .back-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 70%;
        color: #f4f4f4;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem 0;


        h3{
            width: 100%;
            font-size: 0.9rem;
        }
        p{
            width: 50%;
            margin-top: 1rem;
            font-size: 0.9rem;
        }

        i{
            color: #daa520;
        }

        .btn-primary{
            cursor: pointer;
            margin: 1rem auto;
            width: 70%;
            height: 2rem;
            font-size: 0.9rem;
            line-height: 1rem;
            padding: 0.5rem;
            background: #61892f;
            color: #f4f4f4;
            border: none;
            border-radius: 0.5rem;
            box-shadow: inset 1px 2px 3px rgba(255, 255, 255, 0.2),
                        inset -2px -3px 5px rgba(0,0,0,0.2),
                        5px 8px 5px rgba(0,0,0,0.4);
            outline: none;


            &:hover{
                background: #86c232;
            }
        }
    }

    .v-enter-active, .v-leave-active{
        transition: opacity .5s;
    }
    .v-enter, .v-leave-to{
        opacity: 0;
    }

    @media(min-width: 768px){
        .products-list{
        background: #6b6e70;
        padding: 3rem 1rem;
        }

    .categories{

        button{
            margin: 0 1rem;
            font-size: 1rem;
            line-height: 1rem;
        }
    }

    .products-wrapper > div{
        grid-template-columns: repeat(3, 1fr);
    }

    .product{
        width: 30vw;
        height: 30vw;
        margin: 1rem 0;
    }

    .back-content{

        h3{
            font-size: 1.2rem;
            letter-spacing: 1px;
        }
        p{
            font-size: 1.2rem;
        }

        .btn-primary{
            font-size: 1.2rem;
        }
    }
    }

    @media(min-width: 992px){
        .products-list{
        padding: 3rem;
    }

    .categories{

        button{ 
            width: 15%;
        }

    }

    .products-wrapper > div{
        grid-template-columns: repeat(4, 1fr);
    }

    .product{
        width: 20vw;
        height: 20vw;
        margin: 1.5rem 0;
    }

    .back-content{
        h3{
            font-size: 1.1rem;
            letter-spacing: 1px;
        }
        p{
            margin: 1rem 0;
            font-size: 1rem;
        }

        .btn-primary{
            font-size: 1rem;
        }
    }
    }

</style>
