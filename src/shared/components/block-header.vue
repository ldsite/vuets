<template>
    <v-card flat rounded="0" class="pt-2 pb-2 bg-surface-variant">
        <v-toolbar density="compact" class="bg-surface-variant">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-menu :nudge-width="290" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <v-toolbar-title v-bind="props">
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <span>Фильтр</span>
                    </v-toolbar-title>
                </template>
                <v-card class="mx-auto" max-width="350">
                    <v-list
                        width="290px"
                        lines="three"
                        select-strategy="classic"
                    >
                        <v-list-subheader>Категории</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in listCategories"
                            :key="i"
                            value="selectedCategory"
                            color="primary"
                            class="d-flex"
                        >
                            <template v-slot:prepend="{ isActive }">
                                <v-checkbox-btn
                                    :model-value="isActive"
                                ></v-checkbox-btn>
                                <v-list-item-title>{{
                                    item
                                }}</v-list-item-title>
                            </template></v-list-item
                        >
                    </v-list>
                    <v-list>
                        <v-list-subheader>Теги</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in listTags"
                            :key="i"
                            :value="item"
                            color="primary"
                            >{{ item }}</v-list-item
                        >
                    </v-list>
                    <v-list>
                        <v-list-subheader>Прием</v-list-subheader>
                        <v-list-item
                            v-for="(item, i) in listMealtype"
                            :key="i"
                            :value="item"
                            color="primary"
                            >{{ item }}</v-list-item
                        >
                    </v-list>
                </v-card>
            </v-menu>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                v-model="menuLogIn"
                :close-on-content-click="false"
                location="end"
            >
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props"> Log In </v-btn>
                </template>

                <v-card min-width="300" title="LogIn">
                    <!-- <v-card-item class="d-flex">
                        <v-card-title>LogIn </v-card-title>
                        <v-btn icon="mdi-close" variant="plain"></v-btn>
                    </v-card-item> -->
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

                    <v-form
                        ref="form"
                        @submit="onSubmit"
                        class="pb-6 pt-4 pr-4 pl-4"
                    >
                        <v-text-field
                            v-model="form.name"
                            label="Name"
                            variant="underlined"
                            class="mb-1"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            label="Password"
                            variant="underlined"
                            class="mb-1"
                        ></v-text-field>
                        <v-btn
                            width="100%"
                            variant="outlined"
                            class="mt-4 d-flex"
                            type="submit"
                        >
                            submit
                        </v-btn>
                    </v-form>
                </v-card>
            </v-menu>

            <v-btn icon>
                <v-icon>mdi-message</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
    <!-- <div>
        <form @submit.prevent="createPost">
            <input
                v-model="postData.title"
                type="text"
                placeholder="Заголовок"
            />
            <textarea
                v-model="postData.content"
                placeholder="Содержание"
            ></textarea>
            <button type="submit">Создать пост</button>
        </form>
    </div> -->
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { fetchArticles } from "@/shared/api/articles";
import axios from "axios";
// import { useVuelidate } from "@vuelidate/core";
// import { email, required } from "@vuelidate/validators";
// import Vuelidate from "vuelidate";
// import { required, minLength, between } from "vuelidate";
// import Vuelidate from "vuelidate";
import { Field, Form, ErrorMessage } from "vee-validate";

// import * as yup from "yup";
// const schema = yup.object({
//     email: yup.string().required().email(),
//     password: yup.string().required().min(8),
// });
// const initialState = {
//     name: "",
//     password: "",
// };

// const state = reactive({
//     ...initialState,
// });

// const rules = {
//     name: { required },
//     // password: { required },
// };

// const v$ = useVuelidate(rules, state);
export default defineComponent({
    data: () => ({
        items: ["All", "Family", "Friends", "Coworkers"],
        listCategories: [] as Array<string>,
        listTags: [] as Array<string>,
        listMealtype: [] as Array<string>,
        selectedCategory: [] as Array<string>,
        postData: {
            title: "" as string,
            content: "" as string,
        },
        form: {
            name: "" as string,
            password: "" as string,
        },
        menuLogIn: false,
        fav: true,

        message: false,
        hints: true,
    }),
    methods: {
        onSubmit(values: any) {
            // Submit values to API...
            alert(JSON.stringify(values, null, 2));
        },
        fetchUser() {
            axios
                .get("/api/user")
                .then((response: any) => {
                    // Обработка данных пользователя
                    console.log(response);
                })
                .catch((error: any) => {
                    // Обработка ошибок
                });
        },
        async createPost() {
            try {
                // const csrfTokenElement = document.querySelector(
                //     'meta[name="csrf-token"]'
                // );
                // const csrfToken = csrfTokenElement
                //     ? csrfTokenElement.getAttribute("content")
                //     : null;
                // if (csrfToken) {
                //     console.log(csrfToken);
                //     axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
                const response = await axios.post("/api/posts", this.postData, {
                    withCredentials: true,
                });
                console.log(response.data);
                // } else {
                //     console.error("CSRF token not found on the page.");
                // }
            } catch (error) {
                // Обработка ошибок
                console.error(error);
            }
        },
        // async getPost() {
        //     try {
        //         const response = await axios.get("api/posts");
        //         console.log("get", response.data);
        //         // } else {
        //         //     console.error("CSRF token not found on the page.");
        //         // }
        //     } catch (error) {
        //         // Обработка ошибок
        //         console.error(error);
        //     }
        // },
    },
    mounted() {
        const csrfTokenElement = document.querySelector(
            'meta[name="csrf-token"]'
        );
        const csrfToken = csrfTokenElement
            ? csrfTokenElement.getAttribute("content")
            : null;
        if (csrfToken) {
            console.log(csrfToken);
            axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
        } else {
            console.error("CSRF token not found on the page.");
        }
        // this.getPost().then((response) => {
        //     console.log(response);
        // });

        fetchArticles()
            .then((response) => {
                const arrCategories = response.map((item: any) => ({
                    tags: item.recipe.dietLabels,
                    categoryType: item.recipe.cuisineType,
                    mealtype: item.recipe.mealType,
                }));
                // var namesSet = new Set();
                // this.listCategories =
                const allTags = arrCategories.flatMap((item) => item.tags);
                const allCategory = arrCategories.flatMap(
                    (item) => item.categoryType
                );
                const allMealtype = arrCategories.flatMap(
                    (item) => item.mealtype
                );

                const uniqueTags = [...new Set(allTags)];
                const uniqueCateg = [...new Set(allCategory)];
                const uniqueMealType = [...new Set(allMealtype)];
                console.log(uniqueTags);
                console.log(uniqueCateg);
                console.log(uniqueMealType);
                this.listTags = uniqueTags;
                this.listCategories = uniqueCateg;
                this.listMealtype = uniqueMealType;

                // for (var i = 0; i < arrCategories.length; i++) {
                //     namesSet.add(arrCategories[i].tags.value);
                // }
                // console.log(namesSet);
            })
            .catch((error) => {
                console.error(error);
            });
        // this.addArticles();
    },
});
</script>
