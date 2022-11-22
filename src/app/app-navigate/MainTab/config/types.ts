
export type NavMainTabsParamsType = {
    CashMachine: undefined
    MainPage: undefined
    PaymentsListStack: undefined
    Profile: undefined
}
export type NavPaymentsParamsType = {
    pm_index: undefined
    pm_categoryList: { id: number }
    pn_itemCategory: { service: IService | undefined }
}
export enum ERouteName {
    MAINPAGE = 'MainPage',
    PAYMENTSLISTSTACK = 'PaymentsListStack',
    CASHMACHINE = 'CashMachine',
    PROFILE = 'Profile',
}
export const translateLabel: TTranslateRoutePayment = {
    'CashMachine': 'Банкоматы',
    'MainPage': 'Главная',
    'PaymentsListStack': 'Платежи',
    'Profile': 'Профиль'
}

type TTranslateRoutePayment = {
    [key in ERouteName]: string;
}