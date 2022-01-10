import React from 'react'
import { StyleSheet, FlatList ,StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.components';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-info.styles';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utility/safe-area.components';


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantsScreen = () => (
  
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <RestaurantList
        data={[
          {name: 1}, 
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
          {name: 8},
          {name: 9},
          {name: 10},
        ]}
        renderItem={() => 
        <Spacer position="bottom" size="large">
        <RestaurantInfo/>
        </Spacer>
      }
        keyExtractor={(item) => item.name}
        />
    </SafeArea>
);

export default RestaurantsScreen;
