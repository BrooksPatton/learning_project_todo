<template>
    <section>
        <h1>Create new account</h1>
        <div>
            <a href="/">back</a>
        </div>
        <form action="/accounts" method="post">
            <div>
                <p><span class="required">*</span> - required fields</p>
            </div>
            <div>
                <label for="email">email <span class="required">*</span></label>
            </div>
            <div data-testid="email" v-if="serverErrors.email && serverErrors.email.length > 0">
                <p class="error" v-for="message in serverErrors.email">
                    {{message}}
                </p>
            </div>
            <div>
                <input type="email" name="email" id="email" validate required>
            </div>
            <div>
                <label for="username">name <span class="required">*</span></label>
            </div>
            <div data-testid="username" v-if="serverErrors.username && serverErrors.username.length > 0">
                <p class="error" v-for="message in serverErrors.username">
                    {{message}}
                </p>
            </div>
            <div>
                <input type="username" name="username" id="username" validate required>
            </div>
            <div>
                <label for="password">password <span class="required">*</span></label>
            </div>
            <div data-testid="password" v-if="serverErrors.password && serverErrors.password.length > 0">
                <p class="error" v-for="message in serverErrors.password">
                    {{message}}
                </p>
            </div>
            <div>
                <input type="password" name="password" id="password" validate required>
            </div>
            <div>
                <label for="password-confirmation">password confirmation <span class="required">*</span></label>
            </div>
            <div data-testid="password_confirmation" v-if="serverErrors.password_confirmation && serverErrors.password_confirmation.length > 0">
                <p class="error" v-for="message in serverErrors.password_confirmation">
                    {{message}}
                </p>
            </div>
            <div>
                <input type="password" name="password_confirmation" id="password-confirmation" validate required>
            </div>
            <div>
                <input type="hidden" name="_token" v-bind:value="csrftoken">
            </div>
            <div>
                <button>create account</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    props: ['csrftoken', 'errors'],
    data() {
        return {
            serverErrors: JSON.parse(this.errors)
        }
    }
}
</script>


<style scoped>
    section {
        width: 25%;
        margin: 0 auto;
    }

    div {
        margin-top: 1rem;
    }

    input {
        width: 100%;
        height: 2rem;
        border: none;
        border-bottom: 1px solid black;
    }

    button {
        padding: 1rem;
        background-color: lightseagreen;
        border-radius: 5px;
        border: none;
    }

    .required {
        color: red;
    }

    a {
        text-decoration: none;
        background-color: lightseagreen;
        padding: 0.5rem;
        border-radius: 5px;
    }

    label {
        font-weight: bold;
    }

    .error {
        color: brown;
    }
</style>
