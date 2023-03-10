import React, { useEffect } from "react";
import { Image, Modal } from "react-native";
import styled from "styled-components/native";

export default function Popup({ visible, setVisible, atomData }) {
  useEffect(() => {}, [atomData]);

  const closePopup = () => {
    setVisible(false);
  };
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <ModalStyle>
        <ModalContentStyle>
          <CloseButtonStyle onPress={closePopup}>
            <Image
              source={require("../assets/close.png")}
              style={{ height: 15, width: 15 }}
            />
          </CloseButtonStyle>
          <ContentItemStyle>
            <KeyTextStyle>Name:</KeyTextStyle>
            <ValueTextStyle>
              {atomData.name} ({atomData.element})
            </ValueTextStyle>
          </ContentItemStyle>
          <ContentItemStyle>
            <KeyTextStyle>Discoverd by:</KeyTextStyle>
            <ValueTextStyle>{atomData.discoverdBy}</ValueTextStyle>
          </ContentItemStyle>
          <ContentItemStyle>
            <KeyTextStyle>Phase:</KeyTextStyle>
            <ValueTextStyle>{atomData.phase}</ValueTextStyle>
          </ContentItemStyle>
        </ModalContentStyle>
      </ModalStyle>
    </Modal>
  );
}

const ModalStyle = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContentStyle = styled.View`
  width: 80%;
  background-color: white;
  padding: 20px 20px 0;
  border-radius: 20px;
  elevation: 20;
`;

const CloseButtonStyle = styled.TouchableOpacity`
  align-self: flex-end;
`;

const ContentItemStyle = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 20px 0;
  justify-content: space-between;
`;

const KeyTextStyle = styled.Text``;
const ValueTextStyle = styled.Text`
  font-weight: bold;
`;
