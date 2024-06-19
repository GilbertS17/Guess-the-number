import { StyleSheet, View, Text } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4f83cc",
  },
  text: {
    color: "white",
  },
});
