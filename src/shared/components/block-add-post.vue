<template>
    <div class="editor-block">
        <v-form @submit.prevent="createPost">
            <v-row no-gutters>
                <v-col sm="12" md="3">
                    <v-container>
                        <v-img
                            height="120"
                            cover
                            :src="postEdit.urlInsertImg"
                            :lazy-src="postEdit.urlInsertImg"
                        ></v-img>
                        <v-btn
                            @click="chooseImage()"
                            text="Загрузить"
                            block
                            prepend-icon="mdi-upload"
                            rounded="lg"
                            color="editor"
                        ></v-btn>

                        <input
                            id="fileUpload"
                            type="file"
                            hidden
                            @change="handleFileChange"
                        />
                    </v-container>
                </v-col>
                <v-col sm="12" md="6">
                    <v-text-field
                        label="Заголовок поста"
                        variant="outlined"
                        v-model="postEdit.title"
                        class="mb-3"
                    ></v-text-field>
                    <v-text-field
                        label="Url/slug"
                        variant="outlined"
                        v-model="postEdit.slug"
                        class="mb-3"
                    ></v-text-field>

                    <v-textarea
                        label="Контент"
                        variant="outlined"
                        v-model="postEdit.content"
                        class="mb-3"
                    ></v-textarea>
                    <v-text-field
                        label="Title"
                        variant="outlined"
                        v-model="postEdit.title1"
                        class="mb-3"
                    ></v-text-field>

                    <v-textarea
                        label="Description"
                        variant="outlined"
                        v-model="postEdit.description"
                        class="mb-2"
                    ></v-textarea>
                </v-col>
                <v-col sm="12" md="3">
                    <v-container>
                        <v-btn
                            text="Опубликовать"
                            block
                            rounded="lg"
                            color="editor"
                            :loading="loading"
                            type="submit"
                        ></v-btn>
                    </v-container>

                    <v-container fluid>
                        <p>Категории</p>
                        <v-radio-group v-model="postEdit.category" column>
                            <v-radio label="Option 1" value="radio-1"></v-radio>
                            <v-radio
                                label="Option 2"
                                value="radio-2"
                            ></v-radio> </v-radio-group
                    ></v-container>
                    <v-container fluid>
                        <p>Теги</p>
                        <v-combobox
                            v-model="postEdit.tags"
                            v-model:search="search"
                            :hide-no-data="false"
                            :items="items"
                            hide-selected
                            hint="Maximum of 5 tags"
                            label="Add some tags"
                            multiple
                            persistent-hint
                            small-chips
                        >
                            <template v-slot:no-data>
                                <v-list-item>
                                    <v-list-item-title>
                                        No results matching "<strong>{{
                                            search
                                        }}</strong
                                        >". Press <kbd>enter</kbd> to create a
                                        new one
                                    </v-list-item-title>
                                </v-list-item>
                            </template>
                        </v-combobox>
                    </v-container>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
    name: "block-add-post",
    data() {
        return {
            loading: false,
            postEdit: {
                title: "" as string,
                slug: "" as string,
                content: "" as string,
                tags: [] as Array<string>,
                category: "" as string,
                image_post: require("@/assets/images/no-img.png"),
                isActive: true as boolean,
                urlInsertImg: require("@/assets/images/no-img.png"),
                title1: "" as string,
                description: "" as string,
            },
        };
    },
    methods: {
        chooseImage() {
            document.getElementById("fileUpload")?.click();
            //
        },
        imageInsert(img: string) {
            this.postEdit.image_post = img;
        },
        handleFileChange(event: any) {
            const file = event.target.files[0];

            if (file) {
                // Прочитайте файл как Data URL
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    // Покажите изображение превью

                    this.postEdit.urlInsertImg = e.target.result;
                };
                console.log("file", file.name);
                this.postEdit.image_post = file.name;
                reader.readAsDataURL(file);
            }
        },

        async createPost() {
            try {
                const response = await axios.post("/api/posts", this.postEdit, {
                    withCredentials: true,
                });
                console.log(response.data);
            } catch (error) {
                // Обработка ошибок
                console.error(error);
            }
        },
    },
});
</script>
