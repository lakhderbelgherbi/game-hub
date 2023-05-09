import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'


interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatform: Platform | null 
}


const PlatformSelector = ({onSelectPlatform, selectedPlatform} : Props) => {
    const {data: platforms, error, isLoading} = usePlatforms();

    if(error) return null;
    if(isLoading) return <Spinner />


  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            { platforms.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector