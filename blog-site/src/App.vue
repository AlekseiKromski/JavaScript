<template>
  <div id="app">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="navbar_panel_state">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click="show_admin_panel">Admin panel <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Admin panel -->
    <div class="admin_block text-center" >
      <h1 class="mt-4">Admin panel</h1>
      <p class="sub_text mb-4">In this section you can add/delete post</p>
      <button class="btn btn-success mr-1">Add new post</button>
      <button class="btn btn-warning mr-1">Show all posts</button>
      <button class="btn btn-info mr-1" @click="hide_admin_panel">Hide admin panel</button>
    </div>
    <div class="container-fluid mt-5 p-0">
      <div class="row justify-content-center" style="width: 100%">
        <!--Card form section-->
        <div class="col-md-3 form_block">
          <form>
            <h3>Card form</h3>
            <hr>
            <div class="mb-2">
              <label for="">Card title:</label>
              <input type="text" class="input" v-model="preview_title">
            </div>
            <div class="mb-2">
              <label for="">Card text:</label>
              <input type="text" class="input" v-model="preview_text">
            </div>
            <div class="mb-2">
              <label for="">Card img:</label>
              <input type="file" class="input" @change="previewFiles($event)">
            </div>
            <div class="mb-2">
              <button type="submit" class="btn btn-success">Add new post</button>
            </div>
          </form>
        </div>

        <!-- Preview section -->
        <div class="col-md-3">
          <div class="col-md-8 mt-3 mb-3">
            <div class="card">
              <img class="card-img-top" :src="preview_img" alt="">
              <div class="card-body">
                <h5 class="card-title">{{preview_title}}</h5>
                <p class="card-text">
                  {{preview_text}}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr v-if="admin_panel_state">

    <!-- Posts -->
    <div class="container-fluid mt-3">
      <h2 class="text-center m-4">Posts</h2>
      <div class="row justify-content-center post_block">
        <div v-for="post in posts" class="col-md-4 col-xl-3 mt-3 mb-3">
          <div class="card">
            <img class="card-img-top" v-bind:src="post.img" alt="">
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <p class="card-text">
                {{post.text}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function (){
    return {
      admin_panel_state: false,
      navbar_panel_state: true,
      posts: [
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
        {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.',
          img: require('@/assets/card_title.gif')
        },
      ],
      preview_img: require('@/assets/no_image.jpg'),
      preview_title: 'Card title',
      preview_text: 'Card title'
    }
  },
  methods:{
    show_admin_panel(){
      this.admin_panel_state = true;
      this.navbar_panel_state = false;
    },
    hide_admin_panel(){
      this.admin_panel_state = false;
      this.navbar_panel_state = true;
    },
    previewFiles(event){

      let old_this = this;

      var reader = new FileReader();

      /*
      * Event function
      *
      * Обработчик для события load. Это событие
      * срабатывает при каждом успешном завершении операции чтения.
      * */
      reader.onload = function(event) {
        old_this.preview_img = event.target.result;
      }

      //Send data to BLOB reading
      reader.readAsDataURL(event.target.files[0]);
    }
  },
  components: {

  }
}
</script>

<style>
  .sub_text{
    color: #cfcfcf;
  }
  .post_block{
    padding-left: 10%;
    padding-right: 10%;
  }
  .input{
    border-radius: 5px 5px;
    border: 2px solid #cecece;
  }
  .input:focus{
    outline: none;
  }
  .form_block{
    border-radius: 10px 10px;
    padding: 2%;
    box-shadow: 0px 0px 13px -1px black;
  }

</style>
