import serverApis from './Api';
import  AnonymousOptions from './Anonymous';
import { apisSettings, defaultTableSettings } from '../utils/ConfigUtils';

const tableSettings = defaultTableSettings;


const containers = {
    CustomerContainer: {
        ...AnonymousOptions,
        CustomerDetails: {
            ...tableSettings('CustomerDetails', false),
            // ...apisSettings(serverApis.BaseApi.getAllCountries)
        },
        MyTicketsTable: {
            ...tableSettings('MyTicketsTable', true),
            ...apisSettings()
        }
    },
    AirlineContainer: {
        ...AnonymousOptions,
        AirlineDetails: {
            ...tableSettings('AirlineDetails', true),
            ...apisSettings()
        },
        FlightsTable: {
            ...tableSettings('FlightsTable', false, []),
            ...apisSettings()
        },
        FlightDetails: {
            ...tableSettings('FlightDetails', true),
            ...apisSettings()
        }
    },
    AdminContainer: {
        ...AnonymousOptions,
        CustomersTable: {
            ...tableSettings('CustomersTable', true),
            ...apisSettings()
        },
        AirlinesTable: {
            ...tableSettings('AirlinesTable', false, []),
            ...apisSettings()
        },
        AdministratorTable: {
            ...tableSettings('AdministratorTable', true),
            ...apisSettings()
        }
    }
};

export default containers;
