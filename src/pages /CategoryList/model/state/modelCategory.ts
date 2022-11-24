import { createEvent, createStore } from 'effector';

import { ICategory, IService } from '../../config/apiTypes';

export const $input = createStore<string>('')
export const setInputChange = createEvent()
$input.on(setInputChange, (state, msg) => msg)
// const findServices: ICategory | undefined = data?.category.find(item => item.category_id === id.toString())


// const [search, setSearch] = useState<string>('')

// const [servicesList, setServicesList] = useState<IService[] | undefined>(findServices?.services)