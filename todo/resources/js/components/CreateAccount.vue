<template>
    <section>
        <h1>Create new account</h1>
        <form action="/accounts" method="post">
            <div>
                <label for="email">email <span class="required">required</span></label>
            </div>
            <div>
                <input type="email" name="email" id="email" validate required>
            </div>
            <div>
                <label for="username">name <span class="required">required</span></label>
            </div>
            <div>
                <input type="username" name="username" id="username" validate required>
            </div>
            <div>
                <label for="password">password <span class="required">required</span></label>
            </div>
            <div>
                <input type="password" name="password" id="password" validate required>
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
    props: ['csrftoken']
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
    }

    .required {
        color: red;
    }
</style>
