<template>
  <div id="wrapper">
      <form action="">
          <div>
              <p>Title</p>
              <input type="text" v-model.lazy="post.title">
          </div>
          <div>
              <p>Text</p>
              <textarea name="" id="" cols="30" rows="10" v-model.lazy="post.text"></textarea>
          </div>
          <div>
              <p>Category</p>
              <p>
                  Vue
                  <input type="checkbox" value="Vue" v-model.lazy="post.category">
              </p>
              <p>
                  Angular
                  <input type="checkbox" value="Angular" v-model="post.category">
              </p>
              <p>
                  React
                  <input type="checkbox" value="React" v-model="post.category">
              </p>
          </div>
      </form>
      <div class="preview">
          Title: {{post.title}}
          Text: {{post.text}}
          Category: <span v-for="c in post.category"> {{c}}</span>
      </div>
  </div>
</template>

<script>
export default {
  
  components: {

  },
  data: function(){
    return { 
        post: {
            title: '',
            text: '',
            category: []
        }
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
