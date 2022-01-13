import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native"
import { Searchbar } from "react-native-paper"

import {LocationContext} from "../../../services/location/location.context"

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({isFavouritesToggle, onFavouritesToggle}) => {
    const {keywords, search} = useContext(LocationContext);
    const [searchKeywords, setSearchKeywords] = useState(keywords);
    
    useEffect(() => {
        setSearchKeywords(keywords);
    }, [keywords])
    return (
        <SearchContainer>
        <Searchbar 
        icon={isFavouritesToggle ? "heart" : "heart-outline" }
        onIconPress={onFavouritesToggle}
        placeholder="Search for a Location Restaurant" 
        value={searchKeywords} 
        onSubmitEditing={() => {
            search(searchKeywords);
        }}
        onChangeText={(text) => {
            setSearchKeywords(text);
        }}
        />
    </SearchContainer>
    )
}
  