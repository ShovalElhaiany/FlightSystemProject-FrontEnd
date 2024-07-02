import serverApis from './Api';
import { createConfig } from '../utils/ConfigUtils';

// Configuration for each table related to Flights
const FlightsConfig = {
    // Table showing multiple flights
    FlightsTable: createConfig(
        'FlightsTable',
        false,
        false,
        ['origin_country_id', 'destination_country_id', 'departure_time'],
        [
            serverApis.BaseApi.getAllFlights,
            undefined,
            undefined,
            undefined,
            serverApis.BaseApi.getFlightsByParameters
        ]
    ),
    // Detailed view for a specific flight
    FlightDetails: createConfig(
        'FlightDetails',
        true,
        true,
        [],
        [serverApis.BaseApi.getFlightById]
    )
};

// Configuration for each table related to Airlines
const AirlinesConfig = {
    // Table showing multiple airlines
    AirlinesTable: createConfig(
        'AirlinesTable',
        false,
        false,
        ['name', 'country_id'],
        [
            serverApis.BaseApi.getAllAirlines,
            undefined,
            undefined,
            undefined,
            serverApis.BaseApi.getAirlineByParameters
        ]
    ),
    // Detailed view for a specific airline
    AirlineDetails: createConfig(
        'AirlineDetails',
        true,
        true,
        [],
        [serverApis.BaseApi.getAirlineById]
    )
};

// Configuration for each table related to Countries
const CountriesConfig = {
    // Table showing multiple countries
    CountriesTable: createConfig(
        'CountriesTable',
        false,
        false,
        [],
        [serverApis.BaseApi.getAllCountries]
    ),
    // Detailed view for a specific country
    CountryDetails: createConfig(
        'CountryDetails',
        true,
        true,
        [],
        [serverApis.BaseApi.getCountryById]
    )
};

// Combining configurations under the AnonymousOptions object
const AnonymousOptions = {
    ...FlightsConfig,
    ...AirlinesConfig,
    ...CountriesConfig
};

export default AnonymousOptions;
