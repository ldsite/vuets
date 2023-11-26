<!-- TODO добавить валидацию  на прозрачность и цвет-->
<template>
    <div class="editor-wrapper">
        <v-text-field
            variant="outlined"
            maxlength="6"
            density="compact"
            v-model="colorText"
            :label="label"
            class="noks-color-editor"
        >
            <template v-slot:prepend-inner="{}">
                <div style="width: 25px">
                    <v-btn
                        elevation="0"
                        size="small"
                        height="25px"
                        rounded="xs"
                        block
                        :color="color"
                        @click="callColorPicker"
                    >
                        <v-icon
                            size="large"
                            :color="isBright ? 'black' : 'white'"
                        >
                            mdi-palette
                        </v-icon>
                    </v-btn>
                </div>
            </template>
        </v-text-field>
        <div class="opacity-wrapper">
            <input
                type="number"
                :style="{
                    width: `${opacityWidth}px`,
                    // borderLeft: '3px',
                    // borderLeftStyle: 'solid',
                }"
                min="0"
                max="100"
                v-model="opacity"
            />
            %
        </div>
        <input
            class="hidden-input-color"
            v-model="color"
            type="color"
            ref="clickTarget"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "v-color-edior",
    props: {
        modelValue: {
            type: String,
            default: "#ffffffff",
        },
        label: {
            type: String,
            default: "",
        },
    },
    emits: ["update:modelValue"],
    methods: {
        callColorPicker() {
            const tmp = this.$refs.clickTarget as HTMLFormElement;
            tmp.click();
        },
    },
    data() {
        return {
            model: this.modelValue,
        };
    },
    computed: {
        //TODO create helper проверяющий светлый цвет или темный
        isBright() {
            let result = 0;
            if (parseInt(this.model[1], 16) > 8) result++;
            if (parseInt(this.model[3], 16) > 8) result++;
            if (parseInt(this.model[5], 16) > 8) result++;
            return result > 1;
        },
        colorText: {
            get() {
                return this.model.substring(1, 7);
            },
            set(value: string) {
                if (value.length > 6) value = value.substring(0, 7);
                if (value.length < 6 && value !== "AUTO")
                    value = value.padEnd(6, "f");
                this.model = "#" + value + this.model.substring(7, 9);
            },
        },
        color: {
            get() {
                return this.model.substring(0, 7);
            },
            set(value: string) {
                this.model = value + this.model.substring(7, 9);
            },
        },
        opacity: {
            get() {
                return Math.round(
                    parseInt(this.model.substring(7, 9), 16) / 2.55
                );
            },
            set(value: number) {
                value = Math.min(value, 100);
                value = Math.max(value, 0);
                value *= 2.55;
                this.model =
                    this.model.substring(0, 7) + Math.round(value).toString(16);
            },
        },
        opacityWidth: function () {
            return this.opacity.toString().length * 10;
        },
    },
    watch: {
        model(value) {
            this.$emit("update:modelValue", value);
        },
    },
});
</script>
<style scoped>
.editor-wrapper {
    position: relative;
    width: 155px;
}

.opacity-wrapper {
    width: 25px;
    position: absolute;
    right: 30px;
    z-index: 10000;
    bottom: 10px;
    display: flex;
    opacity: 0.7;
}

.opacity-wrapper input {
    outline: none;
}

.opacity-wrapper input::-webkit-outer-spin-button,
.opacity-wrapper input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
    /* <-- Apparently some margin are still there even though it's hidden */
}

.opacity-wrapper input[type="number"] {
    -moz-appearance: textfield;
}

.hidden-input-color {
    width: 0px;
    height: 0px;
    opacity: 0;
    position: absolute;
}

/* .noks-color-editor .v-field {
    padding-left: 6px;
    height: 38px;
}

.noks-color-editor .v-field__prepend-inner {
    height: 38px;
}

.noks-color-editor .v-field input[type="text"] {
    padding: 5px
} */
</style>
