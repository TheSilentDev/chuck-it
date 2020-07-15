import React, { FC, createContext, useState } from 'react';
import { ChuckAPI } from '../datasources';

interface IProps {
  children: any;
}

interface IState {
  loading: boolean;
  icon_url: string;
  joke: string;
  getJokeByCategory: (category: string) => void;
}

type Joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

const DEFAULT_STATE: IState = {
  loading: false,
  icon_url: '',
  joke: 'Click on a category for a joke',
  getJokeByCategory: (category: string) => {},
};

const Provider: FC<IProps> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const API = new ChuckAPI();

  const getJokeByCategory = (category: string) => {
    setState(prevState => ({ ...prevState, loading: true }));
    API.getJokesByCategory(category)
      .then(({ data: { getJokeByCategory: { icon_url, value } } }) =>
        setState(prevState => ({
          ...prevState,
          icon_url,
          joke: value,
        }))
      )
      .catch(() =>
        setState(prevState => ({
          ...prevState,
          joke: 'CHUCK NORRIS IS IN NO MOOD TO TELL JOKES',
        }))
      )
      .finally(() => {
        setState(prevState => ({ ...prevState, loading: false }));
      });
  };

  return (
    <JokeContext.Provider value={{ ...state, getJokeByCategory }}>{children}</JokeContext.Provider>
  );
};

export default Provider;

export const JokeContext = createContext(DEFAULT_STATE);
export const useJoke = () => React.useContext(JokeContext);
