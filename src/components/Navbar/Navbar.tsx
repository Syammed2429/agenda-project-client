import React, { FC } from 'react'
import { Button, Flex, Image, useColorMode } from '@chakra-ui/react'

import logo from '../../assets/logo.png'
const Navbar: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <>
            <Flex
                alignItems='center'

            >

                <Image
                    w={120}
                    src={logo}
                    alt='Agenda logo' />

                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </Flex>
        </>
    )
}

export { Navbar }
