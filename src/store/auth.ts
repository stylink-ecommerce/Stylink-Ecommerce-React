import dayjs, { Dayjs } from 'dayjs';
import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProfileInterface {
  email: string;
  password: string;
}
interface ICalendarState {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  smallCalendarMonth: number;
  setSmallCalendarMonth: (index: number) => void;
  selectedDay: Dayjs | null;
  setDaySelected: (day: Dayjs) => void;
  isEventModalActive: boolean;
  showOrHideEventModal: (toggle: boolean) => void;
}

interface IAuthState {
  token: string;
  profile: ProfileInterface | null;
  isAuth: boolean;
  setToken: (token: string) => void;
  setProfile: (profile: ProfileInterface) => void;
  logout: () => void;
  savedEvents: any; /// TODO EVENTS TYPE
}

export const useCalendarStore: StateCreator<ICalendarState> = (set) => ({
  monthIndex: dayjs().month(),
  setMonthIndex: (index: number) => set(() => ({ monthIndex: index })),
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: number) => set(() => ({ smallCalendarMonth: index, monthIndex: index })),
  selectedDay: dayjs(),
  setDaySelected: (day) => set(() => ({ selectedDay: day })),
  isEventModalActive: false,
  showOrHideEventModal: (toggleModal: boolean) => set(() => ({ isEventModalActive: toggleModal })),
  savedEvents: null,
});

export const useGlobalStore = create<ICalendarState>((...a) => ({
  ...useCalendarStore(...a),
}));

export const useAuthStore2 = create<IAuthState>()(
  persist(
    (set) => ({
      token: '',
      profile: null,
      isAuth: false,
      setToken: (token: string) => set(() => ({ token, isAuth: true })),
      setProfile: (profile: ProfileInterface) => set(() => ({ profile })),
      logout: () => set(() => ({ token: '', isAuth: false, profile: null })),
    }),
    {
      name: 'auth',
    }
  )
);
