<template>
    <div class="row shadow rounded">
            <div class="col-12 p-5">
                <ul class="nav nav-tabs">
                    <li class="nav-item" v-for="link in links" v-bind:key="link.id">
                        <!-- V-IF -->
                        <a class="nav-link"
                        v-bind:class="{active : link.active}"
                        v-bind:data-id="link.id"
                        v-on:click="changeNav($event, link)"
                        >{{link.name}}</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div v-for="link in links" v-bind:key="link.id" >
                        <div v-if="link.active" v-html="link.content"></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    data: function(){
        return {
            links:[
                {
                    id: "howMuchFuel",
                    name: "fuel",
                    active: true,
                    content: `
                    <h1>Test1</h1>
                    <form class="mt-3">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </form>`

                },
                {
                    id: "howMuchKM",
                    name: "km",
                    active: false,
                    content: `
                    <h1>Test2</h1>
                    <form class="mt-3">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </form>`

                }
            ]
        }
    },
    methods:{
        changeNav: function(e,item){
            e.preventDefault();
            this.links.forEach(e => {
                if(e.active) e.active=false;
            })
            item.active = true;
        }
    }
}
</script>

<style>

</style>
