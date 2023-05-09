
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By: relevance</MenuButton>
    <MenuList>
        <MenuItem>Relevance</MenuItem>        
        <MenuItem>Date Add</MenuItem>        
        <MenuItem>Name</MenuItem>        
        <MenuItem>Release date</MenuItem>        
        <MenuItem>Popularity</MenuItem>        
        <MenuItem>Average rating</MenuItem>        
    </MenuList>
</Menu>
  )
}

export default SortSelector