import serverApis from './Api';
import { createConfig } from '../utils/ConfigUtils';

const AnonymousOptions = {
    FlightsTable: createConfig(
        'FlightsTable', false, ['origin_country_id', 'destination_country_id', 'departure_time'],
        [serverApis.BaseApi.getAllFlights, undefined, undefined, undefined, serverApis.BaseApi.getFlightsByParameters]
    ),
    FlightDetails: createConfig(
        'FlightDetails', true, [],
        [serverApis.BaseApi.getFlightById]
    ),
    AirlinesTable: createConfig(
        'AirlinesTable', false, ['name', 'country_id'],
        [serverApis.BaseApi.getAllAirlines, undefined, undefined, undefined, serverApis.BaseApi.getAirlineByParameters]
    ),
    AirlineDetails: createConfig(
        'AirlineDetails', true, [],
        [serverApis.BaseApi.getAirlineById]
    ),
    CountriesTable: createConfig(
        'CountriesTable', false, [],
        [serverApis.BaseApi.getAllCountries]
    ),
    CountryDetails: createConfig(
        'CountryDetails', true, [],
        [serverApis.BaseApi.getCountryById]
    )
};

export default AnonymousOptions;
