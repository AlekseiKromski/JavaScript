<template>
    <div class="container-fluid block_slider p-0" v-bind:style="block_slider_style">
        <div class="row justify-content-center" style="width: 100%">
            <div class="col-10">
                <div v-bind:class="sliderClass" v-bind:style="sliderStyle">
                    <div class="row justify-content-center">
                        <div class="col-3 align-self-center">
                            <img src="img/back.png" alt="">
                        </div>
                        <div class="col-6 align-self-center" v-for="slider in sliders" v-if="slider.show">
                            <h1>
                                {{ slider.title }}<br>
                                {{ slider.price }}
                            </h1>
                            <p>
                                {{ slider.text }}
                            </p>
                        </div>
                        <div class="col-3 align-self-center">
                            <img src="img/next.png" class="next" alt="" v-on:click="nextSlider()">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "sliderComponent",
    mounted() {
        $(window).scroll(() => {
            if ($(window).scrollTop() > 200) {
                this.block_slider_style["margin-top"] = '420px';
            }else {
                this.block_slider_style["margin-top"] ='200px';
            }
        });
    },
    data(){
        return{
            sliderStyle: {
                'background': 'linear-gradient(360deg, #000000 -52.61%, rgba(255, 255, 255, 0) 100%), url("img/bg.jpg")',
            },
            block_slider_style:{
                'margin-top': '200px'
            },
            sliders:[
                {id:0, show: true,img:'img/bg.jpg', title: 'KATANA - Isiru', price: '89.00$', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n'},
                {id:1, show: false,img:'img/logo.png', title: 'KATANA - Isiru2', price: '89.00$', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n'},
                {id:2, show: false,img:'img/bg.jpg', title: 'KATANA - Isiru3', price: '89.00$', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n'},
            ],
            next_slider: 0,
            sliderClass:{
                'container-fluid': true,
                'slider': true,
                'animate__animated': true,
            }


        }
    },
    methods:{
        nextSlider(){
            this.next_slider++;
            if(this.next_slider >= this.sliders.length){
                this.next_slider = 0;
            }
            this.sliders.forEach(e => {
                if(e.show === true){
                    e.show = false;
                }
                if(e.id === this.next_slider){
                    e.show = true;
                    this.sliderStyle = {

                        'background' : `linear-gradient(360deg, #000000 -52.61%, rgba(255, 255, 255, 0) 100%) , url("${e.img}")`,
                        'background-size': 'cover'

                    }

                }
            })
        }
    }
}
</script>

<style scoped>
    .slider{
        min-height: 593px;


    }
    .block_slider{
        min-height: 1000px;

    }

</style>

<style>
    .row{
        min-height: 593px;
    }
    .row h1{
        font-family: Advent Pro;
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 45px;

        color: #FFFFFF;
    }
    .row p{
        font-family: Advent Pro;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        color: #FFFFFF;
    }
    .next{
        display: block;
        margin-left: auto;
    }
</style>
