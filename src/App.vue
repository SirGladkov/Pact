<template>
    <div class="wrapperAll">
        <UserList/>
        <ChatWindow/>
    </div>
</template>

<script>
import ChatWindow from './components/ChatWindow.vue';
import UserList from './components/UserList.vue';


export default {
    components:{
        UserList,
        ChatWindow,

    },
    data(){
        return {
            
        }
    },
    methods:{
        

    }
}
</script>

<style lang="scss">
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 .wrapperAll{
    display: flex;
 }
::-webkit-scrollbar {
  width: 4px;   /* ширина всей полосы прокрутки */
}
::-webkit-scrollbar-track {
  background: #F5F5F5;  /* цвет зоны отслеживания */
}

::-webkit-scrollbar-thumb {
  background-color: #011627;   /* цвет бегунка */
  border-radius: 20px;             /* округлось бегунка */
  border: 3px solid #707991;  /* отступ вокруг бегунка */
}

</style>