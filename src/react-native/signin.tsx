import React from "react";

import { View, SafeAreaView, Text } from "react-native";

import SignInWithOAuth from "./SignInWithOAuth";

export const SignInSignUpScreen = () => {
  return (
    <SafeAreaView >
      <View >
        <SignInWithOAuth />
      </View>
    </SafeAreaView>
  );
};
