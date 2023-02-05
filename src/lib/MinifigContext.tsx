import { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

interface Minifig {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

interface MinifigContextType {
  minifigs: Minifig[];
  randomMinifigs: Minifig[];
  chosenMinifigId: string | undefined;
  chooseMinifig: (minifig: string) => void;
  getMinifigs: () => void;
}

export const MinifigContext = createContext<MinifigContextType>({
  minifigs: [],
  randomMinifigs: [],
  chosenMinifigId: undefined,
  chooseMinifig: (minifig: string) => {},
  getMinifigs: () => {},
});

export const MinifigProvider = (props: { children: ReactNode }) => {
  const rebrickableThemeID = 246;
  const rebrickableEndpoint = `https://rebrickable.com/api/v3/lego/minifigs/?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}&in_theme_id=${rebrickableThemeID}`;

  const [minifigs, setMinifigs] = useState<Minifig[]>([]);

  const [randomMinifigs, setRandomMinifigs] = useState<Minifig[]>([]);

  const [chosenMinifigId, setChosenMinifigId] = useState("");

  useEffect(() => {
    // Select three random minifigs from the `minifigs` state and set it to `randomMinifigs`
    if (minifigs.length > 0) {
      let randomThree: Minifig[] = [];
      while (randomThree.length < 3) {
        const randomIndex = Math.floor(Math.random() * minifigs.length);
        if (!randomThree.includes(minifigs[randomIndex])) {
          randomThree.push(minifigs[randomIndex]);
        }
        console.log(randomThree);
      }
      setRandomMinifigs(randomThree);
    }
  }, [minifigs]);

  const getMinifigs = async () => {
    let pageNumber = 1;
    let allMinifigs: Minifig[] = [];

    const fetchMinifigs = async () => {
      const res = await axios.get(`${rebrickableEndpoint}&page=${pageNumber}`);
      allMinifigs = allMinifigs.concat(res.data.results);
      if (res.data.next) {
        pageNumber += 1;
        await fetchMinifigs();
      }
    };

    await fetchMinifigs();
    setMinifigs(allMinifigs);
  };

  const chooseMinifig = (minifig: string) => {
    setChosenMinifigId(minifig);
  };

  return (
    <MinifigContext.Provider
      value={{
        minifigs,
        randomMinifigs,
        chosenMinifigId: chosenMinifigId,
        chooseMinifig,
        getMinifigs,
      }}
    >
      {props.children}
    </MinifigContext.Provider>
  );
};
