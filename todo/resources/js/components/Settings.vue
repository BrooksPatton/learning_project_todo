<template>
    <section>
        <button-link to="/dashboard" label="back to dashboard"></button-link>
        <h1>Settings</h1>
        <fieldset>
            <h2>Reset Password</h2>
            <form action="/accounts/reset-password" method="POST">
                <password-form-field label="Current Password" name="current_password" required="true"></password-form-field>
                <password-form-field label="New Password" name="new_password" required="true"></password-form-field>
                <form-csrf-token v-bind:csrftoken="csrftoken"></form-csrf-token>
                <button-form name="Reset Password"></button-form>
            </form>
        </fieldset>
    </section>
</template>

<script>
export default {
    props: ['csrftoken']
}
</script>

<style scoped>
    h1 {
        text-align: center;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    section > * {
        width: 80vw;
    }
</style>