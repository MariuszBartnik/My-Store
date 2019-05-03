<template>
    <div class="showcase" :style="style">
            <div class="showcase-content">
                <slot></slot>
                <p>
                    Find furniture of Your dreams
                </p>
                <a href="#">
                    Contact us
                </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Showcase',
    props: [
        'imageSrc',
    ],
    computed: {
        style(){
            return `background: url('${this.imageSrc}') no-repeat center center fixed`
        }
    }
}
</script>

<style lang="scss" scoped>
    .showcase{
        width: 100%;
        height: 60vh;
        background-size: cover;
    }

    .showcase-content{
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 60%;
        background: rgba(0, 0, 0, 0.9);
        color: #f4f4f4;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;

        h2{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        p{
            text-align: center;
            font-size: 1rem;
            margin-bottom: 2rem;
        }

        a{
            display: block;
            background: #61892f;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: #f4f4f4;
            box-shadow: inset 1px 2px 3px rgba(255,255,255,0.3),
                        inset -1px -2px 3px rgba(0, 0, 0, 0.3);

            &:hover{
                background: #86c232;
            }
        }
    }

    @media(min-width:768px){
        .showcase{
            height: 100vh;
        }
     
        .showcase-content{
            width: 40%;
            height: 100%;
            
            h2{
                font-size: 2.5rem;
            }

            p{
                font-size: 1.3rem;
            }

            a{
                font-size: 1.2rem;
            }
        }
    }

</style>
