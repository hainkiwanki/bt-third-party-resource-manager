<template>
    <v-app>
        <app-bar :app-title="'Third Party Asset Manager'" :icon="'mdi-package-variant'"></app-bar>
        <v-main>
            <v-container>
                <link-input></link-input>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import LinkInput from '@/components/LinkInput.vue';
import { scrapeMultipleAssets } from '@/utils/scrapeBatch.mjs';
import AppBar from '@/views/AppBar.vue';

const urls = [
    'https://assetstore.unity.com/packages/slug/183453',
    'https://assetstore.unity.com/packages/3d/environments/sci-fi/bundle-5-sci-fi-heavy-station-kit-267537',
];

scrapeMultipleAssets(urls).then((results) => {
    console.log(JSON.stringify(results, null, 2));
});
</script>
