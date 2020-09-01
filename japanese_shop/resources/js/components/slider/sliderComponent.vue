<template>
    <div class="container-fluid block_slider p-0" v-bind:style="block_slider_style">
        <div class="row justify-content-center" style="width: 100%">
            <div class="col-10">
                <div class="container-fluid slider" v-bind:style="sliderStyle">
                    <div class="row justify-content-center">
                        <div class="col-6 align-self-center">
                            <h1>
                                KATANA - Isiru<br>
                                89.00$
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
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
                'background-size': 'cover',
            },
            block_slider_style:{
                'margin-top': '200px'
            }


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
</style>
