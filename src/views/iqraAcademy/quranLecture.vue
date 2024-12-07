<script setup>

import QuranLecuturePDF from '@/assets/pdfs/iqraTaleemUlQuranAcademy/QuranLecture/lecture.pdf';
import OpenInNewTabImage from '@/assets/images/iqraTaleemUlQuranAcademy/QuranLecture/openInNewTab.svg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-center sm:text-left bg-green-100">
        <h1 class="font-extrabold text-4xl mb-5">Al Quran Lecture</h1>
        <div class="font-medium mb-5">English Translation of Quran Audio Lectures: (From Surat ul-Fateha to Surat ul-Baqara Verse 230)</div>
        <div class="border rounded-lg overflow-hidden shadow-md w-3/4 mx-auto">
            <!-- PDF Preview -->
            <iframe :src="QuranLecuturePDF" class="w-full h-96" frameborder="0"></iframe>

            <a :href="QuranLecuturePDF" target="_blank"
                class="block text-center bg-green-500 text-white py-2 px-4 rounded-md rounded-t-none">
                <div class="flex justify-center items-center">
                    <span class="mr-1">Open Full PDF</span>
                    <img :src="OpenInNewTabImage" alt="" class="h-5" />
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
</style>
