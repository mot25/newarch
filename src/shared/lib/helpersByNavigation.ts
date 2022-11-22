import { getFocusedRouteNameFromRoute, ParamListBase, RouteProp } from '@react-navigation/native';


// Вообщем, что за кашу я наворил. Это функция для того, чтобы скрыть табы в стеке, 
// которые находятся ниже табов. Возврощает стили, или дефолтные для таба или скрыть 
// таб. Принимает 2 дженерика. 1 это дженерик стека, в котором есть экран, где 
// нужно скрыть, таб, а 2 тип наших табов. Ну вроде все, если будут вопросы - 8 (980) 055-93-72
export function isShowTabBarFromName<TScreen, TCurrentStack extends ParamListBase>(
    name: keyof TScreen | Array<keyof TScreen>,
    routeN: RouteProp<TCurrentStack, keyof TCurrentStack>,
    styles: TextStyle): TextStyle {
    // получаем текущий экран
    const routeName: any = getFocusedRouteNameFromRoute(routeN) ?? ""
    // стили для скрытия табов
    const hiddenTabStyles: TextStyle = { display: "none" }
    // полифил для isArray
    if (Array.prototype === name) return styles
    // дальше я решил что аргумент может быть как строкой, так и массив строк
    if (Array.isArray(name)) {
        // на случай если массив пуст
        if (name.length === 0) return styles
        // если этот экран нужно скрыть, то мы его скрываем
        if (name.includes(routeName)) {
            return hiddenTabStyles
        } else {
            // этот экран не надо скрывать
            return styles
        }
    } else {
        // не массив, если нужно скрыть, скрываем, если нет, то не скрываем 
        if (name === routeName) {
            return hiddenTabStyles
        } else {
            return styles
        }
    }
}