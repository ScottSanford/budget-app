<template>
    <div class="about">
        <h1 class="about__title">About Page</h1>
        <h1>Hello, {{ userName | capitalize }}</h1>
        <button @click="getData">Get Superhero Data!</button>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            userName: this.$route.params.name
        }
    },
    methods: {
        getData() {
            this.$http
                .get('http://localhost:3000/products')
                .then(res => {
                    console.log('Products:', res.body.products)
                })
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
}
}
</script>

<style lang="scss" scoped>
.about {
    background-color: orangered;

    &__title {
      font-weight: bold;
      color: orangered;  
    }
}
</style>

