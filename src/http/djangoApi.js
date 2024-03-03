import {$djangoHost} from "./indexApi";

export const djangoConnect = async () =>{
    const {data} = await $djangoHost.get('api/django',)
    return data
}
