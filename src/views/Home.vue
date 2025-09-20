<template>
    <v-app>
        <app-bar :app-title="'Third Party Asset Manager'" :icon="'mdi-package-variant'"></app-bar>
        <v-main>
            <v-container>
                <link-input @links-parsed="onLinksParsed"></link-input>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import axios from 'axios';

import LinkInput from '@/components/LinkInput.vue';
import AppBar from '@/views/AppBar.vue';

const urls = [
    'https://assetstore.unity.com/packages/slug/183453',
    'https://assetstore.unity.com/packages/3d/environments/sci-fi/bundle-5-sci-fi-heavy-station-kit-267537',
];

async function scrapeAssets(urls: string[]): Promise<void> {
    const res = await axios.post('http://localhost:4000/api/scrape', { urls });
    console.log('Scraped data:', res.data);
}

function onLinksParsed(args: string[]): void {
    void scrapeAssets(args);
}
</script>
