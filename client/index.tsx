import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authentication operations
     *
     * TODO: replace the empty strings below with your own domain, clientId, and audience
     */
    <Auth0Provider
      domain="pohutukawa-2023-kirsty.au.auth0.com"
      clientId="YU9i6BNy1990kRsxXcz9RUVzMJvAVn9u"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://fruits/api',
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
