<template>
    <div class="loading">
        <h2>loading...</h2>
    </div>
</template>

<script setup>

</script>

<style scoped>
.loading {
    display: flex;
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgb(0,0,0,.2);
    justify-content: center;
    align-items: center;
}
</style>