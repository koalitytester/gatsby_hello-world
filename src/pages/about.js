import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
    <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool." />
        <div>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me! -Gatsby.js
      </p>
    </div>
      <p>Such wow. Very React.</p>
      <p>Following a Tutorial to Learn Gatsby.</p>
    </div>
    </Layout>
  )
}