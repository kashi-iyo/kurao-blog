import { Button, ButtonGroup } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/dist/client/router'

export const Navbar = () => {
  const router = useRouter()
  return (
    <Box
      w="100%"
      h="64px"
      zIndex="100"
      borderBottomWidth="1px"
      borderBottom="solid gray.200"
    >
      <Flex
        justify="space-between"
        alignItems="center"
        position="sticky"
        h="100%"
        px="16px"
      >
        <Image
          src="/K.png"
          maxW="140px"
          maxH="30px"
          borderRadius="8px"
          cursor="pointer"
          onClick={() => router.push('/')}
        />
        <Flex>
          <ButtonGroup>
            <Button onClick={() => router.push('/articles')}>
              <Text>Article</Text>
            </Button>
            <Button onClick={() => router.push('/link')}>
              <Text>Link</Text>
            </Button>
            <Button onClick={() => router.push('/profile')}>
              <Text>Profile</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  )
}
