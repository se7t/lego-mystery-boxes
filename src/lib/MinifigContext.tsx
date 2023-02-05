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

const MinifigContext = createContext<MinifigContextType>({
  minifigs: [],
  randomMinifigs: [],
  chosenMinifigId: undefined,
  chooseMinifig: () => {},
  getMinifigs: () => {},
});

const MinifigProvider = ({ children }: { children: ReactNode }) => {
  const rebrickableEndpoint = `https://rebrickable.com/api/v3/lego/minifigs/?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}&in_theme_id=246`;

  const [minifigs, setMinifigs] = useState<Minifig[]>([]);
  const [randomMinifigs, setRandomMinifigs] = useState<Minifig[]>([]);
  const [chosenMinifigId, setChosenMinifigId] = useState("");

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

  const chooseMinifig = (minifig: string) => {
    setChosenMinifigId(minifig);
  };

  return (
    <MinifigContext.Provider
      value={{
        minifigs,
        randomMinifigs,
        chosenMinifigId,
        chooseMinifig,
        getMinifigs,
      }}
    >
      {children}
    </MinifigContext.Provider>
  );
};

export { MinifigContext, MinifigProvider };
