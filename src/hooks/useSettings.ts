import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const storageSettingsKey = 'pomodora:settings';

type Settings = {
  workTime: number;
  breakTime: number;
  hasLongBreak: boolean;
  longBreakTime: number;
}

type UseSettingsReturn = {
  settings: Settings,
  setWorkTime: (value: number) => void,
  setBreakTime: (value: number) => void,
  setHasLongBreak: (value: boolean) => void,
  setLongBreakTime: (value: number) => void
}

const defaulSettingsValue: Settings = {
  workTime: 25,
  breakTime: 5,
  hasLongBreak: false,
  longBreakTime: 15
};

const useSettings = (): UseSettingsReturn => {
  const localStorage = useLocalStorage();

  const [settings, setSettings] = useState<Settings>(() => {
    return localStorage.getItem(storageSettingsKey) || defaulSettingsValue;
  });

  const setWorkTime = (value: number) => {
    setSettings({
      ...settings,
      workTime: value
    });
  }

  const setBreakTime = (value: number) => {
    setSettings({
      ...settings,
      breakTime: value
    });
  }

  const setHasLongBreak = (value: boolean) => {
    setSettings({
      ...settings,
      hasLongBreak: value
    });
  }

  const setLongBreakTime = (value: number) => {
    setSettings({
      ...settings,
      longBreakTime: value
    });
  }

  useEffect(() => {
    if (settings) {
      localStorage.setItem(storageSettingsKey, settings);
    }
  }, [settings]);

  return {
    settings,
    setWorkTime,
    setBreakTime,
    setHasLongBreak,
    setLongBreakTime
  };
}

export default useSettings;