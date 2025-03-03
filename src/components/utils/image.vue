<template>
    <div class="w-80 h-80 bg-white rounded-lg overflow-hidden flex justify-center items-center border shadow-md relative">
        <img :src="imageSrc" alt="Image" class="w-full h-full object-contain" /> <!-- transition-transform duration-300 cursor-pointer hover:scale-105 hover:opacity-50 -->
        <!-- @click="showPreview(index)" -->
        <!-- <div class="absolute">Preview</div> -->
        <!-- <vue-easy-lightbox :visible="visible" :imgs="imageList" :index="index" @hide="visible = false" /> -->
    </div>
</template>

<script>
// import VueEasyLightbox from "vue-easy-lightbox";
export default {
    name: 'Image',
    props: ['imageSrc'],
    // components: { VueEasyLightbox },
    // data - visible: false, and index: 0,
    // methods: {
    //     showPreview(index) {
    //         this.index = index;
    //         this.visible = true;
    //     },
    // },
}
</script>

<style scoped>
</style>
