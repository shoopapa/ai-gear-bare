import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Text } from 'react-native'

export const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <Text style={{ marginTop: 100 }}>{user?.fullName}</Text>
  )
}
