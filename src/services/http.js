import axios from 'axios'

export default class Http {
  isSuccess (response) {
    return response.response.status - 200 < 100
  }

  isNotFound (response) {
    return response.response.status === 404
  }



  filterZones (zone) {
    return axios.get('http://localhost:9080/services/biamapper/api/zone-controller/search/zone/like/' + zone)
  }



  login () {
    // {"username":"","password":""}
    return axios.post('http://localhost:9080/api/authenticate', {username:"admin",password:"admin"});
  }

  availability(request){
    return axios.post('http://localhost:9080/services/biaavailability/api/web-availability/availability',request);
  }

 
}
