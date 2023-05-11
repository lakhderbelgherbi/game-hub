import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'


interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatformId?: number 
}


const PlatformSelector = ({onSelectPlatform, selectedPlatformId} : Props) => {
    const {data: platforms, error, isLoading} = usePlatforms();
    const platform = platforms?.results.find(p => p.id === selectedPlatformId)
    if(error) return null;
    if(isLoading) return <Spinner />


  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ platform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            { platforms?.results.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector