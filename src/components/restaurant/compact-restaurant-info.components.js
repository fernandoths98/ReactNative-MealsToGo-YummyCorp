import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.components";
import { Platform } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 30px;
  height: 100px;
  width: 120px;
`;

const Item = styled.View`
border-radius: 20px;
max-width: 120px;
padding: 10px
align-items: center;
`;

// const CaptionText = styled(Text)`
// margin-top: 10px;
// `;


const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({restaurant, isMap}) => {
    
    const Image = isAndroid && isMap ? CompactWebView: CompactImage;

    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0]}} />
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}