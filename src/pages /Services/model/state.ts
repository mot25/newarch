import { createEvent, createStore } from 'effector';

import { IService } from '../../CategoryList/config/apiTypes';
import { ErrorValidateServices, TSumServices } from '../config/types';

// store
const $localState = createStore<TSumServices>({
    number: '',
    sum: '0'
})
const $error = createStore<ErrorValidateServices>({
    number: false,
    sum: false,
})
const $serviceName = createStore<string>('')


// event 
const editLocalState = createEvent<{ value: string, key: keyof TSumServices }>()
const changeError = createEvent<{ value: boolean, key: keyof ErrorValidateServices }>()
const clearInput = createEvent<{ value: string, key: keyof ErrorValidateServices }>()
const clearAll = createEvent<void>()
const setServices = createEvent<IService>()


// fn 
$serviceName.on(setServices, (_, data) => data.service_name)
$localState.on(editLocalState, (prevState, data) => ({
    ...prevState,
    [data.key]: data.value
}))
$localState.on(clearInput, (prevState, data) => ({
    ...prevState,
    'number': ''
}))
$error.on(changeError, (prevState, data) => ({
    ...prevState,
    [data.key]: data.value
}))
$error.reset(editLocalState, clearAll)
$localState.reset(clearAll)

export {
    $localState as $localStateService,
    $error as $errorService,
    editLocalState as editLocalStateService,
    changeError as changeErrorService,
    clearInput as clearInputService,
    clearAll as clearAllService,
    $serviceName,
    setServices
}