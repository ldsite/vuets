<template>
    <v-card class="mx-auto my-12 card-post" max-width="470">
        <div class="btn-edit">
            <v-btn icon="mdi-square-edit-outline" @click="postEdit"></v-btn>
        </div>

        <template v-slot:loader="{ isActive }">
            <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img cover height="250" :src="imageArticle"></v-img>

        <v-card-item>
            <v-card-title>{{ titleArticle }}</v-card-title>

            <v-card-subtitle> </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating
                    :model-value="4.5"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                ></v-rating>

                <div class="text-grey ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                <span>{{ category }}</span>
            </div>

            <div>
                {{ content }}
            </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tags</v-card-title>

        <div class="px-4">
            <v-chip-group>
                <v-chip v-for="(tag, index) in tagsArticle" :key="index">{{
                    tag
                }}</v-chip>
            </v-chip-group>
        </div>

        <v-card-actions>
            <v-btn color="deep-purple-lighten-2" variant="text">
                More information
            </v-btn>
        </v-card-actions>
    </v-card>
    <window-editor-post :postEdit="postEdit"></window-editor-post>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WindowEditorPost from "@/shared/components/window-editor-post.vue";
export default defineComponent({
    name: "block-article-item",
    components: { WindowEditorPost },
    props: {
        titleArticle: { type: String },
        imageArticle: { type: String },
        tagsArticle: { type: Array<string> },
        category: { type: String },
        content: { type: String },
    },
    data: () => ({
        items: ["All", "Family", "Friends", "Coworkers"],
    }),
});
</script>
<style scoped>
.card-post {
    position: relative;
}
.btn-edit {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
}
</style>
