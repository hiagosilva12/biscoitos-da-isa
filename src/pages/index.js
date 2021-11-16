import React from "react"
import "./style.css"

import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"

export function Index() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
