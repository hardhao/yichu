<template>
    <div class="wrap">
        <header>
            <span>动态 DYNAMC</span>
            <span>聊天 CHAT</span>
        </header>
        <section>
            <div class="box">
              <div class="set-t">
                <div>一起说:</div>
                    <div class="sec-t-b">
                        <div class="pic">
                            <img src="../assets/1984766224.jpg" alt="">
                            <span></span>
                            <div class="word" v-for="comment in comments" :key='comment.id'>
                                <span>
                                    {{comment.title}}
                                </span>
                                <span>
                                    {{comment.body}}
                                </span>
                                <span>最新更新:</span>
                                <span>虽然你又胖又丑</span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="box">
                <div class="sec-m">
                    <div> <span>让他回信:</span>  <span>查看全部></span> </div>
                    <div class="sec-m-p">
                        <div class="sec-m-p-l">
                            <img src="../assets/1956975231.jpg" alt="">
                            <span>岁月寄歌</span>
                            <span>我很碎碎念</span>
                        </div>
                        <div class="sec-m-p-l">
                            <img src="../assets/675590901.jpg" alt="">
                            <span>岁月寄歌</span>
                            <span>我很碎碎念</span>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="sec-bottom"></div>
        </section>
        <Footer />
    </div>
</template>
<script>
import Footer from './Footer'
export default {
    name:'news',
    components:{
        Footer
    },
    computed:{
        comments(){
            console.log(this.$store.state.comment.dongtai)
            return this.$store.state.comment.dongtai
        }
    }
}
</script>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
}
header{
    background-image: url('../assets/u48.png');
    padding-top: 20px;
    padding-bottom: 20px;
    flex-grow: 0;
    display: flex;
    justify-content: space-around;
}
header>span{
    width: 50px;
    text-align: center;
    font-size: 12px;
}
section{
    flex-grow: 1;
    overflow: scroll;
}
.box{
    border-bottom: 5px solid rgb(236, 232, 232);
    padding-bottom: 30px;
}
.set-t{
    padding-left: 5%;
}
.set-t>div:nth-child(1){
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #9e9e9e;
}
.sec-m>div:nth-child(1){
    width: 93%;
    padding-left: 5%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
}
.sec-m>div:nth-child(1)>span{
    color: #9e9e9e;
    font-size: 12px;
    font-weight: bold;
}
.sec-m>div:nth-child(1)>span:nth-child(2){
    text-decoration: underline;
}
.sec-m-p{
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
}
.sec-m-p-l{
    display: flex;
    flex-direction: column;
}
.sec-m-p-l>img{
    width: 80%;
    height: 80%;
    border-radius:10px;
}
.sec-m-p-l>span{
    margin-left: 25%;
    margin-top: 10px;
    font-size: 12px;
}
.sec-m-p-l>span:nth-child(3){
    margin-top: 0;
    margin-left:21%;
    color: #9e9e9e;
}
.pic{
    display: flex;
    position: relative;
}
.pic>img{
    width: 28%;
    height: 35%;
    border-radius: 10px;
    margin-right: 10px;
}
.pic>span{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: rgb(248, 191, 5);
    position: absolute;
    left:25%;
    top:-5%;
    border: 2px solid #fff;
}
.word>span{
    display: block;
}
.word>span:nth-child(1){
    font-size: 14px;
    margin-bottom: 10px;
}
.word>span:nth-child(2){
    font-size: 12px;
    color: rgb(182, 179, 179);
}
.word>span:nth-child(3){
    margin-top: 25px;
    font-size: 12px;
    color: #ccc;
}
.word>span:nth-child(4){
    margin-top: 5px;
    font-size: 12px;
    color: rgb(155, 154, 154);
}

</style>
