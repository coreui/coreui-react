import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { CCarousel, CCarouselCaption, CCarouselItem } from '../../../index'

test('loads and displays CCarousel component', async () => {
    const { container } = render(      
        <CCarousel controls indicators>
            <CCarouselItem>
                Item-1
                <CCarouselCaption>
                    Caption-1
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                Item-2
                <CCarouselCaption>
                    Caption-2
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                Item-3
                <CCarouselCaption>
                    Caption-3
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    )

    const carousel = document.querySelector('.carousel')
    expect(carousel).toHaveClass('slide')
    if(carousel === null){
        expect(true).toBe(false)
    }else{
        expect(carousel.children[0]).toHaveClass('carousel-indicators')
        expect(carousel.children[1]).toHaveClass('carousel-inner')   
    }

    let caption = getByText(container, 'Caption-1')
    expect(caption).toHaveClass('carousel-caption')
    caption = getByText(container, 'Caption-2')
    expect(caption).toHaveClass('carousel-caption')
    caption = getByText(container, 'Caption-3')
    expect(caption).toHaveClass('carousel-caption')
    let item = getByText(container, 'Item-1')
    expect(item).toHaveClass('carousel-item')
    item = getByText(container, 'Item-2')
    expect(item).toHaveClass('carousel-item')
    item = getByText(container, 'Item-3')
    expect(item).toHaveClass('carousel-item')

    let button = document.querySelector('.carousel-control-next')
    if(button === null){
        expect(true).toBe(false)
    }else{
        expect(button.firstChild).toHaveClass('carousel-control-next-icon')       
    }
    button = document.querySelector('.carousel-control-prev')
    if(button === null){
        expect(true).toBe(false)
    }else{
        expect(button.firstChild).toHaveClass('carousel-control-prev-icon')     
    }

    expect(container).toMatchSnapshot()
})

test('CCarousel click on indicator', async () => {
    jest.useFakeTimers()
    const { container } = render(    
        <CCarousel controls indicators>
            <CCarouselItem>
                Item-1
                <CCarouselCaption>
                    Caption-1
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                Item-2
                <CCarouselCaption>
                    Caption-2
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                Item-3
                <CCarouselCaption>
                    Caption-3
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    )
    let item1 = getByText(container, 'Item-1')
    expect(item1).toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).toHaveClass('carousel-item')
    let item2 = getByText(container, 'Item-2')
    expect(item2).not.toHaveClass('active') 
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).toHaveClass('carousel-item')  
    //click
    const ci = document.querySelector('.carousel-indicators')
    let li = null
    if (ci !== null) {
        li = ci.children[1]
        if (li !== null){
            fireEvent.click(li)      
        }
    } 
    //endclick
    item1 = getByText(container, 'Item-1')
    expect(item1).toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item')
    item2 = getByText(container, 'Item-2')
    expect(item2).not.toHaveClass('active')
    expect(item2).toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).toHaveClass('carousel-item-start')
    expect(item2).not.toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')   
    //run timers
    jest.runAllTimers()
    item1 = getByText(container, 'Item-1')
    expect(item1).not.toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item')
    expect(container).toMatchSnapshot()
    item2 = getByText(container, 'Item-2')
    expect(item2).toHaveClass('active')
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).not.toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')  
    //goback-click
    if (ci !== null) {
        li = ci.children[0]
        if (li !== null){
            fireEvent.click(li)      
        }
    } 
    //endclick
    item2 = getByText(container, 'Item-2')
    expect(item2).toHaveClass('active')
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')
    item1 = getByText(container, 'Item-1')
    expect(item1).not.toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).toHaveClass('carousel-item-prev')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item')  
    //run timers
    jest.runAllTimers()
    item2 = getByText(container, 'Item-2')
    expect(item2).not.toHaveClass('active')
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).not.toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')
    expect(container).toMatchSnapshot()
    item1 = getByText(container, 'Item-1')
    expect(item1).toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item') 
    jest.useRealTimers()
})

test('CCarousel click on button', async () => {
    jest.useFakeTimers()
    const { container } = render(    
        <CCarousel controls indicators>
            <CCarouselItem>
                Item-1
                <CCarouselCaption>
                    Caption-1
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                Item-2
                <CCarouselCaption>
                    Caption-2
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                Item-3
                <CCarouselCaption>
                    Caption-3
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    )
    let item1 = getByText(container, 'Item-1')
    expect(item1).toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).toHaveClass('carousel-item')
    let item2 = getByText(container, 'Item-2')
    expect(item2).not.toHaveClass('active') 
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).toHaveClass('carousel-item')  
    //click
    const buttonNext = document.querySelector('.carousel-control-next')
    if (buttonNext !== null) {
        fireEvent.click(buttonNext)      
    } 
    //endclick
    item1 = getByText(container, 'Item-1')
    expect(item1).toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item')
    item2 = getByText(container, 'Item-2')
    expect(item2).not.toHaveClass('active')
    expect(item2).toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).toHaveClass('carousel-item-start')
    expect(item2).not.toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')   
    //run timers
    jest.runAllTimers()
    item1 = getByText(container, 'Item-1')
    expect(item1).not.toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item')
    expect(container).toMatchSnapshot()
    item2 = getByText(container, 'Item-2')
    expect(item2).toHaveClass('active')
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).not.toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')  
    //goback-click
    const buttonPrev = document.querySelector('.carousel-control-prev')
    if (buttonPrev !== null) {
        fireEvent.click(buttonPrev)      
    } 
    //endclick
    item2 = getByText(container, 'Item-2')
    expect(item2).not.toHaveClass('active')
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).toHaveClass('carousel-item-prev')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')
    item1 = getByText(container, 'Item-1')
    expect(item1).not.toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item')  
    //run timers
    jest.runAllTimers()
    item2 = getByText(container, 'Item-2')
    expect(item2).toHaveClass('active')
    expect(item2).not.toHaveClass('carousel-item-next')
    expect(item2).not.toHaveClass('carousel-item-prev')
    expect(item2).not.toHaveClass('carousel-item-start')
    expect(item2).not.toHaveClass('carousel-item-end')
    expect(item2).toHaveClass('carousel-item')
    expect(container).toMatchSnapshot()
    item1 = getByText(container, 'Item-1')
    expect(item1).not.toHaveClass('active')
    expect(item1).not.toHaveClass('carousel-item-next')
    expect(item1).not.toHaveClass('carousel-item-prev')
    expect(item1).not.toHaveClass('carousel-item-start')
    expect(item1).not.toHaveClass('carousel-item-end')
    expect(item1).toHaveClass('carousel-item') 
    jest.useRealTimers()
})