import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import PreviousChatsModal from "./(components)/PreviousChats";
import { Chat } from "../../types/chats";
import ChatHeader from "./(components)/ChatHeader";

const previousChats: Chat[] = [
  { id: "1", name: "What can I make with cheese and eggs" },
  { id: "2", name: "What's a good gnocchi recipe" },
  { id: "3", name: "Burger King at home" },
];

const ChatLayout = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChatSelect = (chat: Chat) => {
    setModalVisible(false);
  };
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: ({ navigation }) => (
              <ChatHeader
                navigation={navigation}
                onOpenModal={() => setModalVisible(true)}
              />
            ),
          }}
        />
      </Stack>
      <PreviousChatsModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        chats={previousChats}
        onSelect={handleChatSelect}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chatButton: {
    backgroundColor: "white",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
  },
});

export default ChatLayout;
