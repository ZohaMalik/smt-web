<template>
    <div>
        <!-- Backdrop -->
        <div v-if="isOpen" @click="$emit('toggleSideBar')" class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity fade-in"></div>

        <Transition name="slide-left">
            <div v-if="isOpen" class="fixed top-0 left-0 z-50 h-full w-[300px] bg-white shadow-2xl overflow-y-auto p-4 flex flex-col">
                <!-- SideBar Close Image -->
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-xl font-bold text-gray-800 tracking-tight">Menu</h2>
                        <p class="text-xs text-gray-500">Sharif Memorial Trust</p>
                    </div>
                    <button @click="$emit('toggleSideBar')" class="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors" 
                        title="Close Side Bar">
                        <img :src="sideBarCloseImage" alt="Close Side Bar" class="w-5 h-5" />
                    </button>
                </div>

                <!-- SideBar Content -->
                <div class="flex-grow space-y-2">
                    <div v-for="item in items" :key="item.name">
                        <div @click="selectedItem.name==item.name?(item.subItems.length ? toggleSubMenuDisplay() : null):selectItem(item)"
                            :class="itemClass(item)">
                            <span class="text-sm tracking-wide">{{ item.name }}</span>
                            <img v-if="item.subItems.length" alt="Show Sub Menu"
                                :class="{'transform rotate-180': selectedItem.name==item.name && showSubItems}"
                                class="transition-transform duration-200 opacity-60"
                                :src="selectedItem.name==item.name && showSubItems ? bottomArrowImage : rightArrowImage" />
                        </div>

                        <!-- For Sub Menu's -->
                        <Transition name="fade">
                            <div v-if="selectedItem.name==item.name && item.subItems.length && showSubItems" 
                                class="ml-4 pl-4 mt-2 border-l-2 border-gray-100 space-y-1">
                                <div v-for="subItem in item.subItems" :key="item.name+subItem.name" 
                                    @click="selectedSubItem.name==subItem.name?null:selectSubItem(subItem)"
                                    :class="subItemClass(subItem)">
                                    {{ subItem.name }}
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>

                <!-- Footer/Bottom Branding (Optional add) -->
                <div class="mt-auto pt-6 border-t border-gray-100 text-center">
                    <span class="text-xs text-gray-400 font-medium">Sharif Memorial Trust</span>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import sideBarCloseImage from '@/assets/images/sideBar/sideBarClose.svg';
import rightArrowImage from '@/assets/images/sideBar/rightArrow.svg';
import bottomArrowImage from '@/assets/images/sideBar/bottomArrow.svg';

export default {
    name: 'SideBar',
    props: ['isOpen'],
    data()
    {
        return {
            sideBarCloseImage,
            rightArrowImage,
            bottomArrowImage,
            items: [
                {
                    name: 'Home',
                    subItems: [],
                    route: '/'
                },
                {
                    name: 'Aims & Objectives',
                    subItems: [],
                    route: '/ourAimsAndObjectives'
                },
                {
                    name: 'Beneficiaries',
                    subItems: [],
                    route: '/beneficiaries'
                },
                {
                    name: 'Donations',
                    subItems: [],
                    route: '/donations'
                },
                {
                    name: 'Future Projects',
                    subItems: [],
                    route: '/futureProjects'
                },
                {
                    name: 'Iqra Taleem ul Quran Academy',
                    subItems: [
                        { name: 'Home', route: '/home' },
                        { name: 'Al Quran Lecture', route: '/alQuranLecture' },
                        { name: 'Seerat H. Umar Farooq (RA)', route: '/seeratHazratUmarFarooqRA' },
                        { name: 'Ulama Biyans', route: '/ulamaBiyans' },
                        { name: 'Lessons', route: '/lessons' }
                    ],
                    subItemClassName: 'academy',
                    route: '/iqraTaleemUlQuranAcademy'
                },
                {
                    name: 'Informations',
                    subItems: [
                        { name: 'Home', route: '/home' },
                        { name: 'Annual Meeting', route: '/annualMeeting' },
                        { name: 'Updates', route: '/updates' }
                    ],
                    subItemClassName: 'info',
                    route: '/informations'
                }
            ],
            selectedItem: null,
            selectedSubItem: null,
            showSubItems: true
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                this.syncSelectionWithRoute();
            }
        }
    },
    methods: {
        setNotFoundPage()
        {
            this.selectedItem = { name: '404', subItems: [], route: '/404' };
            this.selectedSubItem = null;
            this.showSubItems = false;
        },
        selectItem(itemToSelect)
        {
            this.selectedItem = itemToSelect;
            if(itemToSelect.subItems.length) {
                this.selectedSubItem = itemToSelect.subItems[0];
                this.showSubItems = true;
                this.$router.push(itemToSelect.route + itemToSelect.subItems[0].route);
                this.$emit('screenChanged', itemToSelect.route + itemToSelect.subItems[0].route);
            }
            else {
                this.selectedSubItem = null;
                this.showSubItems = false;
                this.$router.push(itemToSelect.route);
                this.$emit('screenChanged', itemToSelect.route);
            }
        },
        selectSubItem(subItemToSelect)
        {
            this.selectedSubItem = subItemToSelect;
            this.$router.push(this.selectedItem.route + subItemToSelect.route);
            this.$emit('screenChanged', this.selectedItem.route + subItemToSelect.route);
        },
        toggleSubMenuDisplay() { this.showSubItems = !this.showSubItems; },
        syncSelectionWithRoute()
        {
            const path = this.$route.path || '/';
            if (path === '/') {
                this.selectedItem = this.items[0];
                this.selectedSubItem = null;
                this.showSubItems = false;
                return;
            }

            const parts = path.split('/').filter(Boolean);
            const item = this.items.find((i) => i.route === `/${parts[0]}`);
            if (!item) {
                this.setNotFoundPage();
                return;
            }

            this.selectedItem = item;
            if (parts.length > 1 && item.subItems.length) {
                const subItem = item.subItems.find((s) => s.route === `/${parts[1]}`);
                if (subItem) {
                    this.selectedSubItem = subItem;
                    this.showSubItems = true;
                } else {
                    this.selectedSubItem = null;
                    this.showSubItems = false;
                }
            } else {
                this.selectedSubItem = null;
                this.showSubItems = false;
            }
        },
        itemClass(item)
        {
            const isActive = this.selectedItem && this.selectedItem.name === item.name;
            return `py-3 px-4 rounded-xl flex justify-between items-center transition-all duration-200 ${isActive ? 'bg-green-50 text-green-700 font-semibold border-l-4 border-green-500' : 'cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900'} hover:translate-x-1`;
        },
        subItemClass(subItem)
        {
            const isActive = this.selectedSubItem && this.selectedSubItem.name === subItem.name;
            return `py-2 px-3 rounded-lg text-sm transition-all duration-200 ${isActive ? 'text-green-600 font-bold bg-green-50/60' : 'cursor-pointer text-gray-500 hover:text-gray-900'} hover:translate-x-1`;
        }
    }
}
</script>

<style scoped>

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.35s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom scrollbar hiding if needed, though Tailwind mostly handles it */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1; 
  border-radius: 4px;
}

</style>
