import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {

  return (
    <>
    <Layout location={'/about'}>
      <SEO title="About me" />
      About me
    </Layout>


    <p>
      hello
    </p>
    </>
  )
}

export default About