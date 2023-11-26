// import { createStore } from "vuex";

// export const store = createStore({});
// [taskModel.NAMESPACE]: taskModel.module,

import { createStore } from "vuex";
// import { isDevEnv } from "@/shared/config";

import {
    store as environment,
    NAMESPACE as ENV_NAMESPACE,
} from "@/entities/environment";

import { Store } from "@/entities/store";
import { RootState } from "@/entities/store";

export const store = createStore<RootState>({
    // strict: !!isDevEnv,
    modules: {
        [ENV_NAMESPACE]: environment,
    },
});
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $store: Store;
    }
}
export function useStore(): Store {
    return store as Store;
}
