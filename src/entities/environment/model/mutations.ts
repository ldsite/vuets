import { MutationTree } from "vuex";
import { State } from "./state";
import { MutationTypes } from "../types/mutations";
// import { PageFonts, TextTypes } from "@/types";
// import { CodeInterface } from "@/widgets/areas/menu_area/block-header/block-code-editor.vue";

export type Mutations<S = State> = {
    [MutationTypes.SET_ENVIRONMENT_ROLE](
        state: S,
        user: "admin" | "user"
    ): void;
};
export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_ENVIRONMENT_ROLE](state, user) {
        state.environmentRole = user;
    },
};
