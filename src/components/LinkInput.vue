<template>
    <div class="link-input">
        <v-textarea label="Paste links here" v-model="pastedText" rows="6" />

        <v-file-input label="Upload .txt or .csv file" accept=".txt,.csv" @change="handleFileUpload" />
        <v-btn @click="emitLinks">Parse Links</v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { extractUnityAssetLinks, readTextFromFile } from '@/utils/parseLinks.mjs';

const pastedText = ref('');
const emit = defineEmits<{
    (e: 'links-parsed', links: string[]): void;
}>();

async function handleFileUpload(fileList: File[]) {
    const file = fileList[0];
    if (!file) return;

    const text = await readTextFromFile(file);
    pastedText.value += `\n${text}`;
}

function emitLinks() {
    const links = extractUnityAssetLinks(pastedText.value);
    emit('links-parsed', links);
}
</script>

<style scoped lang="scss">
.link-input {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
