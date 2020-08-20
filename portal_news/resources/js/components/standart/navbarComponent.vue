<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{ Portal_news }</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" >
                <input ref="input" class="form-control mr-sm-2"  v-bind:class="focusClass" type="search" placeholder="Поиск" aria-label="Search" v-on:keydown="search()" v-on:focus="checkSearchResult()" v-on:blur="checkAfterBlur()" v-model="searchText">
                <div v-if="showSearchResult"  v-on:mouseenter="focusOnBlock = true"  v-on:mouseleave="mouseLeave($)" class="search_result">
                    <ul>
                        <li v-for="sr in search_result"><a href="#">{{sr.title}}</a></li>
                    </ul>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
    import blogComponent from "../blog/blogComponent";

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
                this.input.blur();
            }

        },
        mounted() {
            this.input = this.$refs.input;
        }

    }
</script>

<style scoped>
    .search_result{
        box-shadow: 0px 0px 11px -1px black;
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
</style>
