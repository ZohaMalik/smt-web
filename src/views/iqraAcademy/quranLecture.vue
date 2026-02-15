<script setup>

import QuranLecuturePDF from '@/assets/pdfs/iqraTaleemUlQuranAcademy/QuranLecture/lecture.pdf';
import OpenInNewTabImage from '@/assets/images/iqraTaleemUlQuranAcademy/QuranLecture/openInNewTab.svg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <!-- Hero -->
            <div class="relative mb-12 rounded-3xl border border-gray-100 bg-gradient-to-br from-green-50/70 via-white to-white p-8 md:p-10 overflow-hidden text-center">
                <div class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-100/70 blur-2xl"></div>
                <div class="absolute -left-12 -bottom-12 h-28 w-28 rounded-full bg-green-100/60 blur-2xl"></div>
                <div class="relative">
                    <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Al‑Quran Lecture Transcriptions</h1>
                    <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Urdu with English Translation — Volume 1 (Surah Fatihah, Al Baqarah & Aal e Imran)
                    </p>
                    <div class="mt-6 flex flex-wrap justify-center gap-2">
                        <span class="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">Bilingual</span>
                        <span class="text-xs font-semibold text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full">Volume 1</span>
                        <span class="text-xs font-semibold text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full">PDF Format</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                <!-- Preview -->
                <div class="modern-card border border-gray-100 p-0 overflow-hidden bg-gray-50">
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                        <div>
                            <div class="text-sm text-gray-500">Document Preview</div>
                            <div class="text-lg font-bold text-gray-900">Al‑Quran Lecture (Vol. 1)</div>
                        </div>
                        <span class="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">PDF</span>
                    </div>
                    <iframe :src="QuranLecuturePDF" class="w-full h-[420px] md:h-[560px]" frameborder="0"></iframe>
                    <div class="px-6 py-4 bg-white border-t border-gray-100 text-sm text-gray-500">
                        Preview only. Use the actions on the right to open or download.
                    </div>
                </div>

                <div class="space-y-6">
                    <!-- Quick Actions -->
                    <div class="modern-card border border-gray-100 p-6 md:p-7">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-xl font-bold text-gray-900">Quick Actions</h2>
                            <span class="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">Ready</span>
                        </div>
                        <div class="flex flex-col gap-3">
                            <a :href="QuranLecuturePDF" target="_blank"
                                class="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
                                <span class="mr-2">Open Full PDF</span>
                                <img :src="OpenInNewTabImage" alt="" class="h-5" />
                            </a>
                            <a :href="QuranLecuturePDF" download
                                class="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 font-semibold hover:border-green-300 hover:text-green-700 transition-colors">
                                Download PDF
                            </a>
                        </div>
                        <p class="text-xs text-gray-500 mt-4">
                            Tip: Use your PDF viewer’s search to find key topics quickly.
                        </p>
                    </div>

                    <!-- Info Panel -->
                    <div class="modern-card border border-gray-100 p-6 md:p-7 bg-gradient-to-br from-green-50 via-white to-white">
                        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">What You’ll Find</h2>
                        <ul class="space-y-4 text-gray-700 leading-relaxed text-base">
                            <li class="flex gap-3">
                                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                Clear Urdu text with accompanying English translation.
                            </li>
                            <li class="flex gap-3">
                                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                Focused coverage of Surah Fatihah, Al Baqarah & Aal e Imran.
                            </li>
                            <li class="flex gap-3">
                                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                Structured for study circles, teaching, and personal reading.
                            </li>
                        </ul>

                        <div class="mt-6 border border-green-100 rounded-2xl bg-white p-4">
                            <div class="text-xs text-gray-500 mb-1">Suggested Use</div>
                            <div class="text-lg font-semibold text-gray-900">Weekly study & reflection</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
