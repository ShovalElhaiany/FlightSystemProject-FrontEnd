import serverApis from './Api';
import { createConfig } from '../utils/ConfigUtils';

const AnonymousOptions = {
    FlightsTable: createConfig(
        'FlightsTable', false, false, ['origin_country_id', 'destination_country_id', 'departure_time'],
        [serverApis.BaseApi.getAllFlights, undefined, undefined, undefined, serverApis.BaseApi.getFlightsByParameters]
    ),
    FlightDetails: createConfig(
        'FlightDetails', true, true, [],
        [serverApis.BaseApi.getFlightById]
    ),
    AirlinesTable: createConfig(
        'AirlinesTable', false, false, ['name', 'country_id'],
        [serverApis.BaseApi.getAllAirlines, undefined, undefined, undefined, serverApis.BaseApi.getAirlineByParameters]
    ),
    AirlineDetails: createConfig(
        'AirlineDetails', true, true, [],
        [serverApis.BaseApi.getAirlineById]
    ),
    CountriesTable: createConfig(
        'CountriesTable', false, false, [],
        [serverApis.BaseApi.getAllCountries]
    ),
    CountryDetails: createConfig(
        'CountryDetails', true, true, [],
        [serverApis.BaseApi.getCountryById]
    )
};

export default AnonymousOptions;
