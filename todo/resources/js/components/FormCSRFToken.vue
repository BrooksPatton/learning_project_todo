<template>
    <div>
        <input type="hidden" name="_token" v-bind:value="csrftoken">
    </div>
</template>

<script>
export default {
    props: ['csrftoken']
}
</script>