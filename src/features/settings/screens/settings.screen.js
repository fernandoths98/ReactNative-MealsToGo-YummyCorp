import React, { useContext, useState, useEffect } from "react";

import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Button } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.components";
import { colors } from "../../../infrastructure/theme/colors";
import { SettingsNavigator } from "../../../infrastructure/navigation/settings.navigator";

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon="human"
            backgroundColor={colors.brand.primary}
          />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>

        <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.error} icon="heart" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <Spacer />
        
        <Spacer />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color='tomato' icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
