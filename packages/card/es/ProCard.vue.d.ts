interface Props {
    title?: string;
    size?: 'small' | 'medium' | 'large';
    bordered?: boolean;
    hoverable?: boolean;
    contentStyle?: Record<string, any>;
    headerStyle?: Record<string, any>;
}
declare var __VLS_8: {}, __VLS_11: {}, __VLS_13: {}, __VLS_16: {}, __VLS_19: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_8) => any;
} & {
    'header-extra'?: (props: typeof __VLS_11) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    footer?: (props: typeof __VLS_16) => any;
} & {
    action?: (props: typeof __VLS_19) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "small" | "medium" | "large";
    bordered: boolean;
    hoverable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
