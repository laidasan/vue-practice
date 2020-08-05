<template>
    <div class="hello">
        <h1>Hello World</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('hello mountd')
    },
    beforeRouteUpdate(to,from,next) {
        console.log('hello beforeRouteUpdate')
        next()
    },
    beforeRouteEnter(to,from,next) {
        console.log('hello beforeRouteEnter')
        next()
    },
    beforeRouteLeave(to,from,next) {
        console.log('hello beforeRouteLeave')
        next()
    },
}
</script>