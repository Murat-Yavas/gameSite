import "./gameSection.css";
import { useEffect } from "react";
import { fetchGames } from "../../redux/apiCall";
import { useDispatch } from "react-redux";

import GameSectionItem from "./GameSectionItem";
import fps from "../../assets/image/FPS.jpg";
import mmorpg from "../../assets/image/MMORPG.jpg";
import rpg from "../../assets/image/RPG.jpg";
import strategy from "../../assets/image/Strategy.jpg";
import fighting from "../../assets/image/Fighting.jpg";
import moba from "../../assets/image/MOBA.jpg";
import battleRoyale from "../../assets/image/BattleRoyale.jpg";
import sports from "../../assets/image/Sports.jpg";
import card from "../../assets/image/Card.jpg";
import racing from "../../assets/image/Racing.jpg";
import GameModal from "../modal/GameModal";

const GameSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGames(dispatch);
  }, [dispatch]);

  return (
    <div className="section-content row gx-0">
      <GameModal />
      <GameSectionItem
        image={fps}
        title="FPS"
        text="A first person shooter (FPS) is a genre of action video game that is
          played from the point of view of the protagonist. FPS games typically
          map the gamer`s movements and provide a view of what an actual person
          would see and do in the game."
        left
        genre="Shooter"
      />
      <GameSectionItem
        image={mmorpg}
        title="MMORPG"
        text="A massively multiplayer online role-playing game (MMORPG) is a video
          game that combines aspects of a role-playing video game and a massively
          multiplayer online game."
        genre="MMORPG"
      />
      <GameSectionItem
        image={rpg}
        title="RPG"
        text="A role-playing game (sometimes spelled roleplaying game, RPG) is a
          game in which players assume the roles of characters in a fictional setting.
          Players take responsibility for acting out these roles within a narrative,
          either through literal acting or through a process of structured
          decision-making regarding character development."
        left
        genre="ARPG"
      />
      <GameSectionItem
        image={strategy}
        title="Strategy"
        text="Strategy is a major video game genre that emphasizes thinking and
          planning over direct instant action in order to achieve victory."
        genre="Strategy"
      />
      <GameSectionItem
        image={fighting}
        title="Fighting"
        text="Strategy is a A Fighting Game refers to a genre of video games in which players engage in virtual hand-to-hand combat against an opponent. These games commonly feature a wide range of characters, each with unique abilities, moves, and fighting styles.  video game genre that emphasizes thinking and
          planning over direct instant action in order to achieve victory."
        left
        genre="Fighting"
      />
      <GameSectionItem
        image={moba}
        title="MOBA"
        text="Multiplayer online battle arena (MOBA) is a subgenre of strategy video games in which two teams of players compete against each other on a predefined battlefieldy."
        genre="MOBA"
      />
      <GameSectionItem
        image={battleRoyale}
        title="Battle Royale"
        text="A battle royale game is an online multiplayer video game genre that blends last-man-standing gameplay with the survival, exploration and scavenging elements of a survival game."
        left
        genre="Battle Royale"
      />
      <GameSectionItem
        image={sports}
        title="Sports"
        text="Sports games are a video game genre that simulates sports. They are usually based on real-world sports, but can also be fictional or exaggerated. These games usually let the player control one or more athletes during competition. Players must follow the rules of the sport, and either play against computer-controlled opponents or other players."
        genre="Sports"
      />
      <GameSectionItem
        image={card}
        title="Card"
        text="Card games on PC come in all shapes and sizes, but they each offer the same core treasure. That`s a highly addictive gameplay loop that allows you to craft powerful decks of cards and then test them out in a thrilling, strategically challenging competition."
        left
        genre="Card Game"
      />
      <GameSectionItem
        image={racing}
        title="Racing"
        text="Racing games are a video game genre in which the player participates in a racing competition. They may be based on anything from real-world racing leagues to fantastical settings."
        genre="Racing"
      />
    </div>
  );
};

export default GameSection;
