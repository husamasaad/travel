'use client'
import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext() ;



export const ContextProvider = ({ children }) => {

  const [packageForm, setPackageForm] = useState({
    destination: "",
    type: "",
    date: "",
    email: "",
    phone: "",
    numberOfTickets: "",
  })
  const [showModal, setShowModal] = useState(false)


  return (
    <StateContext.Provider
      value={{
        packageForm,
        setPackageForm,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}


export const useStateContext = () => useContext(StateContext)