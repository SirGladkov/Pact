<template>
    <div class="wrapperAll">
        <UserList :users="users"/>
        <ChatWindow/>
    </div>
</template>

<script setup >
import ChatWindow from './components/ChatWindow.vue';
import UserList from './components/UserList.vue';
import {reactive, ref, watch} from 'vue';

let users = reactive( [
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:5, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:6, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:7, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:8, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:9, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:21, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:32, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:44, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:13, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:25, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:36, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:47, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:18, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:29, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:31, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:42, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:143, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:24, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:35, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:46, title:'Чат 4', body: 'Текст 4',quantity: '10' },
            ])

let search=ref('')


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