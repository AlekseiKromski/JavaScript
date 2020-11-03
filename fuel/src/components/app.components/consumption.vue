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
                                <input type="number" step="0.01" v-bind:value="average_consumption" @input="setAverage_consumption($event)" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Средняя цена топлива</span>
                                </div>
                                <input type="number" step="0.01" v-bind:value="average_price" @input="setAverage_price($event)" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Кольво км</span>
                                </div>
                                <input type="number" step="0.01" v-bind:value="km" @input="setKm($event)" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
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
import {mapMutations} from 'vuex';
import {mapState} from 'vuex';
export default {
    mounted(){
        console.log(this);
    },
    computed: mapState({
        //state.{YOUR MODULE}.example
        links: state => state.consumption.links,
        FuelResult: state => state.consumption.FuelResult,
        dialog: state => state.consumption.dialog,
        FuelResultPrice: state => state.consumption.FuelResultPrice,
        average_consumption: state => state.consumption.average_consumption,
        average_price: state => state.consumption.average_price,
        km: state => state.consumption.km,
        error_message: state => state.consumption.error_message,
    }),
    methods:{
        ...mapMutations(['changeActiveToFalse', 'updateAverage_consumption', 'updateAverage_price', 'updateKm', 'updateDialog', 'updateFuelResult', 'updateFuelResultPrice', 'updateError_message']),
        changeNav: function(e,item){
            e.preventDefault();
            this.changeActiveToFalse();
            item.active = true;
            this.updateDialog(item.id);
        },
        getFuelResult: function(e){
            e.preventDefault();
            if(this.average_consumption != null && this.average_consumption != "" || this.average_price != null &&  this.average_price != "" || this.km != null &&  this.km != ""){
                this.updateError_message(null);
                this.updateFuelResult(((this.km * this.average_consumption) / 100) + " l");
                this.updateFuelResultPrice(Math.round(((this.km * this.average_consumption) / 100) * this.average_price) + " euro");
            }else{
                this.updateError_message("Вы не заполнили все поля");
            }
        },

        /* Methods for change */
        setAverage_consumption: function(e){
            this.updateAverage_consumption(e.target.value);
        },
        
        setAverage_price: function(e){
            this.updateAverage_price(e.target.value);
        },
         
        setKm: function(e){
            this.updateKm(e.target.value);
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
