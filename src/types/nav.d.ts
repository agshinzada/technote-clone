import { Dispatch, SetStateAction } from "react";

export interface MenuType{
    isOpen:boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    themeChecked:boolean;
    setThemeChecked:Dispatch<SetStateAction<boolean>>;

} 