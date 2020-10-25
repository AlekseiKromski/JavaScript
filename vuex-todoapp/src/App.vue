<template>
  <div id="app">
    <div class="container-fluid header">
      <div class="row justify-content-center">
        <div class="col-3 text-center">
          <h1>To do app</h1>
        </div>
      </div>
    </div>

    <div class="container-fluid my-5 main">
      <div class="row justify-content-center align-items-center">
        <div class="col-6">
          <div class="row align-items-center p-2">
            <div class="col-4">
              <h2>List of to do</h2>
            </div>
            <div class="col-8 text-right">
              <div class="input-group">
                <input v-model="addNewToDoText" type="text" class="form-control" placeholder="Enter your new to do" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-success" type="button" v-on:click="addNewToDoByLocal()">Create</button>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <ul>
            <li class="p-2 animate__animated animate__fadeIn" v-for="ltd in listToDo" v-bind:key="ltd.id" :ref="'toDo-'+ltd.id">
              <div class="row align-items-center">
                <div class="col-4">
                  {{ltd.text}}
                </div>
                <div class="col-8 text-right">
                  <button class="btn btn-info mr-2" v-on:click="ltd.isChange = !ltd.isChange">Change</button>
                  <button class="btn btn-danger" v-on:click="deleteToDoByLocal(ltd.id)">Delete</button>
                </div>
                <div class="col-12 mt-3" v-show="ltd.isChange">
                  <input v-model="ltd.text" type="text" class="form-control" placeholder="Enter your new to do" aria-label="Recipient's username" aria-describedby="basic-addon2">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  name: 'App',
  components: {
    
  },
  data: function(){
    return {
      addNewToDoText: '',
    }
  }
  ,
  computed:{
    ...mapState(['listToDo', 'lastId']),
  },
  methods:{
    ...mapMutations(['addNewToDo', 'deleteToDo', 'changeToDo']),
    addNewToDoByLocal: function(){
      this.addNewToDo(this.addNewToDoText)
      this.addNewToDoText = '';
    },
    deleteToDoByLocal: function(id){
      let ref_id = 'toDo-' + id;
      this.$refs[ref_id][0].classList.add('animate__fadeOut')
      this.$refs[ref_id][0].addEventListener("animationend", () => {
        this.deleteToDo(id);
      })
    }
  }
}
</script>

<style scoped>
.header{
  background: #946363;
  color: white;
}
.main ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.main ul li{
  transition: 0.3s;
}
.main ul li:hover{
  background: #f1f1f1;
  transition: 0.3s;
}
</style>
