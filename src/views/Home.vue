<template>
    <div class="home">
        <hello-world></hello-world>
        <h1>{{ name }}</h1>
        <a href="javascript:;" class="btn-a" @click="show">Show</a>
    </div>
</template>

<script>
import helloWorld from '../components/HelloWorld'

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
            name: 'Home'
        }
    },
    components: {
        helloWorld
    },
    methods: {
        show() {
            console.log('route\n',this.$route,'router\n',this.$router)
        }
    }
}
</script>

<style lang="css">
.btn-a:link,
.btn-a:visited {
    box-shadow: 0 0 0 1px #000;
}
</style>