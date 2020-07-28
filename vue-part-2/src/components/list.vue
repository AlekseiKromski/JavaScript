<template>
  <div>
    <h2 @click="show()">Inner title</h2>
    <ul>
      <li v-for="person in peoples">{{person}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    //Validation
    props:{
      peoples:{
        type: Array,
        //Обязательное значение
        required: true,
        default: []
      }
    },
    data(){
      return {

      }
    },
    methods:{
      show(){
        console.log(this.peoples)
      }
    }
  }
</script>
