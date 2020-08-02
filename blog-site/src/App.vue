<template>
  <div id="app">
    <div class="admin_block text-center">
      <h1 class="mt-4">Admin panel</h1>
      <p class="sub_text mb-4">In this section you can add/delete post</p>
      <button class="btn btn-success">Add new post</button>
      <button class="btn btn-warning">Show all posts</button>
    </div>
    <hr>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="./assets/card_title.gif" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="./assets/card_title.gif" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="./assets/card_title.gif" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem, ea et laudantium mollitia nam neque nostrum quae quia, sint sit voluptas? Ad beatae facere in mollitia neque optio recusandae.
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
  components: {

  }
}
</script>

<style>
  .sub_text{
    color: #cfcfcf;
  }

</style>
