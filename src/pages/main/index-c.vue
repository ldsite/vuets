<template>
    <Header></Header>
    {{ $store.getters["environment/isAdmin"] }}
    <div class="container-wrappper">
        <v-container fluid class="bg-grey-lighten-3">
            <block-add-post
                v-if="$store.getters['environment/isAdmin']"
            ></block-add-post>

            <v-row no-gutters>
                <v-col sm="12" md="3"></v-col>
                <v-col sm="12" md="6">
                    <v-sheet class="pa-2 ma-2">
                        <article-list-page></article-list-page>
                    </v-sheet>
                </v-col>
                <v-col sm="12" md="3"></v-col>
            </v-row>
        </v-container>
    </div>
    <notifications group="foo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/shared/components/block-header.vue";
import BlockAddPost from "@/shared/components/block-add-post.vue";
import ArticleListPage from "@/pages/article-list";
import Notifications from "vue-notification";

export default defineComponent({
    components: { Header, ArticleListPage, BlockAddPost },
    data() {
        return {
            postEdit: {
                title: "" as string,
                slug: "" as string,
                content: "" as string,
                tags: [] as Array<string>,
                category: "" as string,
                image: "" as string,
                isActive: true as boolean,
            },
        };
    },
});
</script>
