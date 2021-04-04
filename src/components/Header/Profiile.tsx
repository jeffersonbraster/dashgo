import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jefferson Brandão</Text>
          <Text color="gray.300" fontSize="small">
            Jefferonbraster@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jefferson Brandão"
        src="https://github.com/jeffersonbraster.png"
      />
    </Flex>
  );
}
