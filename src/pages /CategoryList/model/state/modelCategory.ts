import { createEvent, createStore, sample } from 'effector';
import { useStore } from 'effector-react';

import { ICategory, IService } from '../../config/apiTypes';

// store
export const $input = createStore<string>('')
export const $idCategory = createStore<string>('')
export const $categoryes = createStore<ICategory[]>([])
export const $categoryeName = createStore<string>('')
export const $services = createStore<IService[]>([])
export const $servicesBySearch = createStore<IService[]>([])
export const $selectServicesById = createStore<IService | null>(null)


// wathers 
// $idCategory.watch(e => console.log('$idCategory', e))
// $categoryes.watch(e => console.log('$categoryes', e))
// $services.watch(e => console.log('$services', e))
// $categoryeName.watch(e => console.log('$categoryeName', e))


// event 
export const setInputChange = createEvent<string>()
export const setIdCategory = createEvent<string>()
export const setCategoryes = createEvent<ICategory[]>()
export const setSelectServicesById = createEvent<string>()
// some function
$input.on(setInputChange, (state, msg: string) => msg)
$categoryes.on(setCategoryes, (state, data: ICategory[]) => data)
$idCategory.on(setIdCategory, (state, id: string) => id)

sample({
    clock: setSelectServicesById,
    source: $services,
    fn(src, clk) {
        return src.find(item => item.service_id === clk) || null
    },
    target: $selectServicesById
})

sample({
    source: $idCategory,
    clock: setCategoryes,
    fn: (src, clk) => clk.find(item => item.category_id === src)?.services || [],
    target: [$services, $servicesBySearch]
})

sample({
    source: $idCategory,
    clock: setCategoryes,
    fn: (src, clk) => clk.find(item => item.category_id === src)?.category_name || '',
    target: $categoryeName
})

sample({
    clock: setInputChange,
    source: {
        src: $services,
        servicesBySearch: $servicesBySearch
    },
    fn({ src, servicesBySearch }, clk) {
        if (!!clk.trim()) {
            return src?.filter(obj => Object.keys(obj).some((key: string) => {
                if (
                    key === 'service_name'
                ) {
                    return obj[key].toUpperCase().includes(clk.toUpperCase())
                }
            }))

        } else {
            return src
        }
    },
    target: $servicesBySearch
})
