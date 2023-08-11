import { apisSettings, defaultTableSettings } from '../utils/ConfigUtils';

const AnonymousOptions = {
    Home: {
        ...defaultTableSettings('Home'),
        ...apisSettings(),
    },
    Login: {
        ...defaultTableSettings('Login'),
        ...apisSettings(),
    },
    Registration: {
        ...defaultTableSettings('Registration'),
        ...apisSettings(),
    },
    FlightsTable: {
        ...defaultTableSettings('FlightsTable', false),
        ...apisSettings(),
    },
    FlightDetails: {
        ...defaultTableSettings('FlightDetails', true),
        ...apisSettings(),
    },
    AirlinesTable: {
        ...defaultTableSettings('AirlinesTable', false),
        ...apisSettings(),
    },
    AirlineDetails: { 
        ...defaultTableSettings('AirlineDetails', true),
        ...apisSettings(),  
    },
    CountriesTable: {
        ...defaultTableSettings('CountriesTable', false),
        ...apisSettings(),
    },
    CountryDetails: {
        ...defaultTableSettings('CountryDetails', true),
        ...apisSettings(),
    },
    TicketsTable: {
        ...defaultTableSettings('TicketsTable', false),
        ...apisSettings(),
    },
    TicketDetails: {
        ...defaultTableSettings('TicketDetails', true),
        ...apisSettings(),
    },
};

export default  AnonymousOptions;