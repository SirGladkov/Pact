<template>
    <div class="wrapperAll">
        <UserList :users="usersArray" v-model="selectorUser" />
        <ChatWindow :user="selectorUser" v-model="selectorUser"/>
    </div>
</template>

<script setup>
import ChatWindow from './components/ChatWindow.vue';
import UserList from './components/UserList.vue';
import {reactive, ref, watch} from 'vue';

let usersArray = reactive([
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5', messages:[{id:1, message:'Какоe-то важное сообщение от меня',time:'20:43'}] },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3', messages:[{id:2, message:'Какоe-то важное сообщение мне',time:'20:42'}] },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41', messages:[{id:3, message:'Какоe-то важное сообщение от меня',time:'20:41'}] },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10', messages:[{id:4, message:'Какоe-то важное сообщение мне',time:'20:44'}] },
                {id:5, title:'Чат 1', body: 'Текст 1',quantity: '5', messages:[{id:5, message:'Какоe-то важное сообщение от меня',time:'20:45'}] },
            ],
          )
let selectorUser=ref('')

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