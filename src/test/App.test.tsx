import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('App', () => {
  it('should render', () => {
    render(<App />)

    const app = screen.getByRole('heading', {
      name: 'Kanastra Frontend Challenge',
      level: 1,
    })

    expect(app).toBeInTheDocument()
  })
})
