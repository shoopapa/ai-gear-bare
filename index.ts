/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/react-native/_app";
import { name as appName } from "./app.json";
import "@azure/core-asynciterator-polyfill";

AppRegistry.registerComponent("ai-gear", () => App);
