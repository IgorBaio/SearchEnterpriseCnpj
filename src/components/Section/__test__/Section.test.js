// UNIT TEST

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Section from '..'

const fakeProps = {
    visible: true,
    title: "mock-title",
    subTitle: "mock-subtitle",
    children: "mock-children"
}

describe('#Section', () => {
    describe("#Smoke Tests", () => {

        it('should render the Component', () => {
            const {getByText} = render(<Section {...fakeProps}/>)
    
            expect(getByText(/^mock-title$/i)).toBeVisible()
            expect(getByText(/^mock-subtitle$/i)).toBeVisible()
            expect(getByText(/^mock-children$/i)).toBeVisible()
         
        })
    })
    describe("#Component Functionality", () => {

        it('should not display any text when visible props is passed as false', () => {
            const notVisibleProps = {...fakeProps, visible: false}
            const {queryByText} = render(<Section {...notVisibleProps}/>)
           
            expect(queryByText(/^mock-title$/i)).not.toBeVisible()
            expect(queryByText(/^mock-subtitle$/i)).not.toBeVisible()
            expect(queryByText(/^mock-children$/i)).not.toBeVisible()
        })
    })
})