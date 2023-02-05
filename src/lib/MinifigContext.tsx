import { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

export interface Minifig {
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
  chosenMinifig: Minifig;
  chooseMinifig: (minifig: Minifig) => void;
  getMinifigs: () => void;
  resetStates: () => void;
}

const MinifigContext = createContext<MinifigContextType>({
  minifigs: [],
  randomMinifigs: [],
  chosenMinifig: {} as Minifig,
  chooseMinifig: () => {},
  getMinifigs: () => {},
  resetStates: () => {},
});

const MinifigProvider = ({ children }: { children: ReactNode }) => {
  const rebrickableEndpoint = `https://rebrickable.com/api/v3/lego/minifigs/?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}&in_theme_id=246`;

  const [minifigs, setMinifigs] = useState<Minifig[]>([]);
  const [randomMinifigs, setRandomMinifigs] = useState<Minifig[]>([]);
  const [chosenMinifig, setChosenMinifig] = useState<Minifig>({} as Minifig);

  useEffect(() => {
    if (minifigs.length > 0) {
      const randomThree = minifigs.sort(() => 0.5 - Math.random()).slice(0, 3);
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

  const chooseMinifig = (minifig: Minifig) => {
    setChosenMinifig(minifig);
  };

  const resetStates = () => {
    setMinifigs([]);
    setRandomMinifigs([]);
    setChosenMinifig({} as Minifig);
  };

  return (
    <MinifigContext.Provider
      value={{
        minifigs,
        randomMinifigs,
        chosenMinifig,
        chooseMinifig,
        getMinifigs,
        resetStates,
      }}
    >
      {children}
    </MinifigContext.Provider>
  );
};

export { MinifigContext, MinifigProvider };
