import React from 'react'
import { useClerk, useUser } from '@clerk/clerk-expo'
import { Text } from 'react-native'
import { Button } from 'react-native-paper';
import { trpc } from './client';

export const Home = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  return (
    <>
      <Text style={{ marginTop: 100 }}>{user?.fullName}</Text>
      <Button
        onPress={signOut}
      >sign out</Button>
      <Button
        onPress={async () => {
          const x = await trpc.hello.query()
          console.log(x)
        }}
      >trpc</Button>
    </>
  )
}
