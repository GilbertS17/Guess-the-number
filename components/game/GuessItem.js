import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function GuessItem({ itemData, GuessNumber }) {
  return (
    <View style={styles.listItem}>
      <Text>#{GuessNumber}</Text>
      <Text>Opponent's Guess: {itemData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.accent500,
    padding: 12,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
