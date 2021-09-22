// UNIT TEST

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextInput from '..'
import PROPS from './mockData'

describe('#TextInput', () => {
    describe("#Smoke Tests", () => {
        it('should render the component', () => {
            const { getByText, getByRole, getByPlaceholderText } = render(<TextInput {...PROPS.textInput} />)
    
            expect(getByRole('textbox')).toBeVisible()
            expect(getByText(/mock-label/i)).toBeVisible()
            expect(getByPlaceholderText(/mock-placeholder/i)).toBeInTheDocument()
        })
    })
})
