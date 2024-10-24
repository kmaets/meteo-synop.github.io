export interface ISynop {
	id_stacji: string,
	stacja: string,
	data_pomiaru: string,	// date
	godzina_pomiaru: string,	// hour
	temperatura: string,	// temp
	predkosc_wiatru: string,	// wind_speed
	kierunek_wiatru: string,	// wind_direction
	wilgotnosc_wzgledna: string,	// humidity
	suma_opadu: string,	// rainfall_total
	cisnienie: string	// pressure
}

export interface ISynopEN {
	id: string,
	station: string,
	date: string,
	hour: string,
	temp: string,
	wind_speed: string,
	wind_direction: string,
	humidity: string,
	rain_total: string,
	pressure: string
}