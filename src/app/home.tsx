import React from 'react'
import { useClerk, useUser } from '@clerk/clerk-expo'
import { Text } from 'react-native'
import { Button } from 'react-native-paper';

export const Home = () => {
  const { signOut } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <>
      <Text style={{ marginTop: 100 }}>{user?.fullName}</Text>
      <Button
        onPress={signOut}
      >sign out</Button>
    </>
  )
}
