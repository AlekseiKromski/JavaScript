<template>
    <div class="container-fluids">
        <div ref="slider" class="slider animate__animated animate__backInLeft" v-if="s.show" v-bind:style="{background:  `url(${s.img})`, 'background-size': 'cover'}" v-for="s in sliders">
            <div class="row align-items-center blur" v-bind:style="{'backdrop-filter': `blur(8px)`, width: '100%'}">
                <div class="row justify-content-center" style="width: 100%;" >
                    <div class="col-md-3 ">
                        <a href="#" class="slider-title">{{s.title}}</a>
                    </div>
                    <div class="col-md-5">
                        <a href="#" class="slider-text">
                            {{s.text}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttons mt-2">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-1 button mr-2" v-bind:id="b.id" v-bind:class="b.class" v-for="b in buttons" v-on:click="showSliderById($event)">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                sliders:[],
                buttons:[],
                slider: 0,

            }
        },
        methods:{
            showSliderById(event){

                //Get id of element
                let id =  Number(event.target.id);

                //Delete old active button
                this.buttons.forEach(e => {
                    if(e.active){
                        e.active=false;
                        e.class = 'button'
                    }
                })

                //Add new active button
                this.buttons.forEach(e => {
                    if(e.id === id){
                        e.class = 'button-active';
                        e.active = true;
                    }
                })


                //Change slider
                this.sliders.forEach(e => {
                    if(e.id === this.slider){
                        e.show = false;
                    }
                });

                this.sliders.forEach(e => {
                    if(e.id === id){
                        this.slider = e.id;
                        e.show = true
                    }
                });



            }
        },
        mounted(){
            axios.get('/api/getTop3News').then(response => {
                response.data.forEach((element,index) => {
                    element.title = element.title.substring(0, 30) + ' ...';
                    element.text = element.text.substring(0, 120) + ' ...';
                    this.sliders.push(element)
                    if(index === 0){
                        this.slider = element.id;
                        this.buttons.push({id: element.id, active: true, class: 'button-active' })
                    }else{
                        this.buttons.push({id: element.id, active: false, class: 'button-' })

                    }
                });
                console.log(this.sliders)

            });
        }
    }
</script>

<style>
    .slider{
        background: red;
        min-height: 250px;
        max-height: 250px;
        background-repeat: no-repeat;
    }
    .blur{
        min-height: 250px;
    }
    .slider-title{
        color: white;
        font-size: 2rem;
        font-family: 'Alata', sans-serif;
    }
    .slider-text{
        color: white;
        font-size: 1.2rem;
        font-family: 'Alata', sans-serif;

    }
    .slider-title:hover{
        color: white;
        text-decoration: none;
    }
    .slider-text:hover{
        color: white;
        text-decoration: none;
    }
    .button{
        max-height: 10px;
        max-width: 10px;
        height: 10px;
        background: #b3b3b3;

    }
    .button-active{
        max-height: 10px;
        max-width: 10px;
        height: 10px;
        background: #212529;
    }
</style>
