<template>
    <div class="home">
        <hello-world v-slot:default="{ user }">
            <!-- <h1 style="padding: 30px;" @click="showSlotProps($event,myProps)">{{ myProps.user.age }}<h1> -->
            <h1 style="padding: 30px;" @click="showSlotProps($event,user)">{{ user.age }}<h1>

            <!-- <a href="javascript:;" class="btn-a">{{ name }}</a> -->
            <!-- <a href="javascript:;" class="btn-a"></a> -->
            <!-- <template v-slot:header>
                <h1>header</h1>
            </template>
            <template v-slot:footer>
                <h1>footer</h1>
            </template> -->
            <!-- {{ user.age }} -->
            <!-- <template v-slot:default="myProps" >
                <h1 style="padding: 30px;" @click="showSlotProps($event,myProps)">{{ myProps.user.age }}<h1>
            </template> -->
        </hello-world>
        <!-- <h1>{{ name }}</h1> -->
        <a href="javascript:;" class="btn-a" @click="show">Show</a>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
    beforeRouteEnter(to,from,next) {
        console.log('home beforeRouteEnter')
        next()
        // next('/user')
    },
    beforeRouteLeave(to,from,next) {
        console.log('home beforeRouteLeave')
        next()
    },
    data() {
        return {
            name: 'this name is in Home.Vue'
        }
    },
    components: {
        HelloWorld
    },
    methods: {
        show() {
            console.log('route\n',this.$route,'router\n',this.$router)
        },
        showSlotProps(e,slotProp) { console.log(slotProp) }
    }
}
</script>

<style lang="css">
.btn-a:link,
.btn-a:visited {
    box-shadow: 0 0 0 1px #000;
}
</style>