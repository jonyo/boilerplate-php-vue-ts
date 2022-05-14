<template>
    <h1 class="title">
        {{ title }}
    </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NiceTitle',
    props: {
        title: {
            type: String,
            default: 'Nice Default Title',
        }
    },
})
</script>

<style scoped>
.title {
    color: var(--main-dark);
}
</style>
