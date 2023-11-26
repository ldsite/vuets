<template>
    <v-menu v-model="menuEditor" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props"> Редактируем пост </v-btn>
        </template>

        <v-card min-width="700" title="LogIn">
            <template v-slot:append>
                <div class="me-n2">
                    <v-btn
                        icon="$close"
                        density="comfortable"
                        variant="plain"
                    ></v-btn>
                </div>
            </template>
            <v-divider></v-divider>

            <div class="editor-block">
                <v-form @submit.prevent="editPost">
                    <v-row no-gutters>
                        <v-col sm="12" md="3">
                            <v-container>
                                <v-img
                                    height="120"
                                    cover
                                    :src="postObject.image_post"
                                    :lazy-src="postObject.image_post"
                                ></v-img>
                                <v-btn
                                    text="Загрузить"
                                    block
                                    prepend-icon="mdi-upload"
                                    rounded="lg"
                                    color="editor"
                                ></v-btn>

                                <input id="fileUpload" type="file" hidden />
                            </v-container>
                        </v-col>
                        <v-col sm="12" md="6">
                            <v-text-field
                                label="Заголовок поста"
                                variant="outlined"
                                v-model="postObject.title"
                                class="mb-3"
                            ></v-text-field>
                            <v-text-field
                                label="Url/slug"
                                variant="outlined"
                                v-model="postObject.slug"
                                class="mb-3"
                            ></v-text-field>

                            <v-textarea
                                label="Контент"
                                variant="outlined"
                                v-model="postObject.content"
                                class="mb-3"
                            ></v-textarea>
                            <v-text-field
                                label="Title"
                                variant="outlined"
                                v-model="postObject.title1"
                                class="mb-3"
                            ></v-text-field>

                            <v-textarea
                                label="Description"
                                variant="outlined"
                                v-model="postObject.description"
                                class="mb-2"
                            ></v-textarea>
                        </v-col>
                        <v-col sm="12" md="3">
                            <v-container>
                                <v-btn
                                    text="Сохранить"
                                    block
                                    rounded="lg"
                                    color="editor"
                                    :loading="loading"
                                    type="submit"
                                ></v-btn>
                            </v-container>

                            <v-container fluid>
                                <p>Категории</p>
                                <v-radio-group
                                    v-model="postObject.category"
                                    column
                                >
                                    <v-radio
                                        label="Option 1"
                                        value="radio-1"
                                    ></v-radio>
                                    <v-radio
                                        label="Option 2"
                                        value="radio-2"
                                    ></v-radio> </v-radio-group
                            ></v-container>
                            <v-container fluid>
                                <p>Теги</p>
                                <v-combobox
                                    v-model="postObject.tags"
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
                                                >". Press <kbd>enter</kbd> to
                                                create a new one
                                            </v-list-item-title>
                                        </v-list-item>
                                    </template>
                                </v-combobox>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-form>
            </div>
        </v-card>
    </v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface PostPutData {
    title: string;
    slug: string;
    content: string;
    tags: Array<string | null>;
    category: string | null;
    image_post: string | null;
    isActive: boolean;
    title1: string | null;
    description: string | null;
}
export default defineComponent({
    name: "window-editor-post",
    props: {
        postEdit: { type: Object as PropType<PostPutData>, required: true },
        modelValue: {
            type: Boolean,
        },
    },
    emits: {
        saveCode: (value: PostPutData) => true,
        addNewCode: (value: PostPutData) => true,
        "update:model-value": (value: boolean) => true,
    },
    data: () => ({
        postObject: {
            title: "",
            slug: "",
            content: "",
            tags: [""],
            category: "",
            image_post: require("@/assets/images/no-img.png"),
            isActive: true,
            title1: "",
            description: "",
        } as PostPutData,
        search: "" as string,
    }),
    mounted() {
        this.postObject = Object.assign({}, this.postEdit);
    },
    methods: {
        editPost() {
            console.log("Отправляем данные");
        },
    },
});
</script>
