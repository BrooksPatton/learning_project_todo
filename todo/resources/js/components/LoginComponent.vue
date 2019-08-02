<template>
    <section>
        <h1>Login</h1>
        <button-link to="/" label="back"></button-link>
        <form action="/accounts/login" method="POST">
            <form-required-text></form-required-text>
            <email-form-field label="email" name="email" required=true :errors="errors"></email-form-field>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            errors: ['one', 'two', 'three']
        }
    }
}
</script>


<style scoped>
    section {
        width: 25%;
        margin: 0 auto;
    }
</style>
