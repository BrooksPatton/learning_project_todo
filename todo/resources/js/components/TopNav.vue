<template>
    <section>
        <h1 data-testid="top-nav-title">
            <a href="/">Todo's</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="/accounts" data-testid="create-account">create account</a>
                </li>
            </ul>
        </nav>
    </section>
</template>

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

    li {
        list-style: none;
    }
</style>
