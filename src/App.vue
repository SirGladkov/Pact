<template>
    <div class="main">
        <div class="message">
            <img class="messageImg" src="./megia/img1.jpg"/>
            <div class="messageConteiner">
                <h3>Чат 1</h3>
                <span>Текст 1</span>
            </div>
            <div>
                <span>19:48</span>
                <div class="messageConteinerIcon">1</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
.main{
    background: #8BABD8;
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
}
.messageConteinerIcon {
    display: flex;
    background: #78E378;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    width: 16px;
    height: 16px;
    size: 12px;
    
}
</style>