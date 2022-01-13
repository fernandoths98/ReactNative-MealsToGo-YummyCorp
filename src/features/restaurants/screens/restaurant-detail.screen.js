import React, { useState } from "react";
import { List } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.components";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [launchExpanded, setLaunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
    
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Noodle" />
        <List.Item title="Egg" />
      </List.Accordion>

      <List.Accordion
        title="Launch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={launchExpanded}
        onPress={() => setLaunchExpanded(!launchExpanded)}
      >
        <List.Item title="Seafood Fried Rice" />
        <List.Item title="Ramen" />
      </List.Accordion>

      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Steak" />
        <List.Item title="Kwetiaw" />
      </List.Accordion>

      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Sprite" />
        <List.Item title="Fanta" />
        <List.Item title="Coca - Cola" />
        <List.Item title="Aqua" />
      </List.Accordion>
          </ScrollView>
    </SafeArea>
  );
};
