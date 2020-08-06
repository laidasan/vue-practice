<template>
    <div class="hello">
        <h1>Hello World</h1>
        <slot :user="user">{{ user.name }}</slot>
        <!-- <slot name="footer">default footer</slot>
        <slot name="header">
            <a href="javascript:;" class="btn-a">default header</a>
        </slot> -->
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
    data() {
        return {
            name: "this name is in HelloWorld",
            user: {
                name: 'samura.chiu',
                age: 24
            }
        }
    }
}
</script>