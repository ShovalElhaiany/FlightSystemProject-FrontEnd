import serverApis from './Api';
import AnonymousOptions from './Anonymous';
import { createConfig } from '../utils/ConfigUtils';

const containers = {
    CustomerContainer: {
        ...AnonymousOptions,
        CustomerDetails: createConfig(
            'CustomerDetails', true, [], 
            [serverApis.CustomerApis.getCustomer, undefined, serverApis.CustomerApis.updateCustomer]
        ),
        MyTicketsTable: createConfig(
            'MyTicketsTable', false, [], 
            [serverApis.CustomerApis.getMyTickets, serverApis.CustomerApis.addTicket, undefined, serverApis.CustomerApis.deleteTicket]
        ),
    },
    AirlineContainer: {
        ...AnonymousOptions,
        AirlineDetails: createConfig(
            'AirlineDetails', true, [], 
            [serverApis.BaseApi.getAirlineById, undefined, serverApis.AirlineApis.updateAirline]
        ),
        FlightsTable: createConfig(
            'FlightsTable', false, [], 
            [serverApis.AirlineApis.getMyFlights, serverApis.AirlineApis.addFlight, undefined, serverApis.AirlineApis.deleteFlight]
        ),
        FlightDetails: createConfig(
            'FlightDetails', true, [], 
            [serverApis.BaseApi.getFlightById, undefined, serverApis.AirlineApis.updateFlight]
        ),
    },
    AdminContainer: {
        ...AnonymousOptions,
        CustomersTable: createConfig(
            'CustomersTable', false, [], 
            [serverApis.AdminApis.getAllCustomers, undefined, undefined, serverApis.AdminApis.deleteCustomer]
        ),
        AirlinesTable: createConfig(
            'AirlinesTable', false, [], 
            [serverApis.BaseApi.getAllAirlines, undefined, undefined, serverApis.AdminApis.deleteAirline]
        ),
        AdminsTable: createConfig(
            'AdminsTable', false, [], 
            [serverApis.AdminApis.getAllAdmins, undefined, undefined, serverApis.AdminApis.deleteAdmin]
        ),
    },
};

export default containers;
