import type { CSSProperties } from 'vue'

export type CardSize = 'small' | 'medium' | 'large'

export interface ProCardProps {
  /**
   * 卡片标题
   */
  title?: string
  
  /**
   * 卡片尺寸
   * @default 'medium'
   */
  size?: CardSize
  
  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean
  
  /**
   * 是否可悬浮
   * @default false
   */
  hoverable?: boolean
  
  /**
   * 是否分段显示
   * @default false
   */
  segmented?: boolean
  
  /**
   * 内容区域样式
   */
  contentStyle?: CSSProperties
  
  /**
   * 头部样式
   */
  headerStyle?: CSSProperties
  
  /**
   * 底部样式
   */
  footerStyle?: CSSProperties
}

export interface ProCardSlots {
  /**
   * 默认插槽
   */
  default?: () => any
  
  /**
   * 头部插槽
   */
  header?: () => any
  
  /**
   * 头部额外内容插槽
   */
  headerExtra?: () => any
  
  /**
   * 底部插槽
   */
  footer?: () => any
  
  /**
   * 操作区域插槽
   */
  action?: () => any
}