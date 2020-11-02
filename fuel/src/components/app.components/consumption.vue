<template>
    <div class="row shadow rounded m-sm-0 m-md-5 p-4 consumption">
            <div class="col-12">
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
                    <div v-if="dialog == 'howMuchFuel'">
                        <h3 class="mt-3">Fuel</h3>
                        <hr>
                        <form v-on:submit="getFuelResult($event)">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Расход на 100 км</span>
                                </div>
                                <input type="number" step="0.01" v-model="average_consumption" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Средняя цена топлива</span>
                                </div>
                                <input type="number" step="0.01" v-model="average_price" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Кольво км</span>
                                </div>
                                <input type="number" step="0.01" v-model="km" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                            <div class="input-group mb-3">
                                <input type="submit" value="Расчитать" class="btn btn-success">
                            </div>
                            <div v-if="FuelResult">
                                Количество топлива, которое уйдет - {{FuelResult}}
                            </div>
                            <div v-if="FuelResultPrice">
                                Во сколько обойдеться - {{FuelResultPrice}}
                            </div>
                            <div class="error_message" v-if="error_message">
                                {{error_message}}
                            </div>
                        </form>
                    </div>
                    <div v-if="dialog == 'howMuchKM'">
                        <h1>Test2</h1>
                        <form class="mt-3">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </form>
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
                    active: true

                },
                {
                    id: "howMuchKM",
                    name: "km",
                    active: false

                }
            ],
            FuelResult: null,
            FuelResultPrice: null,
            average_consumption: null,
            average_price: null,
            km: null,
            dialog: 'howMuchFuel',
            error_message: null,
        }
    },
    methods:{
        changeNav: function(e,item){
            e.preventDefault();
            this.links.forEach(e => {
                if(e.active) e.active=false;
            })
            item.active = true;
            this.dialog = item.id;
        },
        getFuelResult: function(e){
            e.preventDefault();
            if(this.average_consumption != null && this.average_consumption != "" || this.average_price != null &&  this.average_price != "" || this.km != null &&  this.km != ""){
                this.error_message = null;
                this.FuelResult = ((this.km * this.average_consumption) / 100) + " l";
                this.FuelResultPrice = Math.round(((this.km * this.average_consumption) / 100) * this.average_price) + " euro";
            }else{
                this.error_message = 'Вы не заполнили все поля'
            }
        }
    }
}
</script>

<style>
.consumption{
    transition: 0.5s;
}
.consumption:hover{
    transition: 0.5s;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}
.error_message{
    color: brown;
}
</style>
