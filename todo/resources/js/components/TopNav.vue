<template>
    <section>
        <h1 data-testid="top-nav-title">
            <a href="/">Todo's</a>
        </h1>
        <nav>
            <ul v-if="loggedIn">
                <li>
                    Logged in as {{currentUser.username}}
                </li>
                <li>
                    <a href="/accounts/settings">Settings</a>
                </li>
                <li>
                    <a href="/accounts/logout" data-testid="logout">Logout</a>
                </li>
            </ul>
            <ul v-else>
                <li>
                    <a href="/accounts" data-testid="create-account">create account</a>
                </li>
                <li>
                    <a href="/accounts/login" data-testid="login">login</a>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            loggedIn: this.user ? true : false,
            currentUser: JSON.parse(this.user)
        }
    }
}
</script>

<style scoped>
    section {
        background-color: darkslateblue;
        padding: 1rem;
        color: lightcyan;
        display: flex;
        justify-content: space-between;
        line-height: 100%;
    }

    a {
        text-decoration: none;
        color: lightcyan;
    }

    ul {
        display: flex;
    }

    li {
        list-style: none;
        margin-left: 2rem;
    }
</style>
