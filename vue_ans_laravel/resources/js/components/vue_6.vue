<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <button @click="update" class="btn btn-info">
                    Update - {{id}}
                </button>
                <span v-if="is_refresh">
                    Loading
                </span>
                <div class="card">
                    <ul>
                        <li v-for="url in urldata">
                            {{url.title}}
                            {{url.url}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.update();
        },
        methods:{
            update(){
                this.is_refresh = true;
                axios.get('/getJSON').then((response) => {
                    this.urldata = response.data;
                    this.is_refresh = false;
                    this.id++;
                });
            }
        },
        data: () => {
            return {
                urldata: [],
                is_refresh: false,
                id: 0
            }
        }
    }
</script>
