import { HStack, Icon } from "@chakra-ui/react";
import { RiNotification2Line, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <HStack
      spacing={["5", "7"]}
      mx={["5", "7"]}
      pr={["5", "7"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotification2Line} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}
