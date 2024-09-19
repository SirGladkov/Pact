<template>
    <div class="main">
            <div class="mainTopBar">
                <div class="mainTopBarUser">
                    <img class="mainTopBarUserImg" src="../megia/img1.jpg"/>
                    <div class="mainTopBarUserInfo">
                        <h3> Чат 2</h3>
                        <p>был в сети 15 мин назад</p>
                    </div>
                </div>
                <div class="mainTopBarIcon">
                    <img src="../megia/Lupa.svg">
                    <img src="../megia/Mobile.svg">
                    <img src="../megia/Spred.svg">
                </div>
            </div>
            <div class="mainDialog">
                <div class="Date" >
                    <span class="mainDialogDate">Сегодня</span>
                </div>
                <div class="MyMessage">
                    <div class="mainDialogConteiner-MyMessege">
                        <p>Какой-то мой текст</p>
                        <div class="mainDialogConteinerInfo-MyMessage">
                            <p>14:01</p>
                            <img src="../megia/Daw.svg">
                        </div>
                    </div>
                </div>
                <div class="OtherMessage">
                    <div class="mainDialogConteiner-OtherMessage">
                        <p>Какой-то чужой текст</p>
                        <div class="mainDialogConteinerInfo-OtherMessage">
                            <p>14:01</p>
                            <img src="../megia/DawBlack.svg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainMessage">
                <div class="mainMessageInputBar">
                    <div class="mainMessageInputBarText" >
                        <img src="../megia/Smile.svg">
                        <input 
                        type="text" 
                        placeholder="Напишите сообщение">
                    </div>
                    <img src="../megia/Enter.svg">
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main{
    background: #8BABD8;
    width: 100vw;
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
}
.mainDialogConteiner-OtherMessage{
    border-radius: 12px;
    background: #FFFFFF;
    padding: 4px 12px 4px 12px;
    max-width: 285px;
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
    input{
    border: none;
    outline: none;
    background: none;
    float: right;
    font-size: 16px;
    color: #011627;
    }
}
</style>