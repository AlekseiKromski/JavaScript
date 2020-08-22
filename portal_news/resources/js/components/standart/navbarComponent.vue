<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container-fluid">
            <div class="row p-0">
                <div class="col-1 p-0">
                    <a class="navbar-brand logo" href="/">Portal news</a>
                </div>
                <div class="col-11 p-0">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item active" @mouseenter.prevent="showCategories()" @mouseleave.prevent="hideCategories()">
                                <a class="nav-link" href="/" >Categories</a>
                                <div v-if="categoriesBlock" class="dropdown_menu shadow-lg animate__animated animate__bounceIn" @mouseenter.prevent="focusOnCategoriesBlock = true;" @mouseleave="leaveCategoriesBlock($event)">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <ul>
                                                <li v-for="c in categories">
                                                    <a href="#">{{c.name}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0" >
                            <input ref="input" class="form-control mr-sm-2"  v-bind:class="focusClass" type="search" placeholder="Поиск" aria-label="Search" v-on:keydown="search()" v-on:focus="checkSearchResult()" v-on:blur="checkAfterBlur()" v-model="searchText">
                            <div v-if="showSearchResult"  v-on:mouseenter="focusOnBlock = true"  v-on:mouseleave="mouseLeave($)" class="search_result shadow animate__animated animate__bounceIn">
                                <ul>
                                    <li v-for="sr in search_result"><a href="#">{{sr.title}}</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    </nav>
</template>

<script>


    export default {
        data(){
            return {
                showSearchResult: false,
                searchText: '',
                timer: false,
                search_result: [],
                focusOnBlock: false,
                focusClass: '',
                focusOnSearch: false,
                input: {},
                categoriesBlock: false,
                focusOnCategoriesBlock: false,
                categories: [],
            }
        },
        methods:{
            search(){
                if(this.timer){
                    clearTimeout(this.timer);
                    this.timer = false;
                }
                this.timer = setTimeout(() => {
                    if(this.searchText !== ''){
                        axios.get('/api/search?title=' + this.searchText).then(response => {
                            if(response.data != ''){
                                this.search_result = response.data.map(element => {
                                    return element;
                                });

                            }else{
                                this.search_result = [{title: 'No result'}];
                            }
                            this.showSearchResult = true;
                            this.focusOnSearch = true;
                        });
                    }
                },1000);
            },
            checkSearchResult(){
                if(this.searchText.length !=0){
                    this.showSearchResult = true;
                }
            },
            checkAfterBlur(){
                this.focusOnSearch = false;
                if(this.focusOnBlock){
                    this.showSearchResult = true;
                    this.focusClass = 'form-control-focus';
                }else{
                    this.showSearchResult = false;
                }
            },
            mouseLeave(){
                this.focusOnBlock = false;
                this.showSearchResult = false;
                this.focusClass = '';
                this.$refs.input.blur();
            },
            showCategories(){
                this.categoriesBlock = true;
            },
            hideCategories(){
                if(this.focusOnCategoriesBlock != false){
                    this.categoriesBlock = false;
                }

            },
            leaveCategoriesBlock(e){
                this.focusOnCategoriesBlock = false;
                this.categoriesBlock = false;

            }

        },
        mounted() {
            axios.get('/api/getCategories').then(response => {
                response.data.forEach(e => {
                    this.categories.push(e);
                })
            });
        }

    }
</script>

<style scoped>
    .search_result{
        position: absolute;
        top: 61px;
        right: 20px;
        min-width: 300px;
        max-width: 500px;
        padding: 1%;
        background: white;
        z-index: 1;
        border-radius: 10px 10px;
    }
    .form-control-focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
    .logo{
        font-family: 'Alata', sans-serif;
        font-weight: 400;
    }
    .nav-link{
        font-family: 'Alata', sans-serif;

    }
    .form-control{
        font-family: 'Alata', sans-serif;

    }
    .navbar{
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;
    }
    .dropdown_menu{
        background-color: white;
        border-radius: 10px 10px;
        min-width: 250px;
        position: absolute;
        z-index: 1;
        left: -17px;
        top: 55px;
        padding: 1%;
    }
</style>
