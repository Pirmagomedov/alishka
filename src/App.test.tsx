import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import Home from 'pages/home/Home'

describe("alishka", () => {
    it("top", () => {
        const { getByRole } = render(<Home />)
        const but = getByRole("button")
        fireEvent.click(but)
        expect(but).toHaveTextContent("Super")
    })
})