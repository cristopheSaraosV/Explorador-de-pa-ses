export interface ResAPICountryName {
    name:   Name;
    latlng: number[];
    cca2:string
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}
