<template>
    <div>
        <h2 class="font-extrabold text-4xl mb-5 max-w-screen-lg mx-auto flex items-center gap-2">
            <img :src="LeavesHeaderImage" alt="Leaves Image" width="30" /> <span>Contacts</span>
        </h2>

        <!-- Contacts & Address -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 mx-auto max-w-screen-lg text-center">
            <!-- Contacts -->
            <div class="flex flex-col justify-center items-center sm:items-start gap-4 mx-auto sm:mr-auto" style="max-width: 350px;">
                <div class="flex flex-col justify-center items-center sm:items-start">
                    <div class="font-medium">Shafqat Nawaz Malik (Chairman)</div>
                    <div class="font-medium text-green-500">+92 321 5017581</div>
                </div>
                <div class="flex flex-col justify-center items-center sm:items-start">
                    <div class="font-medium">Maj. Ashfaq A Malik (Vice Chairman)</div>
                    <div class="font-medium text-green-500">+92 321 53051831</div>
                </div>
                <div class="flex flex-col justify-center items-center sm:items-start">
                    <div class="font-medium">Engr. Imran Nawaz Malik (Gen. Secretary)</div>
                    <div class="font-medium text-green-500">+92 300 8561706</div>
                </div>
                <div class="flex flex-col justify-center items-center sm:items-start">
                    <div class="font-medium">Khaliq A Malik (Finance Secretary)</div>
                    <div class="font-medium text-green-500">+92 321 5188747</div>
                </div>
            </div>
            <!-- Address -->
            <div class="custom-border rounded-xl flex flex-col justify-center items-start gap-4 p-7 mx-auto sm:ml-auto text-left" style="max-width: 400px;">
                <div>POSTAL ADDRESS</div>

                <div>
                    <div>Head Office</div>
                    <div class="text-green-500">Mohallah Daras Pura, Near Govt Girls School, Khorata Road, Kotli Loharan, East, Tehsil & District - Sialkot</div>
                </div>

                <div>
                    <div>Branch Office</div>
                    <div class="text-green-500">Office No. 6, 1st Floor, Moon Plaza, Block 1-H, F-10 Markaz, Islamabad - Pakistan</div>
                </div>
            </div>
        </div>

        <!-- Map -->
        <div class="max-w-screen-lg mx-auto rounded-lg shadow-lg border mb-5" style="height: 350px;">            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.9210547360567!2d74.51486079629264!3d32.5816294018691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eedaa3c9dc063%3A0x6b6266ed42198552!2sSHARIF%20MEMORIAL%20TRUST!5e0!3m2!1sen!2sus!4v1733603450201!5m2!1sen!2sus" 
                style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"></iframe>
        </div>

        <!-- Buttons below map -->
        <div class="flex justify-center sm:justify-end items-center gap-3 max-w-screen-lg mx-auto">
            <div class="flex justify-center items-center rounded-lg bg-green-100 p-1 w-11 h-11 cursor-pointer hover:scale-110" 
                title="Facebook">
                <a target="_blank" href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61553780662961&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0i7cjZISyhEJoj9VO8-FNH">
                    <img :src="FacebookImage" alt="Facebook Image" />
                </a>
            </div>
            <div class="flex justify-center items-center rounded-lg bg-green-100 p-1 w-11 h-11 cursor-pointer hover:scale-110" 
                title="Email">
                <a target="_blank"  href="mailto:sharifmtrust@gmail.com">
                    <img :src="EmailImage" alt="Email Image" />
                </a>
            </div>
            <div class="flex justify-center items-center rounded-lg bg-green-100 p-1 w-11 h-11 cursor-pointer hover:scale-110" 
                title="Location">
                <a target="_blank" href="https://www.google.com/maps/place/Iqra+Taleem+UL+QURAN/@32.5813904,74.5148406,19.14z/data=!4m13!1m7!3m6!1s0x0:0x7cb2eba895377db5!2zMzLCsDM0JzUwLjIiTiA3NMKwMzAnNTQuNCJF!3b1!8m2!3d32.5806096!4d74.5151037!3m4!1s0x391eed5beb8f8e51:0x6af941fcd174ba3f!8m2!3d32.5815401!4d74.5157981?hl=en">
                    <img :src="LocationImage" alt="Location Image" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

import LeavesHeaderImage from '@/assets/images/home/leaves.svg';
import FacebookImage from '@/assets/images/home/contacts/facebook.svg';
import EmailImage from '@/assets/images/home/contacts/email.svg';
import LocationImage from '@/assets/images/home/contacts/location.svg';

</script>

<style scoped>

.custom-border {
    /* https://kovart.github.io/dashed-border-generator/#:~:text=Native%20CSS%20properties%20don't,even%20change%20a%20line%20cap. */
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}

</style>
