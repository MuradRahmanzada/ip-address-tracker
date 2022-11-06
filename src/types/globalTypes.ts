export type As = {
    asn: boolean;
    domain: string;
    name: string;
    route: string;
    type: string
}

export type Location = {
    city: string;
    country: string;
    geonameId: number;
    lat: number;
    lng: number;
    postalCode: string;
    region: string;
    timezone: string
}

export type Address = {
    ip: string,
    isp: string,
    as: As,
    location: Location,
}


export interface IProps {
    address: Address
}