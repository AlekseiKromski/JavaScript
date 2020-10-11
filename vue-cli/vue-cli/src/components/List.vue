<template>
  <div>
      <h2>List</h2>
      <ul>
          <li v-for="person in peoples">
            {{person}}
          </li>
      </ul>
  </div>
</template>

<script>


export default {
    props: ['peoples'],
    data: function(){
        return {}
    },
    components: {
    
    }
}
</script>

<style scoped>

</style>
