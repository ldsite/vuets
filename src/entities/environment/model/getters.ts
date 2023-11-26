import { GetterTree } from "vuex";
import { State, state } from "./state";
import { RootState } from "@/entities/store";
// import { PageFonts } from "@/types";
// import { CodeInterface } from "@/widgets/areas/menu_area/block-header/block-code-editor.vue";

export type Getters = {
    isAdmin(state: State): boolean;
    isUser(state: State): boolean;
};
export const getters: GetterTree<State, RootState> & Getters = {
    isAdmin: (state) => state.environmentRole === "admin",
    isUser: (state) => state.environmentRole === "user",
};
