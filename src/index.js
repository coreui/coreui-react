export {default as CAlert} from './alert/CAlert';
export {default as CBadge} from './badge/CBadge';
export {default as CButton} from './button/CButton';
export {default as CButtonClose} from './button/CButtonClose';
export {default as CButtonGroup} from './button/CButtonGroup';
export {default as CButtonToolbar} from './button/CButtonToolbar';
export {default as CBreadcrumb} from './breadcrumb/CBreadcrumb';
export {default as CBreadcrumbRouter} from './breadcrumb/CBreadcrumbRouter';
export {default as CBreadcrumbItem} from './breadcrumb/CBreadcrumbItem';
export {default as CCallout} from './callout/CCallout';
export {default as CCard} from './card/CCard';
export {default as CCardBody} from './card/CCardBody';
export {default as CCardHeader} from './card/CCardHeader';
export {default as CCardFooter} from './card/CCardFooter';
export {default as CCardGroup} from './card/CCardGroup';
export {default as CCardImg} from './card/CCardImg';
export {default as CCardImgOverlay} from './card/CCardImgOverlay';
export {default as CCardLink} from './card/CCardLink';
export {default as CCardTitle} from './card/CCardTitle';
export {default as CCardSubtitle} from './card/CCardSubtitle';
export {default as CCardText} from './card/CCardText';
export {default as CCarousel} from './carousel/CCarousel';
export {default as CCarouselItem} from './carousel/CCarouselItem';
export {default as CCarouselControl} from './carousel/CCarouselControl';
export {default as CCarouselIndicators} from './carousel/CCarouselIndicators';
export {default as CCarouselCaption} from './carousel/CCarouselCaption';
export {default as CCarouselInner} from './carousel/CCarouselInner';
export {default as CCollapse} from './collapse/CCollapse';
export {default as CCreateElement} from './create-element/CCreateElement';
export {default as CDropdown} from './dropdown/CDropdown';
export {default as CDropdownDivider} from './dropdown/CDropdownDivider';
export {default as CDropdownHeader} from './dropdown/CDropdownHeader';
export {default as CDropdownItem} from './dropdown/CDropdownItem';
export {default as CDropdownMenu} from './dropdown/CDropdownMenu';
export {default as CDropdownToggle} from './dropdown/CDropdownToggle';
export {default as CElementCover} from './element-cover/CElementCover';
export {default as CEmbed} from './embed/CEmbed';
export {default as CEmbedItem} from './embed/CEmbedItem';
export {default as CFade} from './fade/CFade';
export {default as CForm} from './form/CForm';
export { CValidFeedback, CInvalidFeedback } from './form/CFormFeedback';
export {default as CLabel} from './form/CLabel';
export {default as CFormGroup} from './form/CFormGroup';
export {default as CFormText} from './form/CFormText';
export {
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CSelect
}
from './form/CInput';
export {default as CInputGroup} from './form/CInputGroup';
export {CInputGroupPrepend} from './form/CInputGroupAddon';
export {CInputGroupAppend} from './form/CInputGroupAddon';
export {default as CInputGroupText} from './form/CInputGroupText';
export {default as CRow} from './grid/CRow';
export {default as CCol} from './grid/CCol';
export {default as CContainer} from './grid/CContainer';
export {default as CImg} from './image/CImg';
export {default as CJumbotron} from './jumbotron/CJumbotron';
export {default as CLink} from './link/CLink';
export {default as CListGroup} from './list-group/CListGroup';
export {default as CListGroupItem} from './list-group/CListGroupItem';
import React from 'react'
const wrapper = props => {
  console.warn('CListGroupItemText component is deprecated, please use div tag instead')
  return <div {...props}></div>
}
const heading = props => {
  console.warn('CListGroupItemHeading component is deprecated, please use h5 tag instead')
  return <h5 {...props}></h5>
}
export { wrapper as CListGroupItemText};
export { heading as CListGroupItemHeading};
export {default as CMedia} from './media/CMedia';
export {default as CMediaBody} from './media/CMediaBody';
export {default as CModal} from './modal/CModal';
export {default as CModalBody} from './modal/CModalBody';
export {default as CModalHeader} from './modal/CModalHeader';
export {default as CModalFooter} from './modal/CModalFooter';
export {default as CModalTitle} from './modal/CModalTitle';
export {default as CNav} from './nav/CNav';
export {default as CNavItem} from './nav/CNavItem';
export {default as CNavLink} from './nav/CNavLink';
export {default as CNavbarBrand} from './navbar/CNavbarBrand';
export {default as CNavbar} from './navbar/CNavbar';
export {default as CNavbarNav} from './navbar/CNavbarNav';
export {default as CNavbarText} from './navbar/CNavbarText';
export {default as CPagination} from './pagination/CPagination';
export {default as CProgress} from './progress/CProgress';
export {default as CProgressBar} from './progress/CProgressBar';
export {default as CSpinner} from './spinner/CSpinner';
export {default as CSwitch} from './switch/CSwitch';
export {default as CDataTable} from './table/CDataTable';
export {default as CTabs} from './tabs/CTabs';
export {default as CTabPane} from './tabs/CTabPane';
export {default as CTabContent} from './tabs/CTabContent';
export {default as CFooter} from './template/CFooter';
export {default as CHeader} from './template/CHeader';
export {default as CHeaderNav} from './template/CHeaderNav';
export {default as CHeaderNavItem} from './template/CHeaderNavItem';
export {default as CHeaderNavLink} from './template/CHeaderNavLink';
export {default as CHeaderBrand} from './template/CHeaderBrand';
export {default as CSubheader} from './template/CSubheader';
export {default as CSidebar} from './template/CSidebar';
export {default as CSidebarBrand} from './template/CSidebarBrand';
export {default as CSidebarNavDivider} from './template/CSidebarNavDivider';
export {default as CSidebarNavTitle} from './template/CSidebarNavTitle';
export {default as CSidebarNavItem} from './template/CSidebarNavItem';
export {default as CSidebarNavDropdown} from './template/CSidebarNavDropdown';
export {default as CSidebarFooter} from './template/CSidebarFooter';
export {default as CSidebarForm} from './template/CSidebarForm';
export {default as CSidebarHeader} from './template/CSidebarHeader';
export {default as CSidebarMinimizer} from './template/CSidebarMinimizer';
export {default as CSidebarNav} from './template/CSidebarNav';
export {default as CSidebarClose} from './template/CSidebarClose';
export {default as CToast} from './toast/CToast';
export {default as CToastHeader} from './toast/CToastHeader';
export {default as CToastBody} from './toast/CToastBody';
export {default as CToaster} from './toast/CToaster';
export {default as CToggler} from './toggler/CToggler';
export {default as CTooltip} from './tooltip/CTooltip';
export {default as CPopover} from './tooltip/CPopover';
// export {default as CPortal} from './portal/CPortal';
export {default as CWidgetProgress} from './widgets/CWidgetProgress';
export {default as CWidgetIcon} from './widgets/CWidgetIcon';
export {default as CWidgetBrand} from './widgets/CWidgetBrand';
export {default as CWidgetProgressIcon} from './widgets/CWidgetProgressIcon';
export {default as CWidgetDropdown} from './widgets/CWidgetDropdown';
export {default as CWidgetSimple} from './widgets/CWidgetSimple';
