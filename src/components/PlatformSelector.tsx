import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../store'



const PlatformSelector = () => {
    const {data: platforms, error, isLoading} = usePlatforms();
    const setSelectedPlatform = useGameQueryStore(s => s.setPlatformId);

    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const platform = usePlatform(selectedPlatformId);

    if(error) return null;
    if(isLoading) return <Spinner />


  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ platform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            { platforms?.results.map((platform) => <MenuItem onClick={() => setSelectedPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector