import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void
}
const GenreList = ({onSelectGenre} : Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)
            }>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
