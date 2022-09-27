import { describe, expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'

describe('Home test', () => {
  test('Should show title', () => {
    render(<Home />, { wrapper: BrowserRouter })

    expect(screen.getByText('Hello Vite !')).toBeDefined()
  })
})
