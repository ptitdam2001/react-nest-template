import React from 'react'
import { useQuery } from '@tanstack/react-query'

export const RestExample = () => {
  const { isLoading, error, data } = useQuery(['ping'], () => fetch(import.meta.env.VITE_API_URI + 'ping', { method: 'GET' }).then(res => res.json()))

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <header>Rest Example</header>
      <p>result: {data.message}</p>
    </>
  )
}
