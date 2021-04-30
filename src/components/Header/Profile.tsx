import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfilePros {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfilePros) {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Moura</Text>
          <Text color="gray.300" fontSize="small">
            felipemoura92@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Felipe Moura" src="https://github.com/mouralipe.png" />
    </Flex>
  );
}