<template>
    
    <div>
        <gmap-map
            :center = "center"
            :zoom = "12"
            style = "width: 100%; height: 60vh"
        >

            <gmap-marker
                :key = "index"
                v-for = "(m, index) in markers"
                :position = "m.position"
            >

            </gmap-marker>
        </gmap-map>
    </div>

</template>

<script>
export default {
    name: "GoogleMap",
    data(){
        return{
            center: {
                lat: 50.388715,
                lng: -4.156734
            },
            markers:[
                {position: 
                    {lat: 50.388715,lng: -4.156734}
                }
            ],
        }
    }
}
</script>