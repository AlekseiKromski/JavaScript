<template>
  <div>
      <h2>List</h2>
      <input type="text" v-model="message" @keydown.enter="saveMessage">
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
        return {
            message: ''
        }
    },
    methods:{
        saveMessage: function (){
            this.$emit("message", this.message);
        }
    },
    components: {
    
    }
}
</script>

<style scoped>

</style>
