import { createContext, useContext } from "react";

interface State<T = object> {
  permissions: T[];
}

const RBACContext = createContext<State>({
  permissions: []
});

const RBACProvider: React.FC = ({ children }) => {
  return (
    <RBACContext.Provider value={{ permissions: [] }}>
      {children}
    </RBACContext.Provider>
  );
};

const useRBAC = (namespace: string) => {
  const context = useContext(RBACContext);

  if (context === undefined) {
    throw new Error("useRBAC must be used within a RBACProvider");
  }

  return context;
};

export { RBACProvider, useRBAC };
