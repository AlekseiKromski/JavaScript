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
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" @keydown="search()" @focus="checkSearchResult();focus = true" @blur="checkAfterBlur()" v-model="searchText">
                <div v-if="showSearchResult" :mouseover="focusOnSearchBlock = true" @mouseleave="focusOnSearchBlock = false" class="search_result">
                    <ul>
                        <li v-for="sr in search_result"><a href="#">{{sr.title}}</a></li>
                    </ul>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
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
                        });
                    }
                },1000);
            },
            checkSearchResult(){
                if (this.searchText.length != 0){
                    this.showSearchResult = true;
                }
            },
            checkAfterBlur(){
                this.focus = false;
                if(this.focusOnSearchBlock && this.focus === true){
                    this.showSearchResult = true;
                }else{
                    this.showSearchResult = false;
                }

            }
        },
        mounted() {

        }
        ,
        data(){
            return {
                showSearchResult: false,
                searchText: '',
                timer: false,
                search_result: [],
                focusOnSearchBlock: false,
                focus: false
            }
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
</style>
