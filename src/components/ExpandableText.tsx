import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string
}
const ExpandableText = ({ children } : Props) => {
    const [expand, setExpand] = useState(false);
    const limit = 300; // 300 characters

    if(!children) return null;

    if(children.length <= 300 ) 
        return <Text> { children }</Text>

    const summary = expand ? children :  children.substring(0, limit) + '...';

  return (
    <Text>{ summary } <Button size='xs' fontWeight='bold' colorScheme="yellow" onClick={() => setExpand(!expand)}>{ expand ? "Show less" : "Show more" }</Button></Text>
  )
}

export default ExpandableText