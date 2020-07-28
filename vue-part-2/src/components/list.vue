<template>
  <div>

    <input type="text" v-model="message" @keyup.enter="saveMessage">
    <h2 @click="show()">Inner title</h2>
    <ul>
      <li v-for="person in peoples">{{person}}</li>
    </ul>
  </div>
</template>

<script>
  import {bus} from '../main'
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
        message: '',
      }
    },
    methods:{
      show(){
        console.log(this.peoples)
      },
      saveMessage(){
        bus.$emit('message', this.message);
        this.message = '';
      }
    }
  }
</script>
