<template>
    <div class="wrap">
        <header>
            <img src="../assets/u48.png" alt="">
            <img src="../assets/u50.png" alt="">
            <div class="find"></div>
        </header>
        <section>
            <img src="../assets/192284667.jpg" alt="">
            <div class="sec-top">
                <img src="../assets/音乐.png" alt="">
                <img src="../assets/播放.png" alt="">
                <img src="../assets/清单.png" alt="">
                <img src="../assets/收音机.png" alt="">
                <img src="../assets/排行榜.png" alt="">
            </div>
            <div class="mid">
                <div class="mid-same" v-for="comment in comments " :key="comment.id">
                    <div class="mid-t">
                        <div>{{comment.left}}</div>
                        <div><span>{{comment.right}}</span> <img :src="cir[comment.id-1]" alt=""></div>
                    </div>
                    <div class="left">
                        <div class="mid-l">
                            <span>{{comment.title}}</span>
                            <span>{{comment.body}}</span>
                        </div>
                        <img :src="pic[comment.id-1]" alt="">
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <router-link to="/shouye" class="same-img one" active-class='oneActive'></router-link>
            <router-link to="/news" class="same-img two" active-class='twoActive'></router-link>
            <router-link to="/shouye" class="same-img thr" active-class='thrActive'></router-link>
            <router-link to="/shouye" class="same-img fou" active-class='fouActive'></router-link>
            <router-link to="/shouye" class="same-img fiv" active-class='fivActive'></router-link>
        </footer>
    </div>
</template>

<script>
import a from '../assets/490443102.jpg'
import b from '../assets/952279518.jpg'
import c from '../assets/1149137004.jpg'
import d from '../assets/558116531.jpg'
export default {
    name:'shouye',
    data:()=>({
        pic:[a,b],
        cir:[c,d]
    }),
    computed:{
        comments() { 
            return this.$store.state.comment.all
        }
    }
}


</script>

<style scoped>
.wrap{
    display:flex;
    flex-direction: column;
}
header{
    position: relative;
    height: 66px;
    flex-grow:0;
}
header img{
    width: 100%;
    position: absolute;
}
header img:nth-child(2){
    position: absolute;
    width: 90%;
    left:7%;
    bottom:10px;
}
.find{
    position: absolute;
    right:0;
    height: 66px;
    width: 52px;
}
section{
    flex-grow: 1;
    overflow: scroll;
}
section img{
    width: 100%;
}
.sec-top{
    display: flex;
    justify-content:space-around;
    width:90%;
    margin:0 auto;
    height:60px;
    align-items:center;
    margin-top:10px;
    box-shadow: 0px 3px 4px 0px #ccc inset;
    border-radius: 3px;
    margin-bottom: 10px;
}
.sec-top>img{
    width: 8%;
    height: 50%;
}
.mid-same{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.mid-t{
    display: flex;
    justify-content: space-between;
    position: relative;
}
.mid-t>div:nth-child(1){
    margin-top: 10px;
    color: cyan;
}
.mid-t>div:nth-child(2)>img{
    width: 40px;
}
.mid-t>div:nth-child(2)>span{
    position: absolute;
    right: 45px;
    top:10px;
}
.left{
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
.left>img{
    width: 40%;
    height: 20%;
    margin-top: 15px;
    margin-right: 5px;
}
.mid-l{
    width: 50%;
}
.mid-l{
    margin-left: 10px;
}
.mid-l>span:nth-child(1){
    display: block;
    font-size: 22px;
    width: 100%;
    margin-bottom: 10px;
}
footer{
    flex-grow: 0;
    height: 66px;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.same-img{
    width: 39px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
.one{
    background-image: url('../assets/首页_u39.png');
}
.oneActive{
    background-image: url('../assets/首页_u39_disabled.png');
}
.two{
    background-image: url('../assets/消息_u45.png');
}
.twoActive{
    background-image: url('../assets/消息_u45_disabled.png');
}
.thr{
    background-image: url('../assets/新建_u37.png');
}
.fou{
    background-image: url('../assets/话题_u41.png');
}
.fiv{
    background-image: url('../assets/我的_u43.png');
}
</style>
