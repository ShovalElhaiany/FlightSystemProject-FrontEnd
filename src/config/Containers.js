// Import the necessary modules
import serverApis from './Api';
import AnonymousOptions from './Anonymous';
import { createConfig } from '../utils/ConfigUtils';

// Define the main container configurations for different user types
const containers = {
    // Anonymous user configurations
    AnonymousContainer: { 
        ...AnonymousOptions 
    },
    
    // Customer user configurations
    CustomerContainer: {
        ...AnonymousOptions,
        
        // Configuration for Customer Details
        CustomerDetails: createConfig(
            'CustomerDetails', true, true, [],
            [serverApis.CustomerApis.getCustomer, undefined, serverApis.CustomerApis.updateCustomer]
        ),

        // Configuration for Tickets Table
        TicketsTable: createConfig(
            'TicketsTable', false, false, [],
            [serverApis.CustomerApis.getAllTickets, serverApis.CustomerApis.addTicket, undefined, undefined]
        ),

        TicketDetails: createConfig(
            'TicketDetails', true, true, [],
            [serverApis.CustomerApis.getTicket]
        ),

        // Configuration for My Tickets Table
        MyTicketsTable: createConfig(
            'MyTicketsTable', false, true, [],
            [serverApis.CustomerApis.getMyTickets, undefined, undefined, serverApis.CustomerApis.deleteTicket]
        ),
    },
    
    // Airline user configurations
    AirlineContainer: {
        ...AnonymousOptions,
        
        // Configuration for Airline Details
        AirlineDetails: createConfig(
            'AirlineDetails', true, true, [],
            [serverApis.BaseApi.getAirlineById, undefined, serverApis.AirlineApis.updateAirline]
        ),

        // Configuration for Flights Table
        MyFlightsTable: createConfig(
            'MyFlightsTable', false, true, [],
            [serverApis.AirlineApis.getMyFlights, serverApis.AirlineApis.addFlight, serverApis.AirlineApis.updateFlight, serverApis.AirlineApis.deleteFlight]
        ),
        AddOrDeleteFlight: createConfig(
            'AddOrDeleteFlight', false, false, [],
            [serverApis.BaseApi.getAllFlights, serverApis.AirlineApis.addFlight, undefined, serverApis.AirlineApis.deleteFlight]
        ),

        // Configuration for Flight Details
        FlightDetails: createConfig(
            'FlightDetails', true, true, [],
            [serverApis.BaseApi.getFlightById, undefined, serverApis.AirlineApis.updateFlight]
        ),
    },
    
    // Admin user configurations
    AdminContainer: {
        ...AnonymousOptions,
        
        // Configuration for Customers Table
        CustomersTable: createConfig(
            'CustomersTable', false, false, [],
            [serverApis.AdminApis.getAllCustomers, undefined, undefined, serverApis.AdminApis.deleteCustomer]
        ),

        CustomerDetails: createConfig(
            'CustomerDetails', true, true, [],
            [serverApis.AdminApis.getCustomer]
        ),

        // Configuration for Airlines Table
        AirlinesTable: createConfig(
            'AirlinesTable', false, false, [],
            [serverApis.BaseApi.getAllAirlines, undefined, undefined, serverApis.AdminApis.deleteAirline]
        ),

        // Configuration for Admins Table
        AdminsTable: createConfig(
            'AdminsTable', false, false, [],
            [serverApis.AdminApis.getAllAdmins, undefined, undefined, serverApis.AdminApis.deleteAdmin]
        ),

        AdminsDetails: createConfig(
            'AdminDetails', true, true, [],
            [serverApis.AdminApis.getAdmin]
        ),
    },
};

// Export the main container configurations
export default containers;
