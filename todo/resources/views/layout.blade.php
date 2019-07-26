<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>PHP, Laravel, Vue.js Todo</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app">
        <top-nav></top-nav>
        <main>
            @yield('body')
        </main>
        <app-footer></app-footer>
    </div>
    <script src="/js/app.js"></script>
</body>
</html>