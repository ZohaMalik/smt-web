<template>
    <Transition>
        <div v-if="isOpen" id="sideBarDiv" class="bg-white p-3">
            <!-- SideBar Close Icon -->
            <div class="flex justify-end items-center">
                <button @click="$emit('toggleSideBar')" class="bg-green-100 p-2 mb-3 rounded-lg hover:opacity-75" 
                    title="Close Side Bar">
                    <img :src="sideBarCloseIcon" alt="Close Side Bar" />
                </button>
            </div>

            <!-- SideBar Content -->
            <div v-for="item in items" :key="item.name">
                <div @click="selectedItem==item.name?(item.subItems.length ? toggleSubMenuDisplay() : null):selectItem(item)"
                    :class="`py-2 px-4 mb-3 rounded-xl flex justify-between items-center
                            ${(selectedItem==item.name && item.subItems.length==0)?'bg-green-100':'cursor-pointer'}
                            ${selectedItem==item.name?'font-semibold':''}`">
                    {{ item.name }}
                    <img v-if="item.subItems.length" alt="Show Sub Menu"
                        :src="selectedItem==item.name && showSubItems ? bottomArrowIcon : rightArrowIcon" />
                </div>

                <!-- For Sub Menu's -->
                <div v-if="selectedItem==item.name && item.subItems.length && showSubItems" 
                    :class="`px-7 pr-3 mb-3 subItemsDiv ${item.subItemClassName}`">
                    <div v-for="subItem in item.subItems" :key="subItem" 
                        @click="selectedSubItem==subItem?null:selectSubItem(subItem)"
                        :class="`py-2 px-4 rounded-xl ${selectedSubItem==subItem?'bg-green-100 font-semibold':'cursor-pointer'}`">
                        {{ subItem }}
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import sideBarCloseIcon from '@/assets/images/sideBar/sideBarClose.svg';
import rightArrowIcon from '@/assets/images/sideBar/rightArrow.svg';
import bottomArrowIcon from '@/assets/images/sideBar/bottomArrow.svg';

export default {
    name: 'SideBar',
    props: ['isOpen'],
    data()
    {
        return {
            sideBarCloseIcon,
            rightArrowIcon,
            bottomArrowIcon,
            items: [
                {
                    name: 'Home',
                    subItems: []
                },
                {
                    name: 'Aims & Objectives',
                    subItems: []
                },
                {
                    name: 'Beneficiaries',
                    subItems: []
                },
                {
                    name: 'Donations',
                    subItems: []
                },
                {
                    name: 'Future Projects',
                    subItems: []
                },
                {
                    name: 'Iqra Taleem ul Quran Academy',
                    subItems: [ 'Home', 'Al Quran Lecture', 'Seerat H. Umar Farooq (RA)', 'Ulama Biyans', 'Lessons' ],
                    subItemClassName: 'academy'
                },
                {
                    name: 'Informations',
                    subItems: [ 'Home', 'Annual Meeting', 'Updates' ],
                    subItemClassName: 'info'
                }
            ],
            selectedItem: null,
            selectedSubItem: null,
            showSubItems: true
        }
    },
    created() { this.selectedItem = this.items[0].name; },
    methods: {
        selectItem(itemToSelect)
        {
            this.selectedItem = itemToSelect.name;
            if(itemToSelect.subItems.length) {
                this.selectedSubItem = itemToSelect.subItems[0];
                this.showSubItems = true;
            }
            else {
                this.selectedSubItem = null;
                this.showSubItems = false;
            }
        },
        selectSubItem(subItemToSelect) { this.selectedSubItem = subItemToSelect; },
        toggleSubMenuDisplay() { this.showSubItems = !this.showSubItems; }
    }
}
</script>

<style scoped>

#sideBarDiv {
    position: fixed;
    top: 0px;
    right: 0px;
    min-width: 280px;
    width: 280px;
    max-width: 280px;
    min-height: 100vh;
    height: 100vh;
    overflow-y: auto;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3); /* Horizontal, Vertical, Blur, Color */
    transition: transform 0.3s ease-out;

    /* To hide the scrollbar */
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer */
}

/* To hide the scrollbar */
#sideBarDiv::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Edge */
}

/* Transition classes for sliding the sideBar - https://vuejs.org/guide/built-ins/transition */
.v-enter-from { transform: translateX(100%); }
.v-leave-to { transform: translateX(100%); }

/* Line on left of sub menu */
.subItemsDiv::before {
    content: '';
    position: absolute;
    left: 25px;
    width: 4px;
    background-color: black;
    border-radius: 8px;
}
.subItemsDiv.academy::before { height: 230px; }
.subItemsDiv.info::before { height: 130px; }

</style>
