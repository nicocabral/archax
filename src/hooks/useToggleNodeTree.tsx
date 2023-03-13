import { create } from 'zustand';

const useToggleNodeTree = create((set) => ({
    toggle: {},
    toggleApplications: [], 
    filterValue: 0,
    setToggle: (name: string, value: boolean) => set((state: any) => ({toggle: {...state.toggle, [name]: value}})),
    setToggleApplications: (value: Array<any>) => set({toggleApplications: value}),
    setFilterValue: (value: number) => set({filterValue: value})
}));

export default useToggleNodeTree;