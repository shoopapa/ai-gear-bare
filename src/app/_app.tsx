import * as SecureStore from "expo-secure-store";
import { TokenCache } from '@clerk/clerk-expo/dist/cache';


import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SignInSignUpScreen } from "./signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Home } from './home';

const tokenCache: TokenCache = {
  getToken(key: string): Promise<string | null> {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return new Promise<null>(res => res(null));
    }
  },
  saveToken(key: string, value: string): Promise<void> {
    try {
      return SecureStore.setItemAsync(key, value);
    }
    catch (err) {
      return new Promise<void>(res => res());
    }
  }
};

export const App = () => {

  return (
    <ClerkProvider
      publishableKey={'pk_test_bGl2aW5nLW11bGUtMjEuY2xlcmsuYWNjb3VudHMuZGV2JA'}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <SafeAreaProvider>
          <Home />
          <StatusBar />
        </SafeAreaProvider>
      </SignedIn>
      <SignedOut>
        <SignInSignUpScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
export default App;
