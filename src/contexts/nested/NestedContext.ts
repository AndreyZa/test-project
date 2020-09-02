import { createContext } from 'react';
import { INested } from './INested';

export const NestedContext = createContext<INested>({
  show: false,
});
