import React, { createContext, useState, useContext } from "react";

// Custom User context
export const CustomUserContext = createContext();

function UserManagementProvider({ children }) {
  const [customUsers, setCustomUsers] = useState([]);

  return (
    <CustomUserContext.Provider value={{ customUsers, setCustomUsers }}>
      {children}
    </CustomUserContext.Provider>
  );
}

export default UserManagementProvider;

export const useGetCustomUserProvider = () => {
  return useContext(CustomUserContext);
};
