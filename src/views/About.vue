<template>
    <div class="about">
        <h1>{{ this.place }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'About'
        }
    },
    computed: {
        place() { return this.name}
    }
}
</script>