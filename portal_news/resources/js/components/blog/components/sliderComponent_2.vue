<template>
    <div class="container-fluids slider-main">
        <div ref="slider" class="slider animate__animated" v-bind:style="{'background': `url(${img})`}">
            <div class="row align-items-center blur" v-bind:style="{'backdrop-filter': `blur(8px)`, width: '100%'}">
                <div class="row justify-content-center" style="width: 100%;" >
                    <div class="col-md-3 ">
                        <a href="#" class="slider-title">{{title}}</a>
                    </div>
                    <div class="col-md-5">
                        <a href="#" class="slider-text">
                            {{text}}
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
                title: '',
                text: '',
                img: '',

            }
        },
        methods:{
            showSliderById(event){
                let id = Number(event.target.id);

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

                //Add animation class
                this.$refs.slider.classList.add('animate__backOutRight');
                this.$refs.slider.addEventListener('animationend',() =>{

                    //Remove animation class
                    this.$refs.slider.classList.remove('animate__backOutRight');

                    //Set new data
                    this.sliders.forEach(e => {
                        if(id == e.id){
                            this.title = e.title;
                            this.text = e.text;
                            this.img = e.img;

                        }
                    });

                    //Add animation class
                    this.$refs.slider.classList.add('animate__backInLeft');
                    this.$refs.slider.addEventListener('animationend',() =>{
                        this.$refs.slider.classList.remove('animate__backInLeft');
                    });
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
                        this.title = element.title;
                        this.text = element.text;
                        this.img = element.img;
                        this.buttons.push({id: element.id, active: true, class: 'button-active' })
                    }else{
                        this.buttons.push({id: element.id, active: false, class: 'button-' })

                    }
                });
                console.log(this.buttons)

            });
        }
    }
</script>

<style>
    .slider-main{
        min-width: 100%;
    }
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

<style>
    body{
        max-width: 100%;
        overflow-x: hidden;
    }
</style>
