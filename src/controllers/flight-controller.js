const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(200).json({
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
