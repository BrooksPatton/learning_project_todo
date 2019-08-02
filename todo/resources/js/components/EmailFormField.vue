<template>
    <div>
        <div>
            <label v-bind:for="name">{{label}}<span class="required" v-if="required"> *</span></label>
        </div>
        <div v-for="message in errors">
            <p class="error">{{message}}</p>
        </div>
        <div>
            <input type="email" v-bind:id="name" v-bind:name="name" v-bind:required="required" validate >
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'name', 'required', 'errors']
}
</script>

<style scoped>
    div {
        margin: 1rem 0;
    }

    label {
        font-weight: bold;
    }

    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid black;

    }

    .error, .required {
        color: red;
    }
</style>
