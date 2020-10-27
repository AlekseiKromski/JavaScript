<template>
    <div>
        <h1>Обертка для страниц</h1>
        <nuxt-child />
    </div>
</template>
<script>
export default {
    middleware: 'checkAuth'
}
</script>