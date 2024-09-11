const {FlightService} = require('../services/index');

const flightService = new FlightService();

const {SuccessCodes,ClientErrors} = require('../utils/error-codes')

const create = async (req,res)=>{
    try {
        let flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            departureTime : req.body.departureTime,
            arrivaTime : req.body.arrivaTime,
            price : req.body.price ,

        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data : flight,
            success : true,
            err:{},
            message : "Succesfully created a flight"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          success: false,
          message: "not able to create a Flight",
          err: error,
        });
      }
}

const getAll = async(req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data : response , 
            success : true ,
            err : {},
            message : "Successfully fetched the flights",
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch the Flights",
            err: error,
          });
    }
}



module.exports ={
    create ,
    getAll
}
