<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
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
        props:[
          'urldata'
        ],
        mounted() {
            this.update();
        },
        methods:{
            update(){
                console.log(this.urldata);
            }
        }
    }
</script>
