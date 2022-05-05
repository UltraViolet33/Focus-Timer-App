import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";




export default function App() {
  const [focusSubject, setFocusSubject] = useState(null );
  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject}/> : <Focus addSubject={setFocusSubject} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: spacing.xxl
  },
});
