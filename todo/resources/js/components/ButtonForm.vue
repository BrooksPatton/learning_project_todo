<template>
    <div>
        <button>{{name}}</button>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
button {
    padding: 1rem;
    background-color: lightseagreen;
    border-radius: 5px;
    border: none;
}
</style>