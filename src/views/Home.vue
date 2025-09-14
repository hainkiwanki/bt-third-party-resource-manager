<template>
    <v-app>
        <app-bar :app-title="'Ïmage Slicer'"></app-bar>
        <v-main>
            <v-container>
                <h1 class="text-h4 mb-4">Welcome to Your Tool</h1>
                <p>Add your custom content here</p>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import AppBar from '@/views/AppBar.vue';
</script>
