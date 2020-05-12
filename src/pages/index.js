import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading } from 'theme-ui'
import Layout from '../components/layout'
import AddItemForm from '../components/AddItemForm'
import ItemsList from '../components/ItemsList'

const Index = () => {
  const [items, setItems] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (status !== 'loading') return

    const getAll = async () => {
      try {
        const result = await axios('/api/get-all-items')

        setItems(result.data.items)
        setStatus('loaded')
      } catch (error) {
        console.log('error', error)
      }
    }

    getAll()
  }, [status])

  return (
    <Layout>
      <Heading as="h1" m={24}>
        Shopping List
      </Heading>
      <AddItemForm />
      <ItemsList {...{ items, status }} />
    </Layout>
  )
}

export default Index
