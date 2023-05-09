import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

import "./App.css";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectegGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX='5px'>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectegGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
