<template>
    <Transition>
        <div v-if="isOpen" id="sideBarDiv" class="bg-white p-3">
            <!-- SideBar Close Image -->
            <div class="flex justify-end items-center">
                <button @click="$emit('toggleSideBar')" class="bg-green-100 p-2 mb-3 rounded-lg hover:opacity-75" 
                    title="Close Side Bar">
                    <img :src="sideBarCloseImage" alt="Close Side Bar" />
                </button>
            </div>

            <!-- SideBar Content -->
            <div v-for="item in items" :key="item.name">
                <div @click="selectedItem.name==item.name?(item.subItems.length ? toggleSubMenuDisplay() : null):selectItem(item)"
                    :class="`py-2 px-4 mb-3 rounded-xl flex justify-between items-center
                            ${(selectedItem.name==item.name && item.subItems.length==0)?'bg-green-100':'cursor-pointer'}
                            ${selectedItem.name==item.name?'font-semibold':''}`">
                    {{ item.name }}
                    <img v-if="item.subItems.length" alt="Show Sub Menu"
                        :src="selectedItem.name==item.name && showSubItems ? bottomArrowImage : rightArrowImage" />
                </div>

                <!-- For Sub Menu's -->
                <div v-if="selectedItem.name==item.name && item.subItems.length && showSubItems" 
                    :class="`px-7 pr-3 mb-3 subItemsDiv ${item.subItemClassName}`">
                    <div v-for="subItem in item.subItems" :key="item.name+subItem.name" 
                        @click="selectedSubItem.name==subItem.name?null:selectSubItem(subItem)"
                        :class="`py-2 px-4 rounded-xl ${selectedSubItem.name==subItem.name?'bg-green-100 font-semibold':'cursor-pointer'}`">
                        {{ subItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </Transition>
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
    created()
    {
        try {
            let urlParts = window.location.pathname.split('/');        
    
            let itemExists = this.items.filter(i => i.route==`/${urlParts[1]}`).length;
            let subItemExists = true;
            if(urlParts.length == 3) { subItemExists = this.items.filter(i => i.route==`/${urlParts[1]}`)[0].subItems.filter(i => i.route==`${urlParts[2]}`).length; }
            
            if((urlParts.length == 2 || urlParts.length == 3) && itemExists)
            {
                this.selectedItem = this.items.filter(i => i.route==`/${urlParts[1]}`)[0];
                this.$emit('screenChanged', `/${urlParts[1]}`);
    
                if(urlParts.length == 3 && subItemExists)
                {
                    this.selectedSubItem = this.selectedItem.subItems.filter(i => i.route==`${urlParts[2]}`)[0];
                    this.showSubItems = true;
                    this.$emit('screenChanged', `/${urlParts[2]}`);
                }
                else { this.setNotFoundPage(); }
            }
            else { this.setNotFoundPage(); }
        }
        catch(error) { this.setNotFoundPage(); }
    },
    methods: {
        setNotFoundPage()
        {
            this.selectedItem = { name: '404', subItems: [], route: '/404' };
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
    z-index: 100;

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
