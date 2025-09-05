import type { TabPaneProps,TabsProps } from "naive-ui"
import type { TooltipProps } from "naive-ui"
import type { CSSProperties, VNode } from "vue"


export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type Gutter = number | Partial<Record<Breakpoint, number>>;
export type ColSpanType = number | string;


type CardPropsBase = {
  /** 标题样式 */
  headStyle?: CSSProperties;
  /** 内容样式 */
  bodyStyle?: CSSProperties;
   /** 页头是否有分割线 */
  headerBordered?: boolean;
  /** 卡片标题 */
  title?: VNode;
}