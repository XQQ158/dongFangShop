<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in img" :key="index">
                <img :src="item" alt="" >
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        props:["img"],
    }
</script>

<style lang="scss" scoped>

</style>