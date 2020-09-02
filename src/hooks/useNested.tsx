import { useContext } from 'react';
import { NestedContext } from '../contexts/nested/NestedContext';

export const useNested = () => {
  const { setShow } = useContext(NestedContext);
  const hideNestedHierarchy = () => setShow!();
  return { hideNestedHierarchy };
};
