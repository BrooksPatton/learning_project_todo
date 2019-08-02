<template>
    <div>
        <a v-bind:href="to">{{label}}</a>
    </div>
</template>

<script>
export default {
    props: ['to', 'label']
}
</script>

<style scoped>
a {
        text-decoration: none;
        background-color: lightseagreen;
        padding: 0.5rem;
        border-radius: 5px;
    }

    div {
        margin: 1rem 0;
    }
</style>
