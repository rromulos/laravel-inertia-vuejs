<template>
    <div>
        <h1>Postsx {{ name }}</h1>

        <QBtn color="secondary" label="Click this Button" />

        <ul v-for="post in posts" :key="post.id">
            <li>
                <h2>
                    {{ post.id }} - {{ post.title }}
                </h2>
                <p>
                    {{ post.content }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PageHome',
        props: {
            posts: Object
        },
    }
</script>

<style lang="scss" scoped>

</style>
