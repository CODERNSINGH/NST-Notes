'use client'

import Image from "next/image";
import Homeop from "./component/Home";
import { createContext } from "react";

export const AppContext = createContext();

export default function Home() {

  

  const values = {isLoggedIn:true,bodyText: 'You can use any feature you want'}

  return (
    <AppContext.Provider value={values}>
    <div className="w-full h-50 flex justify-center items-center">
      <Homeop/>
    </div>
    </AppContext.Provider>
  );
}
