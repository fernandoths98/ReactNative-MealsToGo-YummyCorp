import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native"
import { Searchbar } from "react-native-paper"

import {LocationContext} from "../../../services/location/location.context"

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 45px;
  width: 100%;
`;

export const SearchMap = () => {
    const {keywords, search} = useContext(LocationContext);
    const [searchKeywords, setSearchKeywords] = useState(keywords);
    
    useEffect(() => {
        setSearchKeywords(keywords);
    }, [keywords])
    return (
        <SearchContainer>
        <Searchbar placeholder="Search for a Location"
        icon="map" 
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
  