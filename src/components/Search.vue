<template>
    <div class="wrap">
        <img src="../assets/u18.jpg" alt="">
        <router-link to="/shouye"><div class="cancle"></div></router-link>
    </div>
</template>

<script>
export default {
    name:'search'
}
</script>

<style>
img{
    width: 100%;
    position: relative;
}
.cancle{
    position: absolute;
    left: 317px;
    top: 22px;
    width: 58px;
    height: 38px;
}
</style>
