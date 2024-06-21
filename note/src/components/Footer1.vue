<template>
    <div class="count">
        <div>未完成</div>
        <span>全部</span>
        <span>已完成</span>
        <span>未完成</span>
        <span>清除已完成</span>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    // props: {
    //     msg: String
    // }
}
</script>

<style scoped lang="scss">
.count {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.show {
    background-color: #ED774F;
    ;
}
</style>