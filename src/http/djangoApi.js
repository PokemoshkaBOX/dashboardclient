import {$djangoHost} from "./index";

export const djangoConnect = async () =>{
    const {data} = await $djangoHost.get('api/django',)
    return data
}