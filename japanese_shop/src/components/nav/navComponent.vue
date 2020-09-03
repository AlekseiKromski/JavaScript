<template>
    <div v-bind:class="navClass">
        <div class="row justify-content-center" v-bind:style="rowStyle">
            <div class="col-1 p-0 align-self-center menu">
                Main
            </div>
            <div class="col-1 p-0 align-self-center menu">
                Catalog
            </div>
            <div class="col-1 p-0 align-self-center menu">
                News
            </div>
            <div class="col-2 p-0 align-self-center logo_block">
                <img src="img/logo.png" alt="" class="logo_img" v-if="showLogo">
                <span v-if="!showLogo" class="logo_text">JAPANESE SHOP</span>
            </div>
            <div class="col-1 p-0 align-self-center menu">
                Shops
            </div>
            <div class="col-1 p-0 align-self-center menu">
                About
            </div>
            <div class="col-1 p-0 align-self-center menu">
                Contact
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Nav',
    created(){
        this.navStyle = {};
    },
    mounted(){
        $(window).scroll(() => {
            if ($(window).scrollTop() > 200) {
                this.showLogo = false;
                this.navClass.nav_img = false;
                this.navClass.nav_text = true;
                this.rowStyle["min-height"] = '100px';
                this.navClass.animate__fadeInDown = true;
            }else {
                this.navClass.animate__fadeInDown = false;
                this.showLogo = true;
                this.navClass.nav_img = true;
                this.navClass.nav_text = false;
                this.rowStyle["min-height"] = '150px';

            }
        });
    },
    data(){
        return {
            showLogo: true,
            navClass: {
                'container-fluid': true,
                'nav_img': true,
                'animate__animated': true,
                'animate__fadeInDown': false,
                'nav_text': false,
                'animate__fadeOutUp': false
            },
            rowStyle:{
                'min-height': '150px',
                'width': '100%'
            }
        }
    }
}
</script>

<style scoped>
    .nav_img{
        font-family: 'Advent Pro', sans-serif;
        width: 100%;
        min-height: 150px;
        background: #242424;
    }
    .nav_text{
        font-family: 'Advent Pro', sans-serif;
        width: 100%;
        min-height: 100px;
        background: #242424;
        position: fixed;
        top: 0px;
        z-index: 1;
    }
    .logo_img{
        width: 100%;
    }
    .logo_text{
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        background: -webkit-linear-gradient(#E21E42, rgba(226, 30, 66, 0));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    .logo_block{
        text-align: center;
    }

</style>
<style>
    .menu{
        text-align: center;
        color: white;
        font-size: 26px;
        padding: 0%;
        margin: 0%;
        transition: 0.5s;
    }
    .menu:hover{
        color: #E21E42;
        transition: 0.5s;
    }
</style>
