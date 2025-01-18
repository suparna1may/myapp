import React, { useContext } from 'react'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import Layout from '../../components/Layout/Layout'

import ProductCard from '../../components/ProductCard/ProductCard'


import myContext from '../../context/data/myContext'

function Home() {

  return (
    <>
      <Layout>
        <Banner />
        <ProductCard />
        <Category />
      </Layout>

    </>

  )
}

export default Home
