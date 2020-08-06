<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/home" class="nav__router-link">home</router-link> |
            <router-link to="/about" class="nav__router-link">about</router-link>
        </nav>

        <router-view/>
    </div>
</template>