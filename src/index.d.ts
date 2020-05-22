import React from 'react'

type ChildElement = any

interface CAlert {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  onShowChange?: Function;
  closeButton?: boolean;
  color?: string;
  fade?: boolean;
  show?: boolean | number;
}

interface CBadge extends CLink {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  color?: string;
  shape?: '' | 'pill';
}

interface CBrand extends CLink {
  tag?: any;
  children?: ChildElement;
  className?: string | Array<any>;
  innerRef?: object | Function | string;
}

interface CHeaderBrand extends CBrand { }
interface CNavbarBrand extends CBrand { }
interface CSidebarBrand extends CBrand { }

interface CBreadcrumb {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CBreadcrumbItem {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  active?: boolean;
}

interface CBreadcrumbRouter {
  className?: string;
  innerRef?: object | Function | string;
  routes?: Array<any>;
}

interface CButton extends CLink {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
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

interface CButtonClose {
  children?: ChildElement;
  className?: string;
  buttonClass?: string;
  innerRef?: object | Function | string;
}

interface CButtonGroup {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  size?: '' | 'sm' | 'lg';
  vertical?: boolean;
}

interface CButtonToolbar {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  role?: string;
  justify?: '' | 'start' | 'end' | 'between' | 'center';
}

interface CCallout {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  color?: string;
}

interface sharedCardProps {
  align?: '' | 'left' | 'center' | 'right';
  color?: string;
  borderColor?: string;
  textColor?: string;
}

interface CCard extends sharedCardProps {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  accentColor?: string;
}

interface CCardBody extends sharedCardProps {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCardFooter extends sharedCardProps {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCardGroup {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  deck?: boolean;
  columns?: boolean;
}

interface CCardHeader extends sharedCardProps {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCardImg extends CImg {
  variant?: '' | 'top' | 'bottom' | 'full';
}

interface CCardImgOverlay {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCardSubtitle {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCardText {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCardTitle {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCarousel {
  className?: string;
  children?: ChildElement;
  innerRef?: object | Function | string;
  activeIndex?: number;
  autoSlide?: number;
  animate?: boolean;
  onSlideChange?: Function;
}

interface CCarouselCaption {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCarouselControl {
  className?: string;
  children?: ChildElement;
  innerRef?: object | Function | string;
  direction: 'prev' | 'next';
}

interface CCarouselIndicators {
  className?: string;
  innerRef?: object | Function | string;
  indicatorsClass?: string
}

interface CCarouselInner {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCarouselItem {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CCol {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  xs?: columnProps;
  sm?: columnProps;
  md?: columnProps;
  lg?: columnProps;
  xl?: columnProps;
  widths?: Array<any>;
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

interface CCollapse {
  children?: ChildElement | Array<ChildElement>;
  className?: string;
  innerRef?: object | Function | string;
  show?: boolean;
  navbar?: boolean;
}

interface CContainer {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  fluid?: boolean;
}

interface CCreateElement {
  items: Array<any>;
  components?: object;
}

interface CDataTable {
  innerRef?: object | Function | string;
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

interface CDropdown {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  inNav?: boolean;
}

interface CDropdownItem extends CLink {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  color?: string;
  divider?: boolean;
  header?: boolean;
  disabled?: boolean;
  onClick?: Function;
  active?: boolean;
}

interface CDropdownMenu {
  children: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
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
  className?: string;
  innerRef?: object | Function | string;
  caret?: boolean;
  onClick?: Function;
  split?: boolean;
  disabled?: boolean;
}

interface CElementCover {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  boundaries?: Array<any>;
  opacity?: number;
}

interface CEmbed {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  ratio?: '21by9' | '16by9' | '4by3' | '1by1';
}

interface CEmbedItem {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  type?: 'iframe' | 'embed' | 'video' | 'object' | 'img';
}

interface CFade extends Transition{
  tag?: any;
  children?: Array<ChildElement> | ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  baseClass?: string;
  baseClassActive?: string;
}

interface CFooter {
  tag?: Function | string;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  fixed?: boolean;
}

interface CForm {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  inline?: boolean;
  wasValidated?: boolean;
}

interface CValidFeedback {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  tooltip?: boolean;
}

interface CInvalidFeedback extends CValidFeedback {}

interface CFormGroup {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  row?: boolean;
  variant?: 'checkbox' | 'custom-checkbox' | 'custom-radio';
  inline?: boolean;
  disabled?: boolean;
}

interface CFormText {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  color?: string;
}

interface CHeader {
  tag?: Function | string;
  className?: string;
  children?: ChildElement;
  innerRef?: object | Function | string;
  fixed?: boolean;
  withSubheader?: boolean;
  colorScheme?: string;
}

interface CHeaderNav {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CHeaderNavItem {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CHeaderNavLink extends CLink {
  className?: string;
  innerRef?: object | Function | string;
}

interface CImg {
  tag?: any;
  className?: string | Array<any>;
  innerRef?: object | Function | string;
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
  className?: string;
  innerRef?: object | Function | string;
  valid?: boolean;
  invalid?: boolean;
}

interface CInput extends sharedInputProps {
  plaintext?: boolean;
  type?: string;
  size?: string;
  sizeHtml?: string | number;
}

interface CTextarea extends sharedInputProps {
  plaintext?: boolean;
  size?: string;
}

interface CInputFile extends sharedInputProps {
  custom?: boolean;
}

interface CInputCheckbox extends sharedInputProps {
  custom?: boolean;
}

interface CInputRadio extends CInputCheckbox {}

interface CSelect extends sharedInputProps {
  children?: ChildElement;
  size?: string;
  sizeHtml?: string | number;
}

interface CInputGroup {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  size?: string;
}

interface CInputGroupAppend {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CInputGroupPrepend {}

interface CInputGroupText {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CJumbotron {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  fluid?: boolean;
}

interface CLabel {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  hidden?: boolean;
  variant?: 'custom-file' | 'checkbox' | 'custom-checkbox';
  col?: string | boolean;
}

interface NavLink {
  to?: string | object | Function;
  replace?: boolean;
  component?: any;
  activeClassName?: string;
  activeStyle?: object;
  exact?: boolean;
  strict?: boolean;
  isActive?: Function;
  location?: object;
}

interface CLink extends NavLink {
  children?: ChildElement;
  innerRef?: object | Function | string;
  active?: boolean;
  href?: string;
  onClick?: Function;
  disabled?: boolean;
  className ?: string | Array<any>;
  to ?: object | string | number;
}

interface CCardLink extends CLink {}

interface CListGroup {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  flush?: boolean;
  horizontal?: string;
  accent?: boolean;
}

interface CListGroupItemHeading {
  children?: ChildElement;
  tag?: any;
  className?: any;
  innerRef?: object | Function | string;
}

interface CListGroupItem extends CLink {
  tag?: any;
  className?: any;
  innerRef?: object | Function | string;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  accent?: string;
  action?: boolean;
}

interface CListGroupItemText {
  children?: ChildElement;
  tag?: any;
  className?: any;
  innerRef?: object | Function | string;
}

interface CMedia {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CMediaBody {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CModal {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
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
}

interface CModalBody {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CModalFooter {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CModalHeader {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  closeButton?: boolean;
}

interface CModalTitle {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CNav {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  variant?: '' | 'tabs' | 'pills';
  vertical?: boolean | string;
  justified?: boolean;
  fill?: boolean;
  inCard?: boolean;
}

interface CNavbar {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  light?: boolean;
  color?: string;
  fixed?: '' | 'top' | 'bottom';
  sticky?: boolean;
  expandable?: boolean | string;
}

interface CNavbarNav {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CNavbarText {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CNavItem {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CNavLink extends CLink {
  className?: string;
  innerRef?: func | string | object;
  onClick?: Function;
}

interface CPagination {
  className?: string;
  innerRef?: object | Function | string;
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

interface CProgress {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
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

interface CProgressBar {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  value?: number;
  max?: number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  precision?: number;
  showPercentage?: boolean;
  showValue?: boolean;
}

interface CRow {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  gutters?: boolean;
  form?: boolean;
  alignHorizontal?: string;
  alignVertical?: string;
}

interface CScrollbar {
  tag?: Function | string;
  className?: string;
  settings?: object;
  switcher?: boolean;
  innerRef?: object | Function | string;
}

interface CSidebar {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
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

interface CSidebarFooter {
  children?: ChildElement;
  tag?: Function | string;
  className?: string;
  innerRef?: object | Function | string;
}

interface CSidebarForm {
  children?: ChildElement;
  tag?: Function | string;
  className?: string;
  innerRef?: object | Function | string;
}

interface CSidebarHeader {
  children?: ChildElement;
  tag?: Function | string;
  className?: string;
  innerRef?: object | Function | string;
}

interface CSidebarMinimizer {
  className?: string;
  innerRef?: object | Function | string;
}

interface CSidebarNav {
  className?: string;
  children?: ChildElement;
  innerRef?: object | Function | string;
}

interface CSidebarNavDivider {
  className?: string;
  innerRef?: object | Function | string;
}

interface CSidebarNavDropdown {
  className?: string;
  children?: ChildElement;
  innerRef?: object | Function | string;
  name?: string;
  icon?: object | string;
  fontIcon?: string;
  show?: boolean;
  route?: string;
}

interface CSidebarNavItem extends CLink {
  className?: string;
  innerRef?: func | string | object;
  icon?: string | object;
  fontIcon?: string;
  badge?: object;
  addLinkClass?: string;
  label?: boolean;
  name?: string;
}

interface CSidebarNavTitle {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
}

interface CSpinner {
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
  grow?: boolean;
  size?: string;
  color?: string;
}

interface CSubheader {
  children?: ChildElement;
  tag?: any;
  className?: string;
  innerRef?: object | Function | string;
}

interface CSwitch {
  className?: string
  innerRef?: object | Function | string
  size?: '' | 'lg' | 'sm'
  color?: string 
  labelOn?: string 
  labelOff?: string
  variant?: '' | '3d' | 'opposite' | 'outline'
  shape?: '' | 'pill' | 'square'
}

interface CTabContent {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  fade?: boolean;
}

interface CTabPane {
  children?: ChildElement;
  className?: string;
  innerRef?: func | string | object;
  active?: boolean;
}

interface CTabs {
  children?: ChildElement;
  activeTab?: string | number;
  onActiveTabChange?: Function;
}

interface CToast {
  className?: string;
  children?: ChildElement;
  innerRef?: func | string | object;
  show?: boolean;
  autohide?: number | boolean;
  fade?: boolean;
  onStateChange?: Function;
}

interface CToastBody {
  children?: ChildElement;
  className?: string;
  innerRef?: func | string | object;
}

interface CToaster {
  children?: ChildElement;
  className?: string;
  innerRef?: Function | string | object;
  position?: '' | 'static' | 'top-right' | 'top-left' | 'top-center' | 'top-full' |
    'bottom-right' | 'bottom-left' | 'bottom-center' | 'bottom-full';
}

interface CToastHeader {
  className?: string;
  children?: ChildElement;
  innerRef?: func | string | object;
  closeButton?: boolean;
}

interface CToggler {
  tag?: any;
  children?: ChildElement;
  className?: string;
  innerRef?: func | string | object;
  inHeader?: boolean;
  inNavbar?: boolean;
}

interface CWidgetBrand {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  color?: string;
  rightHeader?: string;
  rightFooter?: string;
  leftHeader?: string;
  leftFooter?: string;
  addHeaderClasses?: string | Array<any> | object;
  bodySlot?: ChildElement;
}

interface CWidgetDropdown {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  header?: string;
  color?: string;
  footerSlot?: ChildElement;
  text?: string;
}

interface CWidgetIcon {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  header?: string;
  text?: string;
  iconPadding?: boolean;
  color?: string;
  footerSlot?: ChildElement;
}

interface CWidgetProgress {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  header?: string;
  text?: string;
  footer?: string;
  color?: string;
  value?: number;
  inverse?: boolean;
}

interface CWidgetProgressIcon {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  header?: string;
  text?: string;
  color?: string;
  value?: number;
  inverse?: boolean;
  progressSlot?: ChildElement;
}

interface CWidgetSimple {
  children?: ChildElement;
  className?: string;
  innerRef?: object | Function | string;
  header?: string;
  text?: string;
}

export declare const CAlert: (props: CAlert) => React.SFC<CAlert>;
export declare const CBadge: (props: CBadge) => React.SFC<CBadge>;
export declare const CBrand: (props: CBrand) => React.SFC<CBrand>;
export declare const CHeaderBrand: (props: CHeaderBrand) => React.SFC<CHeaderBrand>;
export declare const CNavbarBrand: (props: CNavbarBrand) => React.SFC<CNavbarBrand>;
export declare const CSidebarBrand: (props: CSidebarBrand) => React.SFC<CSidebarBrand>;
export declare const CBreadcrumb: (props: CBreadcrumb) => React.SFC<CBreadcrumb>;
export declare const CBreadcrumbItem: (props: CBreadcrumbItem) => React.SFC<CBreadcrumbItem>;
export declare const CBreadcrumbRouter: (props: CBreadcrumbRouter) => React.SFC<CBreadcrumbRouter>;
export declare const CButton: (props: CButton) => React.SFC<CButton>;
export declare const CButtonClose: (props: CButtonClose) => React.SFC<CButtonClose>;
export declare const CButtonGroup: (props: CButtonGroup) => React.SFC<CButtonGroup>;
export declare const CButtonToolbar: (props: CButtonToolbar) => React.SFC<CButtonToolbar>;
export declare const CCallout: (props: CCallout) => React.SFC<CCallout>;
export declare const CCard: (props: CCard) => React.SFC<CCard>;
export declare const CCardBody: (props: CCardBody) => React.SFC<CCardBody>;
export declare const CCardFooter: (props: CCardFooter) => React.SFC<CCardFooter>;
export declare const CCardGroup: (props: CCardGroup) => React.SFC<CCardGroup>;
export declare const CCardHeader: (props: CCardHeader) => React.SFC<CCardHeader>;
export declare const CCardImg: (props: CCardImg) => React.SFC<CCardImg>;
export declare const CCardImgOverlay: (props: CCardImgOverlay) => React.SFC<CCardImgOverlay>;
export declare const CCardSubtitle: (props: CCardSubtitle) => React.SFC<CCardSubtitle>;
export declare const CCardText: (props: CCardText) => React.SFC<CCardText>;
export declare const CCardTitle: (props: CCardTitle) => React.SFC<CCardTitle>;
export declare const CCarousel: (props: CCarousel) => React.SFC<CCarousel>;
export declare const CCarouselCaption: (props: CCarouselCaption) => React.SFC<CCarouselCaption>;
export declare const CCarouselControl: (props: CCarouselControl) => React.SFC<CCarouselControl>;
export declare const CCarouselIndicators: (props: CCarouselIndicators) => React.SFC<CCarouselIndicators>;
export declare const CCarouselInner: (props: CCarouselInner) => React.SFC<CCarouselInner>;
export declare const CCarouselItem: (props: CCarouselItem) => React.SFC<CCarouselItem>;
export declare const CCol: (props: CCol) => React.SFC<CCol>;
export declare const CCollapse: (props: CCollapse) => React.SFC<CCollapse>;
export declare const CContainer: (props: CContainer) => React.SFC<CContainer>;
export declare const CCreateElement: (props: CCreateElement) => React.SFC<CCreateElement>;
export declare const CDataTable: (props: CDataTable) => React.SFC<CDataTable>;
export declare const CDropdown: (props: CDropdown) => React.SFC<CDropdown>;
export declare const CDropdownItem: (props: CDropdownItem) => React.SFC<CDropdownItem>;
export declare const CDropdownMenu: (props: CDropdownMenu) => React.SFC<CDropdownMenu>;
export declare const CDropdownToggle: (props: CDropdownToggle) => React.SFC<CDropdownToggle>;
export declare const CElementCover: (props: CElementCover) => React.SFC<CElementCover>;
export declare const CEmbed: (props: CEmbed) => React.SFC<CEmbed>;
export declare const CEmbedItem: (props: CEmbedItem) => React.SFC<CEmbedItem>;
export declare const CFade: (props: CFade) => React.SFC<CFade>;
export declare const CFooter: (props: CFooter) => React.SFC<CFooter>;
export declare const CForm: (props: CForm) => React.SFC<CForm>;
export declare const CValidFeedback: (props: CValidFeedback) => React.SFC<CValidFeedback>;
export declare const CInvalidFeedback: (props: CInvalidFeedback) => React.SFC<CInvalidFeedback>;
export declare const CFormGroup: (props: CFormGroup) => React.SFC<CFormGroup>;
export declare const CFormText: (props: CFormText) => React.SFC<CFormText>;
export declare const CHeader: (props: CHeader) => React.SFC<CHeader>;
export declare const CHeaderNav: (props: CHeaderNav) => React.SFC<CHeaderNav>;
export declare const CHeaderNavItem: (props: CHeaderNavItem) => React.SFC<CHeaderNavItem>;
export declare const CHeaderNavLink: (props: CHeaderNavLink) => React.SFC<CHeaderNavLink>;
export declare const CImg: (props: CImg) => React.SFC<CImg>;
export declare const CInput: (props: CInput) => React.SFC<CInput>;
export declare const CTextarea: (props: CTextarea) => React.SFC<CTextarea>;
export declare const CInputFile: (props: CInputFile) => React.SFC<CInputFile>;
export declare const CInputCheckbox: (props: CInputCheckbox) => React.SFC<CInputCheckbox>;
export declare const CInputRadio: (props: CInputRadio) => React.SFC<CInputRadio>;
export declare const CSelect: (props: CSelect) => React.SFC<CSelect>;
export declare const CInputGroup: (props: CInputGroup) => React.SFC<CInputGroup>;
export declare const CInputGroupAppend: (props: CInputGroupAppend) => React.SFC<CInputGroupAppend>;
export declare const CInputGroupPrepend: (props: CInputGroupPrepend) => React.SFC<CInputGroupPrepend>;
export declare const CInputGroupText: (props: CInputGroupText) => React.SFC<CInputGroupText>;
export declare const CJumbotron: (props: CJumbotron) => React.SFC<CJumbotron>;
export declare const CLabel: (props: CLabel) => React.SFC<CLabel>;
export declare const CLink: (props: CLink) => React.SFC<CLink>;
export declare const CCardLink: (props: CCardLink) => React.SFC<CCardLink>;
export declare const CListGroup: (props: CListGroup) => React.SFC<CListGroup>;
export declare const CListGroupItemHeading: (props: CListGroupItemHeading) => React.SFC<CListGroupItemHeading>;
export declare const CListGroupItem: (props: CListGroupItem) => React.SFC<CListGroupItem>;
export declare const CListGroupItemText: (props: CListGroupItemText) => React.SFC<CListGroupItemText>;
export declare const CMedia: (props: CMedia) => React.SFC<CMedia>;
export declare const CMediaBody: (props: CMediaBody) => React.SFC<CMediaBody>;
export declare const CModal: (props: CModal) => React.SFC<CModal>;
export declare const CModalBody: (props: CModalBody) => React.SFC<CModalBody>;
export declare const CModalFooter: (props: CModalFooter) => React.SFC<CModalFooter>;
export declare const CModalHeader: (props: CModalHeader) => React.SFC<CModalHeader>;
export declare const CModalTitle: (props: CModalTitle) => React.SFC<CModalTitle>;
export declare const CNav: (props: CNav) => React.SFC<CNav>;
export declare const CNavbar: (props: CNavbar) => React.SFC<CNavbar>;
export declare const CNavbarNav: (props: CNavbarNav) => React.SFC<CNavbarNav>;
export declare const CNavbarText: (props: CNavbarText) => React.SFC<CNavbarText>;
export declare const CNavItem: (props: CNavItem) => React.SFC<CNavItem>;
export declare const CNavLink: (props: CNavLink) => React.SFC<CNavLink>;
export declare const CPagination: (props: CPagination) => React.SFC<CPagination>;
export declare const CPopover: (props: CPopover) => React.SFC<CPopover>;
export declare const CProgress: (props: CProgress) => React.SFC<CProgress>;
export declare const CProgressBar: (props: CProgressBar) => React.SFC<CProgressBar>;
export declare const CRow: (props: CRow) => React.SFC<CRow>;
export declare const CScrollbar: (props: CScrollbar) => React.SFC<CScrollbar>;
export declare const CSidebar: (props: CSidebar) => React.SFC<CSidebar>;
export declare const CSidebarFooter: (props: CSidebarFooter) => React.SFC<CSidebarFooter>;
export declare const CSidebarForm: (props: CSidebarForm) => React.SFC<CSidebarForm>;
export declare const CSidebarHeader: (props: CSidebarHeader) => React.SFC<CSidebarHeader>;
export declare const CSidebarMinimizer: (props: CSidebarMinimizer) => React.SFC<CSidebarMinimizer>;
export declare const CSidebarNav: (props: CSidebarNav) => React.SFC<CSidebarNav>;
export declare const CSidebarNavDivider: (props: CSidebarNavDivider) => React.SFC<CSidebarNavDivider>;
export declare const CSidebarNavDropdown: (props: CSidebarNavDropdown) => React.SFC<CSidebarNavDropdown>;
export declare const CSidebarNavItem: (props: CSidebarNavItem) => React.SFC<CSidebarNavItem>;
export declare const CSidebarNavTitle: (props: CSidebarNavTitle) => React.SFC<CSidebarNavTitle>;
export declare const CSpinner: (props: CSpinner) => React.SFC<CSpinner>;
export declare const CSubheader: (props: CSubheader) => React.SFC<CSubheader>;
export declare const CSwitch: (props: CSwitch) => React.SFC<CSwitch>;
export declare const CTabContent: (props: CTabContent) => React.SFC<CTabContent>;
export declare const CTabPane: (props: CTabPane) => React.SFC<CTabPane>;
export declare const CTabs: (props: CTabs) => React.SFC<CTabs>;
export declare const CToast: (props: CToast) => React.SFC<CToast>;
export declare const CToastBody: (props: CToastBody) => React.SFC<CToastBody>;
export declare const CToaster: (props: CToaster) => React.SFC<CToaster>;
export declare const CToastHeader: (props: CToastHeader) => React.SFC<CToastHeader>;
export declare const CTooltip: (props: CTooltip) => React.SFC<CTooltip>;
export declare const CToggler: (props: CToggler) => React.SFC<CToggler>;
export declare const CWidgetBrand: (props: CWidgetBrand) => React.SFC<CWidgetBrand>;
export declare const CWidgetDropdown: (props: CWidgetDropdown) => React.SFC<CWidgetDropdown>;
export declare const CWidgetIcon: (props: CWidgetIcon) => React.SFC<CWidgetIcon>;
export declare const CWidgetProgress: (props: CWidgetProgress) => React.SFC<CWidgetProgress>;
export declare const CWidgetProgressIcon: (props: CWidgetProgressIcon) => React.SFC<CWidgetProgressIcon>;
export declare const CWidgetSimple: (props: CWidgetSimple) => React.SFC<CWidgetSimple>;
