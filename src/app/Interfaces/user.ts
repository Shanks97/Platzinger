export enum Status{
    ONLINE = 'online',
    AWAY = 'away',
    BUSY = 'busy',
    OFFLINE = 'offline'
}

export interface User
{
    nick: string;
    subnick?: string;
    age?: number;
    email: string;
    friend: boolean;
    uid: any;
    status: Status
}