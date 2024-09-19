<template>
  <div>
    <div class="sidebarAll">
            <div class="sidebar">
                <img src="../megia/Vector.svg"/>
                <div class="sidebarSearch">
                    <img src="../megia/Lupa.svg">
                    <input class="sidebarSearchText" type="text" placeholder="Поиск">
                </div>
            </div>
            <div class="userScrolConteiner">
                <div class="user" v-bind:key="user.id" v-for="user in users">
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
  </div>
</template>

<script>
export default {
    data(){
        return {
            users:[
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
            ],
            
        }
    }
}
</script>

<style lang="scss">
.sidebarAll{
    border-right: 1px solid #D9DCE0;
}
.sidebar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 370px;
    padding: 16px 8px 16px 8px;
    background: #FFFFFF;
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
}
.sidebarSearchText{
    border: none;
    outline: none;
    background: none;
    float: right;
    size: 20px;
}
.user{
    width: 370px;
    background: #FFFFFF;
    padding: 12px 16px 12px 16px;
    display: flex;
    justify-content: space-between;
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
    
}
</style>