<template>
  <ul>
      <li v-for="p in people">
          {{p}}
      </li>
  </ul>
</template>

<script>

export default {
  data: function(){
    return {
      people: ["Aleksei", "Andery", "Mike"]
    }
  }
}
</script>

<style>

</style>
