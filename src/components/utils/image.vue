<template>
    <div class="border rounded-lg overflow-hidden shadow-md w-64">
        <img :src="imageSrc" alt="Image" class="w-full" />
    </div>
</template>

<script>
export default {
    name: 'Image',
    props: ['imageSrc']
}
</script>

<style scoped>
</style>
