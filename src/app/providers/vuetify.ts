// Styles
import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {
    VDialog,
    VTabs,
    VCard,
    VToolbar,
    VContainer,
    VToolbarItems,
    VRow,
    VBtnToggle,
    VSlider,
    VTextField,
    VInput,
    VList,
} from "vuetify/lib/components/index.mjs";
import { themeVariable } from "@/shared/constants/default_values";

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: themeVariable.primary,
        secondary: themeVariable.secondary,
        editor: themeVariable.editor,
        editorBg: themeVariable.editorBg,
        subRedactorTabsBg: themeVariable.subRedactorTabsBg,
        componentTabsBg: themeVariable.componentTabsBg,
        //
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
    },
};

export const vuetify = createVuetify({
    components,
    directives,
    aliases: {
        VNoksModal: VDialog,
        VNoksMediaRedactor: VCard,
        VElementToolbar: VToolbar,
        VToolbarItemsSmall: VToolbarItems,
        VNoksMenu: VToolbar,
        VRedactorToolbar: VToolbar,
        VSubredactorTabs: VTabs,
        VComponentTabs: VTabs,
        VRedactorContainer: VContainer,
        VRedactorBtnToggle: VBtnToggle,
        VRedactorSlider: VSlider,
        VSwitchRow: VRow,
        VMiniTextField: VTextField,
        VRedactorTitle: VInput,
        VNavigationList: VList,
    },

    defaults: {
        global: {
            hideDetails: "auto",
        },
        VRedactorTitle: {
            class: "pt-4 pb-2 text-body-2 font-weight-bold",
        },
        VDialog: {
            color: "primary",
        },
        VTooltip: {
            style: "z-index: 1000000000",
        },
        VElementToolbar: {
            height: "25",
            style: "width: 127px",
            rounded: "lg",
            color: "secondary",
            VBtn: {
                icon: true,
                width: "30px",
                size: "small",
                VTooltip: {
                    activator: "parent",
                    location: "bottom",
                },
            },
            VToolbarItemsSmall: {
                VBtn: {
                    icon: true,
                    width: "25px",
                    size: "small",
                    VIcon: { size: "small" },
                },
            },
        },
        VNoksMenu: {
            VBtn: {
                class: "text-none",
            },
        },
        VRedactorToolbar: {
            density: "comfortable",
            color: "primary",
            style: "border-bottom: 1px solid rgba(48, 52, 59, 0.1)",
            VBtnToggle: {
                style: "margin-left: 10px; gap: 5px;",
                divided: false,
                density: "compact",
                color: "secondary",
                variant: "text",
                VBtn: {
                    rounded: "lg",
                    class: "text-none",
                },
            },
        },
        VSubredactorTabs: {
            color: "subRedactorTabsBg",
            alignTabs: "center",
            class: "mt-2 mr-3 ml-3 rounded",
            hideSlider: "true",
            VTab: {
                rounded: "0",
                border: "",
                variant: "flat",
                style: "flex: 1 1 0; opacity: 0.57",
            },
        },
        VComponentTabs: {
            color: "componentTabsBg",
            density: "compact",
            height: "31",
            grow: true,
            hideSlider: "true",
            class: "rounded",
            VTab: {
                variant: "flat",
                rounded: "0",
                border: "",
                class: "text-body-2",
                style: "flex : 1 1 0; opacity: 0.57",
            },
        },
        VRedactorContainer: {
            class: "v-redactor-container",
            style: "overflow-x: auto; height: 100%",
            VRow: {
                style: "margin: 0 ",
            },
            VBtn: {
                size: "small",
                class: "text-none",
            },
            VSwitch: {
                color: "editor",
                inline: true,
                density: "compact",
            },
            VSwitchRow: {
                style: "margin: 0;",
                align: "center",
                justify: "start",
                class: "noks-switch-row",
                VSwitch: {
                    style: "flex: 0 1 auto; margin-right: 5px;",
                },
                VLabel: { class: "text-body-2" },
            },
            VRedactorBtnToggle: {
                mandatory: true,
                class: "v-redactor-btn-toggle",
                style: "width: 100%; height: 34px",
                variant: "outlined",
                color: "secondary-darken-3",
                VBtn: {
                    style: "flex : 1 1 0;",
                    class: "text-none",
                    color: "#777b83",
                    VIcon: {
                        size: "small",
                    },
                    VTooltip: {
                        activator: "parent",
                        location: "top",
                    },
                },
            },
            VRedactorSlider: {
                class: "align-center v-redactor-slider",
                color: "editor",
                trackColor: "secondary",
                thumbColor: "primary",
                VTextField: {
                    density: "compact",
                    variant: "solo-filled",
                    hideDetails: true,
                },
            },
        },
        VNavigationList: {
            style: "background: transparent",
            class: "list-links",
            VListItem: {
                style: "color: rgb(131, 133, 137);font-weight: 700;",
            },
            VListItemTitle: {
                style: "font-size: 0.9rem",
            },
        },
        VToolbarTitle: {
            class: "text-subtitle-1",
        },
        VMiniTextField: {
            // class: "noks-mini-text-field",
            variant: "outlined",
            flat: "true",
            density: "compact",
            VInputDetails: {
                style: "padding-left:0",
            },
        },
        // VNavigationList: {
        //     VListItem: {
        //         style: "font-size: 13px; opacity : 0.7",
        //     },
        // },
    },
    theme: {
        defaultTheme: "myCustomLightTheme",
        variations: {
            colors: ["primary", "secondary", "editor"],
            lighten: 5,
            darken: 5,
        },
        themes: {
            myCustomLightTheme,
        },
    },
});

/*
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VBtn, VMenu, VSheet } from "vuetify/lib/components/index.mjs";

export default createVuetify({
    aliases: {
        VCircleBtnIcon: VBtn,
        VDropdownMiniMenu: VMenu,
        VFieldsEditorSheet: VSheet,
    },
    defaults: {
        global: {
            "hide-details": "auto",
        },
        VBtn: {
            color: "deep-purple-accent-4",
        },
        VTextField: {
            density: "compact",
            variant: "outlined",
            hideDetails: "auto",
        },
        VSwitch: {
            density: "compact",
            variant: "outlined",
            hideDetails: "auto",
        },
        VSelect: {
            density: "compact",
            variant: "outlined",
            hideDetails: "auto",
        },
        VSlider: {
            density: "compact",
            variant: "outlined",
            hideDetails: "auto",
        },
        VCheckbox: {
            hideDetails: "auto",
        },
        VCircleBtnIcon: {
            variant: "text",
            size: "small",
            rounded: "circle",
            style: `color : black;
            background-color : white;
            `,
        },
        VAutocomplete: {
            density: "compact",
            variant: "outlined",
            hideDetails: "auto",
        },
        VDropdownMiniMenu: {
            VSheet: {
                elevation: 4,
                VInput: {
                    density: "compact",
                },
            },
        },
        VFieldsEditorSheet: {
            VCheckbox: {
                density: "compact",
                color: "deep-purple-accent-4",
            },
        },
    },
});

*/
