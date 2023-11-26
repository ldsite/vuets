import { Mutations } from "./mutations";
import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes } from "../types/actions";
import { RootState } from "@/entities/store";
import { MutationTypes } from "../types/mutations";
// import { PageFonts } from "@/types";
// import { CodeInterface } from "@/widgets/areas/menu_area/block-header/block-code-editor.vue";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
    [ActionTypes.SET_ADMIN_ROLE]({ commit }: AugmentedActionContext): void;
    [ActionTypes.SET_USER_ROLE]({ commit }: AugmentedActionContext): void;

    // [ActionTypes.PUT_GRIDS]({ commit }: AugmentedActionContext): void;
    // [ActionTypes.REMOVE_GRIDS]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.SET_ADMIN_ROLE]({ commit }) {
        commit(MutationTypes.SET_ENVIRONMENT_ROLE, "admin");
    },
    async [ActionTypes.SET_USER_ROLE]({ commit }) {
        commit(MutationTypes.SET_ENVIRONMENT_ROLE, "user");
    },
};
