<template>
    <div class="wrapperAll">
        <div class="sidebarAll">
            <div class="sidebar">
                <img src="./megia/Vector.svg"/>
                <div class="sidebarSearch">
                    <img src="./megia/Lupa.svg">
                    <input class="sidebarSearchText" type="text" placeholder="Поиск">
                </div>
            </div>
            <div class="message" v-bind:key="message.id" v-for="message in messages">
                <img class="messageImg" src="./megia/img1.jpg"/>
                <div class="messageConteiner">
                    <div>
                        <h3>{{ message.title }}</h3>
                        <span>19:48</span>
                    </div>
                    <div>
                        <span>{{ message.body }}</span>
                        <div class="messageConteinerIcon">{{ message.quantity }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="mainTopBar">
                <div class="mainTopBarUser">
                    <img class="mainTopBarUserImg" src="./megia/img1.jpg"/>
                    <div class="mainTopBarUserInfo">
                        <h3> Чат 2</h3>
                        <p>был в сети 15 мин назад</p>
                    </div>
                </div>
                <div class="mainTopBarIcon">
                    <img src="./megia/Lupa.svg">
                    <img src="./megia/Mobile.svg">
                    <img src="./megia/Spred.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            messages:[
                {id:1, title:'Чат 1', body: 'Текст 1',quantity: '5' },
                {id:2, title:'Чат 2', body: 'Текст 2',quantity: '3' },
                {id:3, title:'Чат 3', body: 'Текст 3',quantity: '41' },  
                {id:4, title:'Чат 4', body: 'Текст 4',quantity: '10' },
            ]
        }
    }
}
</script>

<style>
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 .wrapperAll{
    display: flex;
 }
.main{
    background: #8BABD8;
    width: 100vw;
    height: 100vh;
}
.mainTopBar{
    background: #FFFFFF;
    height: 56px;
    border-bottom: 1px solid #D9DCE0;
    padding: 8px 16px 8px 16px;
    display: flex;
    justify-content: space-between;
}
.mainTopBarUser{
    display: flex;
    justify-content: space-between;
    gap: 16px;
}
.mainTopBarUserImg{
    border-radius: 20%;
    width: 40px;
    height: 40px;
    gap: 0px;
    border-radius: 100px;
}
.mainTopBarUserInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.mainTopBarIcon{
    display: flex;
    gap: 32px;
    align-items: center;

}
.mainTopBarIcon img{
    width: 24px;
    height: 24px;
}
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
.message{
    width: 370px;
    background: #FFFFFF;
    padding: 12px 16px 12px 16px;
    display: flex;
    justify-content: space-between;
}

.messageImg{
    border-radius: 20%;
    width: 48px;
    height: 48px;
    gap: 0px;
    border-radius: 100px;
}
.messageConteiner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
}
.messageConteiner div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.messageConteinerIcon {
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