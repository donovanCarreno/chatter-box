import React from 'react'

const AuthContext = React.createContext()
const tokenKey = '__chatter_box_token__'

function AuthProvider({children, ...props}) {
  const [token, setToken] = React.useState()

  const saveToken = token => {
    window.localStorage.setItem(tokenKey, token)
    setToken(token)
  }
  const deleteToken = () => {
    window.localStorage.removeItem(tokenKey)
    setToken('')
  }

  React.useEffect(() => {
    const storedToken = window.localStorage.getItem(tokenKey)
    setToken(storedToken)
  }, [])

  return (
    <AuthContext.Provider value={{token, saveToken, deleteToken}} {...props}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export {AuthProvider, useAuth}
