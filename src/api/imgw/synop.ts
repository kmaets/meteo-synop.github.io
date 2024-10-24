import {IMGW_BASE_URL} from '../config/imgw';
import { ISynop } from '../../models/synop';

export const getImgwSynops = async (): Promise<ISynop[]> => {
	const response = await fetch(IMGW_BASE_URL);
	const data = await response.json();

	return data;
};

export const getImgwSynopStation = async (): Promise<ISynop> => {
	const stationUrl = '/id/12375';
	const response = await fetch(`${IMGW_BASE_URL}/${stationUrl}`);
	const data = await response.json();

	return data;
};