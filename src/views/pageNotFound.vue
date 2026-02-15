<script setup>
</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-xl mx-auto text-center">
            <div class="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4">404</div>
            <div class="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
            <p class="text-lg text-gray-600 mb-8">Page not found. The page you are looking for does not exist.</p>
            <button @click="$router.push('/')"
                class="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
                Back to Home
            </button>
        </div>
    </div>
</template>

<style scoped>
</style>
