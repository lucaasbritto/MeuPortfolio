<template>
    <v-col cols="12" class="menu-container">
        <v-list class="menu-list" v-show="!drawer">
        <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            class="menu-item"
            @mouseover="hover = item.title"
            @mouseleave="hover = null"
            
            @click="scrollToSection(item.section)"
        >
            <v-list-item-content>
            <v-list-item-title :class="{ 'active': hover === item.title }">
                {{ item.title }}
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
    </v-col>
</template>

<script>

import MenuComponentScript from './MenuComponent.js';

export default {
    ...MenuComponentScript,
};
</script>

<style lang="scss">
    @import './MenuComponent.scss'; 
</style>