<template>
    <div class="main" v-if="user?.title">
            <div class="mainTopBar" >
                <div class="mainTopBarUser">
                    <img class="mainTopBarUserImg" src="../megia/img1.jpg"/>
                    <div class="mainTopBarUserInfo">
                        <h3>{{ user?.title }}</h3>
                        <p>был в сети 15 мин назад</p>
                    </div>
                </div>
                <div class="mainTopBarIcon">
                    <img src="../megia/Lupa.svg">
                    <img src="../megia/Mobile.svg">
                    <img src="../megia/Spred.svg">
                </div>
            </div>
            <div class="mainDialog" >
                <div class="Date" >
                    <span class="mainDialogDate">Сегодня</span>
                </div>
                <div :key="message.id" v-for="(message, index) in user.messages">
                    <div class="MyMessage" v-if="index%2==0">
                        <div class="mainDialogConteiner-MyMessege">
                            <p>{{message.message}}</p>
                            <div class="mainDialogConteinerInfo-MyMessage">
                                <p>{{ message.time }}</p>
                                <img src="../megia/Daw.svg">
                            </div>
                        </div>
                    </div>
                    <div class="OtherMessage" v-else>
                        <div class="mainDialogConteiner-OtherMessage">
                            <p>{{message.message}}</p>
                            <div class="mainDialogConteinerInfo-OtherMessage">
                                <p>{{ message.time }}</p>
                                <img src="../megia/DawBlack.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainMessage">
                <div class="mainMessageInputBar">
                    <div class="mainMessageInputBarText" >
                        <img src="../megia/Smile.svg">
                        <input
                        :value="search"
                        @input="onSearchMessage"
                        @keyup.enter="onChangeSelectorMessage"
                        type="text" 
                        placeholder="Напишите сообщение">
                    </div>
                    <div @click="()=>onChangeSelectorMessage()">
                        <img src="../megia/Enter.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="mainNone" v-else>
            <h3>Выберите кому бы хотели написать</h3>
        </div>
</template>

<script setup>
import {computed, reactive, ref, onUpdated,defineProps,defineModel} from "vue";

const {user} = defineProps({
    user:{
        type: Object,
        required: true,
    }
})
const search=ref('')
const selectorUser=defineModel()

const onSearchMessage=(value)=>{
    search.value=value.target.value;

}
const onChangeSelectorMessage=()=> {
    if (search.value.trim()===''){
        return
    }
    selectorUser.value={...selectorUser.value, messages:[...selectorUser.value.messages, {message:search.value, time:'10:00',id:Date.now()}]};
    search.value='';
}

</script>

<style lang="scss">
.main{
    background: #8BABD8;
    width: 100vw;
}
.mainNone{
    background: #8BABD8;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        text-align: center;
        border-radius: 12px;
        background: rgba(61, 112, 184, 0.6);
        color: rgba(255, 255, 255, 1);
        padding: 4px 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
}
.mainTopBar{
    background: #FFFFFF;
    height: 56px;
    border-bottom: 1px solid #D9DCE0;
    padding: 8px 16px 8px 16px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 371px;
    right: 0px;
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
    img {
        width: 24px;
        height: 24px;
    }

}
.mainDialog{
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    gap:24px;
    height: 760px;
    overflow-y: scroll;
    margin-bottom: 16px;
}
.mainDialogDate{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(61, 112, 184, 0.6);
    color: rgba(255, 255, 255, 1);
    width: 90px;
    height: 30px;
    padding: 4px 12px;
}
.Date{
    display: flex;
    justify-content: center;
}
.OtherMessage{
    display: flex;
    justify-content: start;
    margin-left: 32px;
}
.MyMessage{
    display: flex;
    justify-content: end;
    margin-right: 32px;
}
.mainDialogConteiner-MyMessege{
    border-radius: 12px;
    background: rgba(120, 227, 120, 1);
    padding: 4px 12px 4px 12px;
    max-width: 285px;
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
}
.mainDialogConteiner-OtherMessage{
    border-radius: 12px;
    background: #FFFFFF;
    padding: 4px 12px 4px 12px;
    max-width: 285px;
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
}

.mainDialogConteinerInfo-MyMessage{
    display: flex;
    justify-content: end;
    gap: 4px;
    color: white;
}
.mainDialogConteinerInfo-OtherMessage{
    display: flex;
    justify-content: end;
    gap: 4px;
    color: black;
}

.mainMessageInputBar{
    background: #F5F5F5;
    height: 56px;
    padding: 8px 16px 8px 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 32px 0px 32px;
    position: fixed;
    bottom: 16px;
    right: 0px;
    left: 371px;
}
.mainMessageInputBarText{
    display: flex;
    align-items: center;
    gap: 16px;
    width: 95%;
    input{
    border: none;
    outline: none;
    background: none;
    float: right;
    font-size: 16px;
    color: #011627;
    width: 95%;
    }
}
</style>