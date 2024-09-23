<template>
    <div class="sidebarAll">
            <div class="sidebar">
                <img src="../megia/Vector.svg"/>
                <div class="sidebarSearch" >
                    <img src="../megia/Lupa.svg">
                    <input
                    @input="onSearchChange"
                    class="sidebarSearchText" 
                    type="text" 
                    placeholder="Поиск">
                </div>
            </div>
            <div class="userScrolConteiner" @keyup.esc="onChangeSelectorMessage">
                <div :class="[user.id===selectorUser.id ? 'user selected' : 'user']"  v-bind:key="user.id" v-for="user in filterableChatInfo" @click="()=>onChangeSelectorUser(user)" >
                    <img class="userImg" src="../megia/img1.jpg"/>
                    <div class="userConteiner">
                        <div>
                            <h3>{{ user.title }}</h3>
                            <span>19:48</span>
                        </div>
                        <div>
                            <span>{{ user.body }}</span>
                            <div class="userConteinerIcon">{{ user.quantity }}</div>
                        </div>
                    </div>
                </div>
            </div>    
    </div>
</template>

<script setup>
import {computed, reactive, ref, onUpdated,defineProps,defineModel} from "vue";

const {users} = defineProps({
    users:{
        type: Array,
        required: true,
    }
})

const search=ref('')

const onSearchChange=(value)=>{
    search.value=value.target.value;
}

const filterableChatInfo=computed(()=>users?.filter((chatItem)=>chatItem.title.includes(search.value)))

const selectorUser = defineModel()
const onChangeSelectorUser=(users)=> {
    selectorUser.value=users;
}

const getActive = (user)=>{
    return `user ${user.id===selectorUser.id ? 'selected' : ''}`
}
</script>

<style lang="scss">
.sidebarAll{
    border-right: 1px solid #D9DCE0;
}
@media (max-width:770px){
    
    
    
}
.sidebar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 370px;
    padding: 16px 8px 16px 8px;
    background: #FFFFFF;
    height: 56px;
    @media (max-width:770px){
        width: 80px;
        transition: all 0.4s ease-out;
        
    }
    
}
.sidebarSearch{
    background: #F5F5F5;
    height: 40px;
    width: 276px;
    padding: 8px 16px 8px 16px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width:770px){
        display: none;
    }
}
.sidebarSearchText{
    border: none;
    outline: none;
    background: none;
    float: right;
    size: 20px;
}
.selected{
    background: #F5F5F5 !important;
}
.user{
    width: 370px;
    background: #FFFFFF;
    padding: 12px 16px 12px 16px;
    display: flex;
    justify-content: space-between;
    cursor:pointer;
    transition: all 0.3s ease-out;
    @media (max-width:770px){
        width: 80px;
    }
}
.user:hover{
    background: #F5F5F5;
}
.userImg{
    border-radius: 20%;
    width: 48px;
    height: 48px;
    gap: 0px;
    border-radius: 100px;
}
.userScrolConteiner{
    overflow-y: scroll;
    height: 800px;
}
.userConteiner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
    div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    @media (max-width:770px){
        display: none;
    }
}
.userConteinerIcon {
    display: flex;
    background: #78E378;
    color: #FFFFFF;
    align-items: center;
    justify-content: center !important;
    border-radius: 100px;
    width: 16px;
    height: 16px;
    size: 12px;
    padding: 6px;
    @media (max-width:770px){
        display: none;
    }
    
}
</style>