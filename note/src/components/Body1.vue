<template>
    <ul>
        <li>
            <input type="checkbox">{{ text }}<span>×</span>
        </li>
    </ul>
</template>

<script>
export default {
    prop:[
        'isActive','text'
    ],
    name: 'Body',
    // props: {
    //     msg: String
    // }
}
</script>

<style scoped lang="scss">
ul {
    min-height: 250px;
    width: 100%;
    background-color: rgba(231, 231, 231, 0.932);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

li {
    display: flex;
    justify-content: space-between;
}

li input {
    margin-right: 10px;
}

.active {
    background: #ED774F;
    text-decoration: line-through;
}
</style>