import { createContext, ReactNode, useState } from "react";
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
  getMinifigs: () => void;
}

export const MinifigContext = createContext<MinifigContextType>({
  minifigs: [],
  getMinifigs: () => {},
});

export const MinifigProvider = (props: { children: ReactNode }) => {
  const rebrickableThemeID = 246;
  const rebrickableEndpoint = `https://rebrickable.com/api/v3/lego/minifigs/?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}&in_theme_id=${rebrickableThemeID}`;

  const [minifigs, setMinifigs] = useState<Minifig[]>([]);

  const getMinifigs = async () => {
    let pageNumber = 1;
    const fetchMinifigs = () => {
      axios
        .get(`${rebrickableEndpoint}&page=${pageNumber}`)
        .then((res) => {
          setMinifigs((prevMinifigs) => prevMinifigs.concat(res.data.results));
          if (res.data.next) {
            pageNumber += 1;
            fetchMinifigs();
          }
        })
        .catch((err) => console.log(err));
    };
    fetchMinifigs();
  };

  return (
    <MinifigContext.Provider value={{ minifigs, getMinifigs }}>
      {props.children}
    </MinifigContext.Provider>
  );
};
