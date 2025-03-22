import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionFlushExample = () => {
  return (
    <CAccordion flush>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the third item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
