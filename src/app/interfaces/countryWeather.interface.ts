export interface countryWeather{
    name        :string;
    main        :string; 
    description :string; 
    temperature :number;
    feels_like  : number;
    grnd_level  : number;
    humidity    : number;
    pressure    : number;
    sea_level   : number;
    temp_max    : number;
    temp_min    : number;
    icon        : string;
}