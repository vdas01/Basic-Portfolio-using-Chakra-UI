import './App.css';
import {Flex, Heading, VStack,Spacer} from '@chakra-ui/layout'
import {IconButton} from '@chakra-ui/button'
import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode'
import Header from './Components/Header';
import Social from './Components/Social';
import Profile from './Components/Profile';

function App() {

 const{colorMode,toggleColorMode} =   useColorMode();
 const isDark = colorMode === 'Dark';
  
  return (
   <VStack p='5'>
      <Flex w='100%'>
            <Heading ml='8' size='md' fontWeight='bold' color='cyan.400'>imvishal</Heading>
            
            <Spacer></Spacer>
            
      <IconButton mr={5} icon={<FaInstagram/>} isRound='true' ></IconButton>
      <IconButton mr={5} icon={<FaGithub/>} isRound='true' ></IconButton>
      <IconButton mr={5} icon={<FaLinkedin/>} isRound='true' ></IconButton>
      <IconButton icon={isDark ? <FaSun/>:<FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>      
      <Header isDark={isDark} colorMode={colorMode}/>
      <Social/>
      <Profile />
   </VStack>
  );
}

export default App;
