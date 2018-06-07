<template>
    <div class="wrap">
        <header>
            <router-link active-class='h-oneActive' to='/news'>动态 DYNAMC</router-link>
            <router-link active-class='h-twoActive' to='/chat'>聊天 CHAT</router-link>
        </header>   
        <section>
            <div class="sec-top">
                <input type="text" placeholder="搜索联系人和动态">
            </div>
            <div class="sec-bot" v-for="comment in comments" :key="comment.id">
                <img :src="comment.src" alt="">
                <div class="word">
                    <div class="title">{{comment.title}}</div>
                    <div class="text">{{comment.text}}</div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name:'chat',
    components:{
        Footer
    },
    computed:{
        comments(){
            return this.$store.state.comment.chat
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
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 20px;
    padding-bottom: 13px;
    flex-grow: 0;
    display: flex;
    justify-content: space-around;
}
header>a{
    color: #000;
    width: 50px;
    text-align: center;
    font-size: 12px;
}
.h-oneActive{
    color: #fff;
}
.h-twoActive{
    color: #fff;
}
.sec-top{
    width: 100%;
    height: 50px;
    background-color: rgb(230, 230, 230);
    padding-top: 10px;
    padding-bottom: 10px;
}
input{
    width: 90%;
    margin-left: 5%;
    height:100%;
    text-indent: 5%;
    font-size: 12px;
    border: none;
    outline: none;
    border-radius: 8px;
}
section{
    flex-grow: 1;
}
.sec-bot{
    display: flex;
}
.sec-bot>img{
    width: 10%;
    height: 10%;
    margin: 20px;
}
.word{
    margin-top: 15px;
}
.title{
    font-size: 14px;
    color: rgb(104, 243, 92);
}
.text{
    font-size: 12px;
    color: rgb(129, 129, 129);
    font-weight: bold;
    margin-top: 10px;
}
</style>
