<script setup>
</script>

<template>
    <div id="footerDiv" class="relative z-10 flex flex-col sm:flex-row justify-between items-center px-8 py-6 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 shadow-inner-soft mt-auto">
        <div class="text-sm font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300">
            © {{ new Date().getFullYear() }} All Rights Reserved.
        </div>
        <div class="mt-2 sm:mt-0 font-medium">
            <span class="inline sm:hidden font-bold text-green-400">SMT</span>
            <span class="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400 font-bold">Sharif Memorial Trust (SMT)</span>
        </div>
    </div>
</template>

<style scoped>
/* Footer is now flex-grow 0 and sits at the bottom nicely */
</style>
