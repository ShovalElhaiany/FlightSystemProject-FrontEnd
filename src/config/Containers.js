import serverApis from './Api';
import AnonymousOptions from './Anonymous';
import { createConfig } from '../utils/ConfigUtils';

const containers = {
    AnonymousContainer: {...AnonymousOptions},
    CustomerContainer: {
        ...AnonymousOptions,
        CustomerDetails: createConfig(
            'CustomerDetails', true, true, [], 
            [serverApis.CustomerApis.getCustomer, undefined, serverApis.CustomerApis.updateCustomer]
        ),
        TicketsTable: createConfig(
            'TicketsTable', false, false, [], 
            [serverApis.CustomerApis.getAllTickets, serverApis.CustomerApis.addTicket, undefined, undefined]
        ),
        MyTicketsTable: createConfig(
            'MyTicketsTable', false, true, [], 
            [serverApis.CustomerApis.getMyTickets, undefined, undefined, serverApis.CustomerApis.deleteTicket]
        ),
    },
    AirlineContainer: {
        ...AnonymousOptions,
        AirlineDetails: createConfig(
            'AirlineDetails', true, true, [], 
            [serverApis.BaseApi.getAirlineById, undefined, serverApis.AirlineApis.updateAirline]
        ),
        FlightsTable: createConfig(
            'FlightsTable', false, false, [], 
            [serverApis.AirlineApis.getMyFlights, serverApis.AirlineApis.addFlight, undefined, serverApis.AirlineApis.deleteFlight]
        ),
        FlightDetails: createConfig(
            'FlightDetails', true, true, [], 
            [serverApis.BaseApi.getFlightById, undefined, serverApis.AirlineApis.updateFlight]
        ),
    },
    AdminContainer: {
        ...AnonymousOptions,
        CustomersTable: createConfig(
            'CustomersTable', false, false, [], 
            [serverApis.AdminApis.getAllCustomers, undefined, undefined, serverApis.AdminApis.deleteCustomer]
        ),
        AirlinesTable: createConfig(
            'AirlinesTable', false, false, [], 
            [serverApis.BaseApi.getAllAirlines, undefined, undefined, serverApis.AdminApis.deleteAirline]
        ),
        AdminsTable: createConfig(
            'AdminsTable', false, false, [], 
            [serverApis.AdminApis.getAllAdmins, undefined, undefined, serverApis.AdminApis.deleteAdmin]
        ),
    },
};

export default containers;
