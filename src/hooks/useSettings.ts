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
  isSettingsLoaded: boolean,
  setWorkTime: (value: number) => void,
  setBreakTime: (value: number) => void,
  setHasLongBreak: (value: boolean) => void,
  setLongBreakTime: (value: number) => void,
  reloadSettings: () => void
}

const defaulSettingsValue: Settings = {
  workTime: 25,
  breakTime: 5,
  hasLongBreak: false,
  longBreakTime: 15
};

const useSettings = (): UseSettingsReturn => {
  const localStorage = useLocalStorage();

  const [settings, setSettings] = useState<Settings>(defaulSettingsValue);
  const [isSettingsLoaded, setIsSettingsLoaded] = useState(false);

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    localStorage.setItem(storageSettingsKey, newSettings);
  }

  const setWorkTime = (value: number) => {
    const newSettings = {
      ...settings,
      workTime: value
    };

    updateSettings(newSettings);
  }

  const setBreakTime = (value: number) => {
    const newSettings = {
      ...settings,
      breakTime: value
    };

    updateSettings(newSettings);
  }

  const setHasLongBreak = (value: boolean) => {
    const newSettings = {
      ...settings,
      hasLongBreak: value
    };

    updateSettings(newSettings);
  }

  const setLongBreakTime = (value: number) => {
    const newSettings = {
      ...settings,
      longBreakTime: value
    };

    updateSettings(newSettings);
  }

  const loadStoragedSettings = () => {
    const storagedSettings = localStorage.getItem(storageSettingsKey)

    if (storagedSettings) {
      setSettings(storagedSettings);
    }

    setIsSettingsLoaded(true);
  }

  const reloadSettings = () => {
    loadStoragedSettings();
  }

  useEffect(loadStoragedSettings, []);

  return {
    settings,
    isSettingsLoaded,
    setWorkTime,
    setBreakTime,
    setHasLongBreak,
    setLongBreakTime,
    reloadSettings
  };
}

export default useSettings;