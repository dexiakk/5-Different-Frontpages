type NavBarItem = {
    name: string;
    firstTabTittle?: string;
    firstTabItems?: Array<{ name: string; path: string }>;
    secondTabTittle?: string;
    secondTabItems?: Array<{ name: string; path: string }>;
    thirdTabTittle?: string;
    thirdTabItems?: Array<{ name: string; path: string }>;
    fourthTabItems?: Array<{ name: string; path: string }>;
};