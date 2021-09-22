// UNIT TEST

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TablesList from '..'
import MOCK_REPOS from './mockDataRepos.json'

const fakePropsRepos = {
    dataHeader: MOCK_REPOS.dataHeader,
}


describe('#TablesList', () => {
    describe('#Smoke Tests',()=>{
        it('should render the Headers', () => {
            const { getByText } = render(<TablesList {...fakePropsRepos} />)
            
            expect(getByText(/Nome/i)).toBeVisible()
            expect(getByText(/Atividade principal/i)).toBeVisible()
            expect(getByText(/endereço/i)).toBeVisible()
            expect(getByText(/razão social/i)).toBeVisible()
            expect(getByText(/cnpj/i)).toBeVisible()
        })
        

    })
})
