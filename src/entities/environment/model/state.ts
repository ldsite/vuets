// import { PageFonts } from "@/types";
// import { CodeInterface } from "@/widgets/areas/menu_area/block-header/block-code-editor.vue";

export type State = {
    [x: string]: any;
    environmentRole: "admin" | "user";
};
export const state: State = {
    environmentRole: "admin",
};
