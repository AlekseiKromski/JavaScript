<template>
  <div>
    <navbar/>
    
    <div class="container">
      <div class="row">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components:{ 
    navbar
  }
}
</script>

<style>

</style>
