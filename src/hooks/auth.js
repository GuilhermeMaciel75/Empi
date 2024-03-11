import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({
    user: false
  })

  const signIn = useCallback(() => {
    setData({ user: true })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('The context must be used within an .Provider');
  }

  return context;
}