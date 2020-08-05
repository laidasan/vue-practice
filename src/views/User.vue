<template>
    <div class="user">
        <hello-world v-if="$route.params.id === 'samura'"></hello-world>
        <h1>USER</h1>
        <h2 v-if="$route.params.id">{{$route.params.id}}</h2>
        <h3 v-if="$route.params.post_id">{{$route.params.post_id}}</h3>
        <a href="javascript:;" class="btn-a" @click="show">show</a>
    </div>
</template>

<script>
import helloWorld from '../components/HelloWorld'
export default {
    beforeRouteUpdate(to,from,next) {
        console.log('beforeRouteUpdate')
        next()
    },
    beforeRouteEnter(to,from,next) {
        console.log('beforeRouteEnter')
        next()
    },
    beforeRouteLeave(to,from,next) {
        console.log('beforeRouteLeave')
        next()
    },
    components: {
        helloWorld
    },
    methods: {
        show() { console.log(this.$route) }
    }
}
</script>