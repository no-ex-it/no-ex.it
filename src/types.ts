export type BasicFormType = { name: string, avatar: string, text: string };
export type LolFormType = { name: string, img: string, url: string };
export type SteamFormType = { name: string, avatar: string, id: string };
export type FormType = { "basic": BasicFormType, "lol_ids": LolFormType[], "steam_ids": SteamFormType[] };


export type LolType = { name: string, img: string, url: string };
export type SteamType = { name: string, avatar: string, id: string };
export type ProfileDataType = { id: string, name: string, "avatar": string, "discord_id": string, steam_ids: SteamType[], lol_ids: LolType[], "text": string };
export const defaultProfileData: ProfileDataType = {
    id: "undefined",
    avatar: "",
    text: "",
    discord_id: "",
    lol_ids: [],
    steam_ids: [],
    name: ""
}

export type ParamsType = {state: string,code:string}
export type Provider = {state: string, code: string, name: string,codeVerifier:string}