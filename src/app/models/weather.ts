export class Weather {

    city: string;
    country: string;
    main: string;
    description = '';
    private _icon: string;
    private _temp: number;
    private _tempMax: number;
    private _tempMin: number;

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = `http://openweathermap.org/img/wn/${value}@2x.png`;
    }

    get temp(): number {
        return this._temp;
    }

    set temp(value: number) {
        this._temp = this.convertKelvinToCelsius(value);
    }

    get tempMax(): number {
        return this._tempMax;
    }

    set tempMax(value: number) {
        this._tempMax = this.convertKelvinToCelsius(value);
    }

    get tempMin(): number {
        return this._tempMin;
    }

    set tempMin(value: number) {
        this._tempMin = this.convertKelvinToCelsius(value);
    }

    convertKelvinToCelsius(temp: number) {
        return Math.floor(temp - 273.15);
    }
}