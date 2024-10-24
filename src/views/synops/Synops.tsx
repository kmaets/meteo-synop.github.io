import { useState, useEffect } from 'react';
import { getImgwSynops, getImgwSynopStation } from '../../api/imgw/synop';
import { ISynop } from '../../models/synop';

export const Synops = () => {
	const [stationSynop, setStationSynop] = useState<ISynop>();
	const [synops, setSynops] = useState<ISynop[]>([]);

	useEffect(() => {
		getImgwSynopStation()
			.then(data => setStationSynop(data))
			.catch(error => console.log(error));

		getImgwSynops()
			.then(data => setSynops(data))
			.catch(error => console.log(error));
	}, []);

	return (
		<>
			<div>
				<>
					Measure for: {stationSynop?.stacja} {stationSynop?.temperatura}
				</>
				&#8451;
				<hr />
			</div>
			<div>
				{synops.map(synop => (
					<div key={synop.id_stacji}>
						<p>Station: {synop.stacja} | Date: {synop.data_pomiaru} | Temp.: {synop.temperatura}&#8451; | Rain: {synop.suma_opadu} | Pressure: {synop.cisnienie}hPa</p>
						<hr />
					</div>
				))}
			</div>
		</>
	);
};
