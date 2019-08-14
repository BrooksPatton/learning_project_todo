<template>
    <section>
        <h1>Login</h1>
        <button-link to="/" label="back"></button-link>
        <form action="/accounts/login" method="POST">
            <form-required-text></form-required-text>
            <email-form-field label="email" name="email" required=true :errors="errors.email"></email-form-field>
            <password-form-field label="password" name="password" required=true :errors="errors.password"></password-form-field>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            errors: {
                email: [],
                password: []
            }
        };
    }
}
</script>


<style scoped>
    section {
        width: 25%;
        margin: 0 auto;
    }
</style>
