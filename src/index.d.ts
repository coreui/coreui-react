import { HTMLProps } from 'react'
type ChildElement = any
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type className = string | className[] | object
type innerRef = object | Function
type HTMLPropsNoClassName = Omit<HTMLProps<any>, 'className'>

interface CAlert extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  onShowChange?: Function;
  closeButton?: boolean;
  color?: string;
  fade?: boolean;
  show?: boolean | number;
}

interface CBadge extends CLink {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  color?: string;
  shape?: '' | 'pill';
}

interface CBrand extends CLink {
  tag?: any;
  children?: ChildElement;
  className?: className | Array<any>;
  innerRef?: innerRef;
}

interface CHeaderBrand extends CBrand { }
interface CNavbarBrand extends CBrand { }
interface CSidebarBrand extends CBrand { }

interface CBreadcrumb extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CBreadcrumbItem extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  active?: boolean;
}

interface CBreadcrumbRouter extends HTMLPropsNoClassName {
  className?: className;
  innerRef?: innerRef;
  routes?: Array<any>;
}

interface CButton extends Omit<CLink, 'size'> {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  active?: boolean;
  block?: boolean;
  shape?: string;
  variant?: '' | 'ghost' | 'outline';
  color?: string;
  disabled?: boolean;
  onClick?: Function;
  size?: string;
  pressed?: boolean;
}

interface CButtonClose extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
  children?: ChildElement;
  className?: className;
  buttonClass?: string;
  innerRef?: innerRef;
}

interface CButtonGroup extends Omit< HTMLPropsNoClassName, 'size'> {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  size?: '' | 'sm' | 'lg';
  vertical?: boolean;
}

interface CButtonToolbar extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  role?: string;
  justify?: '' | 'start' | 'end' | 'between' | 'center';
}

interface CCallout extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  color?: string;
}

interface sharedCardProps {
  align?: '' | 'left' | 'center' | 'right';
  color?: string;
  borderColor?: string;
  textColor?: string;
}

interface CCard extends sharedCardProps, HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  accentColor?: string;
}

interface CCardBody extends sharedCardProps, HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCardFooter extends sharedCardProps, HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCardGroup extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  deck?: boolean;
  columns?: boolean;
}

interface CCardHeader extends sharedCardProps, HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCardImg extends CImg {
  variant?: '' | 'top' | 'bottom' | 'full';
}

interface CCardImgOverlay extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCardSubtitle extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCardText extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCardTitle extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CCarousel extends HTMLPropsNoClassName {
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
  activeIndex?: number;
  autoSlide?: number;
  animate?: boolean;
  onSlideChange?: Function;
}

interface CCarouselCaption extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CCarouselControl extends HTMLPropsNoClassName {
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
  direction: 'prev' | 'next';
}

interface CCarouselIndicators extends HTMLPropsNoClassName {
  className?: className;
  innerRef?: innerRef;
  indicatorsClass?: string
}

interface CCarouselInner extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CCarouselItem extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

type columnProps = boolean | number | string | {
  size?: boolean | number | string,
  order?: string | number,
  offset?: string | number
}

interface CCol extends HTMLPropsNoClassName {
  children?: ChildElement
  tag?: any
  className?: className
  innerRef?: innerRef
  xs?: columnProps
  sm?: columnProps
  md?: columnProps
  lg?: columnProps
  xl?: columnProps
  xxl?: columnProps
  widths?: Array<any>
}


interface Transition {
  nodeRef?: any;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
  timeout?: number | { enter?: number, exit?: number, appear?: number };
  addEndListener?: Function;
  onEnter?: Function;
  onEntering?: Function;
  onEntered?: Function;
  onExit?: Function;
  onExiting?: Function;
  onExited?: Function;
}

interface CCollapse extends HTMLPropsNoClassName {
  children?: ChildElement | Array<ChildElement>;
  className?: className;
  innerRef?: innerRef;
  show?: boolean;
  navbar?: boolean;
}

interface CContainer extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  fluid?: boolean;
}

interface CCreateElement {
  items: Array<any>;
  components?: object;
}

interface CDataTable {
  innerRef?: innerRef;
  overTableSlot?: ChildElement;
  columnHeaderSlot?: object;
  sortingIconSlot?: Function;
  columnFilterSlot?: object;
  noItemsViewSlot?: ChildElement;
  noItemsView?: object;
  captionSlot?: ChildElement;
  underTableSlot?: ChildElement;
  scopedSlots?: object;
  theadTopSlot?: ChildElement;
  loadingSlot?: ChildElement;
  loading?: boolean;
  fields?: Array<any>;
  pagination?: boolean | object;
  activePage?: number;
  itemsPerPage?: number;
  items?: Array<any>;
  sorter?: boolean | object;
  clickableRows?: boolean;
  columnFilter?: boolean | object;
  tableFilterValue?: string;
  tableFilter?: boolean | object;
  cleaner?: boolean | Function;
  addTableClasses?: string | Array<any> | object;
  size?: string;
  dark?: boolean;
  striped?: boolean;
  hover?: boolean;
  border?: boolean;
  outlined?: boolean;
  responsive?: boolean;
  footer?: boolean;
  itemsPerPageSelect?: boolean | object;
  sorterValue?: object;
  columnFilterValue?: object;
  header?: boolean;
  onRowClick?: Function;
  onSorterValueChange?: Function;
  onPaginationChange?: Function;
  onColumnFilterChange?: Function;
  onPagesChange?: Function;
  onTableFilterChange?: Function;
  onPageChange?: Function;
  onFilteredItemsChange?: Function;
}

interface CDropdown extends HTMLPropsNoClassName {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  inNav?: boolean;
}

interface CDropdownItem extends CLink {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  color?: string;
  divider?: boolean;
  header?: boolean;
  disabled?: boolean;
  onClick?: Function;
  active?: boolean;
}

interface CDropdownDivider extends CDropdownItem { }

interface CDropdownHeader extends CDropdownItem { }

interface CDropdownMenu extends HTMLPropsNoClassName {
  children: ChildElement;
  className?: className;
  innerRef?: innerRef;
  modifiers?: Array<any>;
  show?: boolean;
  placement?: '' | 'top-end' | 'top' | 'top-start' |
  'bottom-end' | 'bottom' | 'bottom-start' |
  'right-start' | 'right' | 'right-end' |
  'left-start' | 'left' | 'left-end';
}

interface CDropdownToggle extends CButton {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  caret?: boolean;
  onClick?: Function;
  split?: boolean;
  disabled?: boolean;
}

interface CElementCover extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  boundaries?: Array<any>;
  opacity?: number;
}

interface CEmbed extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  ratio?: '21by9' | '16by9' | '4by3' | '1by1';
}

interface CEmbedItem extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  type?: 'iframe' | 'embed' | 'video' | 'object' | 'img';
}

interface CFade extends Transition {
  tag?: any;
  children?: Array<ChildElement> | ChildElement;
  className?: className;
  innerRef?: innerRef;
  baseClass?: string;
  baseClassActive?: string;
}

interface CFooter extends HTMLPropsNoClassName {
  tag?: Function | string;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  fixed?: boolean;
}

interface CForm extends HTMLPropsNoClassName {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  inline?: boolean;
  wasValidated?: boolean;
}

interface CValidFeedback extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  tooltip?: boolean;
}

interface CInvalidFeedback extends CValidFeedback { }

interface CFormGroup {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  row?: boolean;
  variant?: 'checkbox' | 'custom-checkbox' | 'custom-radio';
  inline?: boolean;
  disabled?: boolean;
}

interface CFormText extends HTMLPropsNoClassName {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  color?: string;
}

interface CHeader extends HTMLPropsNoClassName {
  tag?: Function | string;
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
  fixed?: boolean;
  withSubheader?: boolean;
  colorScheme?: string;
}

interface CHeaderNav extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CHeaderNavItem extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CHeaderNavLink extends CLink {
  className?: className;
  innerRef?: innerRef;
}

interface CImg extends HTMLPropsNoClassName {
  tag?: any;
  className?: className | Array<any>;
  innerRef?: innerRef;
  src?: string;
  width?: number | string;
  height?: number | string;
  block?: boolean;
  fluid?: boolean;
  fluidGrow?: boolean;
  shape?: string;
  thumbnail?: boolean;
  align?: '' | 'left' | 'right' | 'center';
  placeholderColor?: string;
}

interface sharedInputProps {
  className?: className;
  innerRef?: innerRef;
  valid?: boolean;
  invalid?: boolean;
}

interface CInput extends sharedInputProps, Omit< HTMLPropsNoClassName, 'size'> {
  plaintext?: boolean;
  type?: string;
  size?: string;
  sizeHtml?: string | number;
}

interface CTextarea extends sharedInputProps, Omit< HTMLPropsNoClassName, 'size'> {
  plaintext?: boolean;
  size?: string;
}

interface CInputFile extends sharedInputProps, HTMLPropsNoClassName {
  custom?: boolean;
}

interface CInputCheckbox extends sharedInputProps, HTMLPropsNoClassName {
  custom?: boolean;
}

interface CInputRadio extends CInputCheckbox { }

interface CSelect extends sharedInputProps, Omit< HTMLPropsNoClassName, 'size'> {
  children?: ChildElement;
  size?: string;
  sizeHtml?: string | number;
}

interface CInputGroup extends Omit< HTMLPropsNoClassName, 'size'> {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  size?: string;
}

interface CInputGroupAppend extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CInputGroupPrepend extends CInputGroupAppend { }

interface CInputGroupText extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CJumbotron extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  fluid?: boolean;
}

interface CLabel extends HTMLPropsNoClassName {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  hidden?: boolean;
  variant?: 'custom-file' | 'checkbox' | 'custom-checkbox';
  col?: string | boolean;
}

interface NavLink extends HTMLProps<HTMLAnchorElement> {
  to?: string | object | Function;
  replace?: boolean;
  component?: any;
  activeclassName?: className;
  activeStyle?: object;
  exact?: boolean;
  strict?: boolean;
  isActive?: Function;
  location?: object;
}

interface CLink extends Omit<NavLink, 'className' | 'onClick' | 'to'> {
  children?: ChildElement;
  innerRef?: innerRef;
  active?: boolean;
  href?: string;
  onClick?: Function;
  disabled?: boolean;
  className?: className | Array<any>;
  to?: object | string | number;
}


interface CCardLink extends CLink { }

interface CListGroup extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  flush?: boolean;
  horizontal?: string;
  accent?: boolean;
}

interface CListGroupItem extends Omit<CLink, 'action'> {
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  accent?: string;
  action?: boolean;
}

interface CMedia extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CMediaBody extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CModal extends Omit< HTMLPropsNoClassName, 'size'> {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  show?: boolean;
  centered?: boolean;
  size?: '' | 'sm' | 'lg' | 'xl';
  backdrop?: boolean;
  color?: string;
  borderColor?: string;
  onOpened?: Function;
  onClosed?: Function;
  fade?: boolean;
  closeOnBackdrop?: boolean;
  onClose?: Function;
  addContentClass?: string;
  scrollable?: boolean;
}

interface CModalBody extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CModalFooter extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CModalHeader extends HTMLPropsNoClassName {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  closeButton?: boolean;
}

interface CModalTitle extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CNav extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  variant?: '' | 'tabs' | 'pills';
  vertical?: boolean | string;
  justified?: boolean;
  fill?: boolean;
  inCard?: boolean;
}

interface CNavbar extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  light?: boolean;
  color?: string;
  fixed?: '' | 'top' | 'bottom';
  sticky?: boolean;
  expandable?: boolean | string;
}

interface CNavbarNav extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CNavbarText extends HTMLPropsNoClassName {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CNavItem extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CNavLink extends CLink {
  className?: className;
  innerRef?: innerRef;
  onClick?: Function;
}

interface CPagination extends Omit< HTMLPropsNoClassName, 'size'> {
  className?: className;
  innerRef?: innerRef;
  activePage?: number;
  dots?: boolean;
  arrows?: boolean;
  doubleArrows?: boolean;
  firstButton?: ChildElement | string;
  previousButton?: ChildElement | string;
  nextButton?: ChildElement | string;
  lastButton?: ChildElement | string;
  size?: '' | 'sm' | 'lg';
  align?: 'start' | 'center' | 'end';
  addListClass?: string;
  limit?: number;
  pages?: number;
  onActivePageChange: Function;
}

interface CTooltip {
  children?: ChildElement;
  content?: ChildElement;
  interactive?: boolean;
  placement?: '' | 'top-end' | 'top' | 'top-start' |
  'bottom-end' | 'bottom' | 'bottom-start' |
  'right-start' | 'right' | 'right-end' |
  'left-start' | 'left' | 'left-end';
  trigger?: string;
  advancedOptions?: object;
}

interface CPopover extends CTooltip {
  content?: ChildElement;
  header?: ChildElement;
}

interface CProgress extends Omit< HTMLPropsNoClassName, 'size'> {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  size?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  precision?: number;
  showPercentage?: boolean;
  showValue?: boolean;
}

interface CProgressBar extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  value?: number;
  max?: number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  precision?: number;
  showPercentage?: boolean;
  showValue?: boolean;
}

interface CRow extends Omit< HTMLPropsNoClassName, 'form'> {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  gutters?: boolean;
  form?: boolean;
  alignHorizontal?: string;
  alignVertical?: string;
}

interface CScrollbar extends HTMLPropsNoClassName {
  tag?: Function | string;
  className?: className;
  settings?: object;
  switcher?: boolean;
  innerRef?: innerRef;
}

interface CSidebar extends Omit< HTMLPropsNoClassName, 'size'> {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  fixed?: boolean;
  unfoldable?: boolean;
  overlaid?: boolean;
  breakpoint?: false | '' | 'sm' | 'md' | 'lg' | 'xl';
  minimize?: boolean;
  show?: '' | true | false | 'responsive';
  size?: '' | 'sm' | 'lg' | 'xl';
  hideOnMobileClick?: boolean;
  aside?: boolean;
  colorScheme?: string;
  dropdownMode?: '' | 'openActive' | 'close' | 'closeInactive' | 'noAction';
  onShowChange?: Function;
  onMinimizeChange?: Function;
}

interface CSidebarClose extends CButtonClose { }

interface CSidebarFooter extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: Function | string;
  className?: className;
  innerRef?: innerRef;
}

interface CSidebarForm extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: Function | string;
  className?: className;
  innerRef?: innerRef;
}

interface CSidebarHeader extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: Function | string;
  className?: className;
  innerRef?: innerRef;
}

interface CSidebarMinimizer extends HTMLPropsNoClassName {
  className?: className;
  innerRef?: innerRef;
}

interface CSidebarNav extends HTMLPropsNoClassName {
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
}

interface CSidebarNavDivider extends HTMLPropsNoClassName {
  className?: className;
  innerRef?: innerRef;
}

interface CSidebarNavDropdown extends HTMLPropsNoClassName {
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
  name?: string;
  icon?: object | string;
  fontIcon?: string;
  show?: boolean;
  route?: string;
}

interface CSidebarNavItem extends Omit<CLink, 'label'> {
  className?: className;
  innerRef?: innerRef;
  icon?: string | object;
  fontIcon?: string;
  badge?: object;
  addLinkClass?: string;
  label?: boolean;
  name?: string;
}

interface CSidebarNavTitle extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CSpinner extends Omit< HTMLPropsNoClassName, 'size'> {
  tag?: any;
  className?: className;
  innerRef?: innerRef;
  grow?: boolean;
  size?: string;
  color?: string;
}

interface CSubheader extends HTMLPropsNoClassName {
  children?: ChildElement;
  tag?: any;
  className?: className;
  innerRef?: innerRef;
}

interface CSwitch extends Omit< HTMLPropsNoClassName, 'size'> {
  className?: className
  innerRef?: innerRef
  size?: '' | 'lg' | 'sm'
  color?: string
  labelOn?: string
  labelOff?: string
  variant?: '' | '3d' | 'opposite' | 'outline'
  shape?: '' | 'pill' | 'square'
}

interface CTabContent extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  fade?: boolean;
}

interface CTabPane extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  active?: boolean;
}

interface CTabs extends HTMLPropsNoClassName {
  children?: ChildElement;
  activeTab?: string | number;
  onActiveTabChange?: Function;
}

interface CToast extends HTMLPropsNoClassName {
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
  show?: boolean;
  autohide?: number | boolean;
  fade?: boolean;
  color?: string;
  onStateChange?: Function;
}

interface CToastBody extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
}

interface CToaster extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  position?: '' | 'static' | 'top-right' | 'top-left' | 'top-center' | 'top-full' |
  'bottom-right' | 'bottom-left' | 'bottom-center' | 'bottom-full';
}

interface CToastHeader extends HTMLPropsNoClassName {
  className?: className;
  children?: ChildElement;
  innerRef?: innerRef;
  closeButton?: boolean;
}

interface CToggler extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
  tag?: any;
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  inHeader?: boolean;
  inNavbar?: boolean;
}

interface CWidgetBrand extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  color?: string;
  rightHeader?: string;
  rightFooter?: string;
  leftHeader?: string;
  leftFooter?: string;
  addHeaderClasses?: string | Array<any> | object;
  bodySlot?: ChildElement;
}

interface CWidgetDropdown extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  header?: string;
  color?: string;
  footerSlot?: ChildElement;
  text?: string;
}

interface CWidgetIcon extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  header?: string;
  text?: string;
  iconPadding?: boolean;
  color?: string;
  footerSlot?: ChildElement;
}

interface CWidgetProgress extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  header?: string;
  text?: string;
  footer?: string;
  color?: string;
  value?: number;
  inverse?: boolean;
}

interface CWidgetProgressIcon extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  header?: string;
  text?: string;
  color?: string;
  value?: number;
  inverse?: boolean;
  progressSlot?: ChildElement;
}

interface CWidgetSimple extends HTMLPropsNoClassName {
  children?: ChildElement;
  className?: className;
  innerRef?: innerRef;
  header?: string;
  text?: string;
}

export declare const CAlert: (props: CAlert) => any;
export declare const CBadge: (props: CBadge) => any;
export declare const CBrand: (props: CBrand) => any;
export declare const CHeaderBrand: (props: CHeaderBrand) => any;
export declare const CNavbarBrand: (props: CNavbarBrand) => any;
export declare const CSidebarBrand: (props: CSidebarBrand) => any;
export declare const CBreadcrumb: (props: CBreadcrumb) => any;
export declare const CBreadcrumbItem: (props: CBreadcrumbItem) => any;
export declare const CBreadcrumbRouter: (props: CBreadcrumbRouter) => any;
export declare const CButton: (props: CButton) => any;
export declare const CButtonClose: (props: CButtonClose) => any;
export declare const CButtonGroup: (props: CButtonGroup) => any;
export declare const CButtonToolbar: (props: CButtonToolbar) => any;
export declare const CCallout: (props: CCallout) => any;
export declare const CCard: (props: CCard) => any;
export declare const CCardBody: (props: CCardBody) => any;
export declare const CCardFooter: (props: CCardFooter) => any;
export declare const CCardGroup: (props: CCardGroup) => any;
export declare const CCardHeader: (props: CCardHeader) => any;
export declare const CCardImg: (props: CCardImg) => any;
export declare const CCardImgOverlay: (props: CCardImgOverlay) => any;
export declare const CCardSubtitle: (props: CCardSubtitle) => any;
export declare const CCardText: (props: CCardText) => any;
export declare const CCardTitle: (props: CCardTitle) => any;
export declare const CCarousel: (props: CCarousel) => any;
export declare const CCarouselCaption: (props: CCarouselCaption) => any;
export declare const CCarouselControl: (props: CCarouselControl) => any;
export declare const CCarouselIndicators: (props: CCarouselIndicators) => any;
export declare const CCarouselInner: (props: CCarouselInner) => any;
export declare const CCarouselItem: (props: CCarouselItem) => any;
export declare const CCol: (props: CCol) => any;
export declare const CCollapse: (props: CCollapse) => any;
export declare const CContainer: (props: CContainer) => any;
export declare const CCreateElement: (props: CCreateElement) => any;
export declare const CDataTable: (props: CDataTable) => any;
export declare const CDropdown: (props: CDropdown) => any;
export declare const CDropdownItem: (props: CDropdownItem) => any;
export declare const CDropdownDivider: (props: CDropdownDivider) => any;
export declare const CDropdownHeader: (props: CDropdownHeader) => any;
export declare const CDropdownMenu: (props: CDropdownMenu) => any;
export declare const CDropdownToggle: (props: CDropdownToggle) => any;
export declare const CElementCover: (props: CElementCover) => any;
export declare const CEmbed: (props: CEmbed) => any;
export declare const CEmbedItem: (props: CEmbedItem) => any;
export declare const CFade: (props: CFade) => any;
export declare const CFooter: (props: CFooter) => any;
export declare const CForm: (props: CForm) => any;
export declare const CValidFeedback: (props: CValidFeedback) => any;
export declare const CInvalidFeedback: (props: CInvalidFeedback) => any;
export declare const CFormGroup: (props: CFormGroup) => any;
export declare const CFormText: (props: CFormText) => any;
export declare const CHeader: (props: CHeader) => any;
export declare const CHeaderNav: (props: CHeaderNav) => any;
export declare const CHeaderNavItem: (props: CHeaderNavItem) => any;
export declare const CHeaderNavLink: (props: CHeaderNavLink) => any;
export declare const CImg: (props: CImg) => any;
export declare const CInput: (props: CInput) => any;
export declare const CTextarea: (props: CTextarea) => any;
export declare const CInputFile: (props: CInputFile) => any;
export declare const CInputCheckbox: (props: CInputCheckbox) => any;
export declare const CInputRadio: (props: CInputRadio) => any;
export declare const CSelect: (props: CSelect) => any;
export declare const CInputGroup: (props: CInputGroup) => any;
export declare const CInputGroupAppend: (props: CInputGroupAppend) => any;
export declare const CInputGroupPrepend: (props: CInputGroupPrepend) => any;
export declare const CInputGroupText: (props: CInputGroupText) => any;
export declare const CJumbotron: (props: CJumbotron) => any;
export declare const CLabel: (props: CLabel) => any;
export declare const CLink: (props: CLink) => any;
export declare const CCardLink: (props: CCardLink) => any;
export declare const CListGroup: (props: CListGroup) => any;
export declare const CListGroupItem: (props: CListGroupItem) => any;
export declare const CMedia: (props: CMedia) => any;
export declare const CMediaBody: (props: CMediaBody) => any;
export declare const CModal: (props: CModal) => any;
export declare const CModalBody: (props: CModalBody) => any;
export declare const CModalFooter: (props: CModalFooter) => any;
export declare const CModalHeader: (props: CModalHeader) => any;
export declare const CModalTitle: (props: CModalTitle) => any;
export declare const CNav: (props: CNav) => any;
export declare const CNavbar: (props: CNavbar) => any;
export declare const CNavbarNav: (props: CNavbarNav) => any;
export declare const CNavbarText: (props: CNavbarText) => any;
export declare const CNavItem: (props: CNavItem) => any;
export declare const CNavLink: (props: CNavLink) => any;
export declare const CPagination: (props: CPagination) => any;
export declare const CPopover: (props: CPopover) => any;
export declare const CProgress: (props: CProgress) => any;
export declare const CProgressBar: (props: CProgressBar) => any;
export declare const CRow: (props: CRow) => any;
export declare const CScrollbar: (props: CScrollbar) => any;
export declare const CSidebar: (props: CSidebar) => any;
export declare const CSidebarClose: (props: CSidebarClose) => any;
export declare const CSidebarFooter: (props: CSidebarFooter) => any;
export declare const CSidebarForm: (props: CSidebarForm) => any;
export declare const CSidebarHeader: (props: CSidebarHeader) => any;
export declare const CSidebarMinimizer: (props: CSidebarMinimizer) => any;
export declare const CSidebarNav: (props: CSidebarNav) => any;
export declare const CSidebarNavDivider: (props: CSidebarNavDivider) => any;
export declare const CSidebarNavDropdown: (props: CSidebarNavDropdown) => any;
export declare const CSidebarNavItem: (props: CSidebarNavItem) => any;
export declare const CSidebarNavTitle: (props: CSidebarNavTitle) => any;
export declare const CSpinner: (props: CSpinner) => any;
export declare const CSubheader: (props: CSubheader) => any;
export declare const CSwitch: (props: CSwitch) => any;
export declare const CTabContent: (props: CTabContent) => any;
export declare const CTabPane: (props: CTabPane) => any;
export declare const CTabs: (props: CTabs) => any;
export declare const CToast: (props: CToast) => any;
export declare const CToastBody: (props: CToastBody) => any;
export declare const CToaster: (props: CToaster) => any;
export declare const CToastHeader: (props: CToastHeader) => any;
export declare const CTooltip: (props: CTooltip) => any;
export declare const CToggler: (props: CToggler) => any;
export declare const CWidgetBrand: (props: CWidgetBrand) => any;
export declare const CWidgetDropdown: (props: CWidgetDropdown) => any;
export declare const CWidgetIcon: (props: CWidgetIcon) => any;
export declare const CWidgetProgress: (props: CWidgetProgress) => any;
export declare const CWidgetProgressIcon: (props: CWidgetProgressIcon) => any;
export declare const CWidgetSimple: (props: CWidgetSimple) => any;
