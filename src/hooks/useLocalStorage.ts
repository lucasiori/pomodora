type UseLocalStorageReturn = {
  setItem: (key: string, value: any) => void;
  getItem: (key: string) => any | undefined;
}

const useLocalStorage = (): UseLocalStorageReturn => {
  const setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const getItem = (key: string): any | undefined => {
    const storagedValue = localStorage.getItem(key);
    
    return storagedValue ? JSON.parse(storagedValue) : undefined;
  }

  return {
    setItem,
    getItem
  }
}

export default useLocalStorage;