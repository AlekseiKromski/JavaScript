<template>
    <section>
        <form @submit.prevent="onSubmit()" action="">
            <input type="text" name="login"><br>
            <input type="password" name="password"><br>
            <input type="submit">
        </form>
    </section>
</template>

<script>
export default {
    layout: 'empty',
    methods:{
        onSubmit(){
            this.$store.dispatch('login');
            this.$router.push('/')
        }
    }
}
</script>