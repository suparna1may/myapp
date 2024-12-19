import React, { useContext } from 'react'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import Layout from '../../components/Layout/Layout'
import ProductThumb from '../../components/ProductThumb/ProductThumb'
import myContext from '../../context/data/myContext'

function Home() {

  return (
    <>
      <Layout>
        <Banner/>
        <ProductThumb/>
        <Category/>
      </Layout>

    </>

  )
}

export default Home
