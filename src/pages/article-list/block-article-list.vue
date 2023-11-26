<!-- eslint-disable prettier/prettier -->
<template>
    <div>
        <block-article-item
            v-for="item in listArticles"
            :key="item.id"
            :titleArticle="item.title"
            :imageArticle="item.image_post"
            :tagsArticle="item.tags"
            :category="item.category"
            :content="item.content"
        ></block-article-item>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { axios } from "@/entities/";
import axios from "axios";
import blockArticleItem from "../article-item";
import { stringifyQuery } from "vue-router";
import { fetchArticles, getArticles } from "@/shared/api/articles";
export default defineComponent({
    name: "block-article-list",
    components: { blockArticleItem },
    data() {
        return {
            listArticles: [
                {
                    id: 0 as number,
                    title: "" as string,
                    slug: "" as string,
                    content: "" as string,
                    tags: [] as Array<string>,
                    category: "" as string,
                    image_post: "" as string,
                    isActive: true as boolean,
                    title1: "" as string,
                    description: "" as string,
                },
            ],
        };
    },

    methods: {},
    mounted() {
        getArticles()
            .then((response: Array<string>) => {
                console.log(response);
                this.listArticles = response.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    slug: item.slug,
                    content: item.content,
                    tags: item.tags,
                    category: item.category,
                    image_post: item.image_post,
                    isActive: item.isActive,
                    title1: item.title1,
                    description: item.description,
                }));
                console.log("list", this.listArticles);
            })
            .catch((error: any) => {
                console.error(error);
            });
        // fetchArticles()
        //     .then((response) => {
        //         console.log(response);
        //         this.listArticles = response.map((item: any) => ({
        //             label: item.recipe.label,
        //             image: item.recipe.image,
        //             tags: item.recipe.dietLabels,
        //             categoryType: item.recipe.cuisineType,
        //             mealtype: item.recipe.mealType,
        //             ingredientLines: item.recipe.ingredientLines,
        //             dishType: item.recipe.dishType,
        //         }));
        //         console.log(this.listArticles);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        // fetchRec()
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        // this.addArticles();
    },
});
</script>
