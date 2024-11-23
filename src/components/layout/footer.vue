<script setup>
</script>

<template>
    <div id="footerDiv" class="fade-in flex justify-between items-center flex-wrap px-5 bg-white border-t border-gray-200">
        <div>All Rights Reserved.</div>
        <div>
            <span class="inline sm:hidden">SMT</span>
            <span class="hidden sm:inline">Sharif Memorial Trust (SMT)</span>
            <span> © {{ new Date().getFullYear() }}.</span>
        </div>
    </div>
</template>

<style scoped>

#footerDiv {
    position: relative;
    bottom: 0;
    left: 0;
    height: 50px;
}

</style>
