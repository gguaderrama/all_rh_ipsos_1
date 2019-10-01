export const URL = Object.freeze({
  CATALOGOS: {
    Area: '/api/Area/',
    BusinessUnit: '/api/Catalogs',
    Departments: '/api/EmployeeType',
    Language: '/api/ProjetsTypes',
    StudiesPlaces : '/api/StudiesTypes',
    SurveliesPlaces : '/api/SurveliesTypes',
    Trainnings : '/api/TrainningsAreas',
    TrainningsTypes : '/api/VacationDays',
    TrainningsCatalog : '/api/Trainnings'
  },
  PLACES: {
    CitiesProvincia: '/api/Cities/Province/',
    CitiesGET: '/api/Cities/',
    CountriesLocation: '/api/Locations/Locations/',
    Countries: '/api/Locations/',
    ProvincesCountry: '/api/Provinces/Country/',
    Provinces: '/api/Provinces/'
  },
 
  PAISES:{
    CountriesGET: '/api/Countries/'
   },
   PROVINCES:{
    PPAL: '/api/Provinces/Country/',
    PROVINCES: '/api/Provinces/'
   },
   CITIES:{
    PPAL: '/api/Cities/Province/',
    CITIES: '/api/Cities/'
   },
   EMPLOYEES:{
     EmployeesGET:'/api/Employee'
   },
   TRAINERS:{
     TrainersGET:'/api/Trainers'
   },
   TRAININGS:{
     TrainingsGET:'/api/TrainningsSchedules'
   },
   TRAINNINGS_SCHEDULES : {
     TrainersSchedule : '/api/TrainningsSchedulesEnroled/',
     TrainersSch:'/api/TrainningsSchedules/'
   }, 
   ABSENCES : {
    AbsencesGET : '/api/Absences/',
   },
   HCATALOG:{
    HcatalogGET:'/api/VacationDays'
   },
   TRAININGREQUEST:{
    TrainingRequestGET:'/api/TrainningsSchedules'
   },
   SAVE_TRAINNING_REQUEST : {
     save_trainning_request : '/api/TrainningsRequests'
   },
   LANGUAGE : {
    language : '/api/Language'
  }







  
});

