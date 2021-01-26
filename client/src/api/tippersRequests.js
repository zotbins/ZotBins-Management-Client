import moment from 'moment'

// TODO: Later will be based on tippershost
const BASE_INFRASTRUCTURE_URL =
  'http://sensoria.ics.uci.edu:8059/infrastructure/get?'
const BASE_SENSOR_URL = 'http://sensoria.ics.uci.edu:8059/sensor/get?'
const BASE_OBSERVATION_URL = 'http://sensoria.ics.uci.edu:8059/observation/get?'
const SENSOR_TYPE_WEIGHT = 6
const SENSOR_TYPE_DISTANCE = 7
const TIPPERS_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * Sample function calls:
 *     getInfrastructures().then(function(responseJson) { console.log(responseJson) });
 *     getSensors(6).then(function(responseJson){ console.log(responseJson) });
 *     getObservations("ZBin1D", "2019-8-21 00:00:00", "2019-10-5 00:00:00").then(function(responseJson){ console.log(responseJson) });
 *
 * For more information, view the documentation: https://zotbins.github.io/tippersdocs/doc/index.html
 *
 */

/**
 * Get infrastructures from the TIPPERS API.
 *
 * E.g. http://sensoria.ics.uci.edu:8059/infrastructure/get?
 *
 * @return an array of infrastructure JSON objects
 */
export function getInfrastructures() {
  let url = BASE_INFRASTRUCTURE_URL
  let params = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return fetch(url, params)
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      return responseJson
    })
    .catch(function () {
      // If there's an exception (e.g. TIPPERS is down) then return dummy data
      return [
        {
          name: 'DBH',
          id: 193813,
          type: 'building',
          region: {
            geometry: [],
            id: 412,
            floor: 0,
          },
          capacity: 0,
        },
        {
          name: 'ISG',
          id: 193821,
          type: 'region',
          region: {
            geometry: [],
            id: 420,
            floor: 2,
          },
          capacity: 0,
        },
        {
          name: '2-floor',
          id: 193838,
          type: 'floor',
          region: {
            geometry: [],
            id: 440,
            floor: 0,
          },
          capacity: 0,
        },
        {
          area: 'ISG',
          name: '2065',
          id: 28,
          type: 'conference_room',
          region: {
            geometry: [
              { x: 55, y: 8, z: 2 },
              { x: 60, y: 19, z: 2 },
            ],
            id: 28,
            floor: 2,
          },
          building: 'DBH',
          capacity: 20,
        },
      ]
    })
}

/**
 * Get sensors from the TIPPERS API.
 *
 * E.g. http://sensoria.ics.uci.edu:8059/sensor/get?sensor_type_id=6
 *
 * @param sensorType the sensor type (6 for weight, 7 for distance)
 * @return an array of sensor JSON objects
 */
export function getSensors(sensorType) {
  let url = BASE_SENSOR_URL + 'sensor_type_id=' + sensorType
  let params = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return fetch(url, params)
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      return responseJson
    })
    .catch(function () {
      // If there's an exception (e.g. TIPPERS is down) then return dummy data
      return [
        {
          id: 'ZBin1',
          name: 'RZotbins',
          x: 10,
          y: 20,
          z: 2,
        },
        {
          id: 'ZBin2',
          name: 'RZotbins',
          x: 50,
          y: 40,
          z: 2,
        },
      ]
    })
}

/**
 * Get observations from the TIPPERS API. If start and end times are not passed, then defaults to getting data from the last 24 hours.
 *
 * E.g. http://sensoria.ics.uci.edu:8059/observation/get?sensor_id=ZBin1&type=2&start_timestamp=2018-07-01+00%3A00%3A00&end_timestamp=2018-07-25+00%3A00%3A00
 *
 * @param sensorId the id of the sensor (e.g. ZBin1)
 * @param startTime the timestamp in which to start getting observations
 * @param endTime the timestamp in which to stop getting observations
 * @return an array of observation JSON objects
 */
export function getObservations(sensorId, startTime = null, endTime = null) {
  if (startTime === null || endTime === null) {
    startTime = moment().subtract(1, 'days').format(TIPPERS_TIME_FORMAT)
    endTime = moment().format(TIPPERS_TIME_FORMAT)
  }

  let url =
    BASE_OBSERVATION_URL +
    'sensor_id=' +
    sensorId +
    '&start_timestamp=' +
    encodeURIComponent(startTime) +
    '&end_timestamp=' +
    encodeURIComponent(endTime)
  let params = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return fetch(url, params)
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      return responseJson
    })
    .catch(function () {
      // If there's an exception (e.g. TIPPERS is down) then return dummy data
      return [
        {
          sensor_id: sensorId,
          payload: {
            weight: 123,
          },
          request_ids: [],
          id: 123,
          timestamp: startTime,
        },
        {
          sensor_id: sensorId,
          payload: {
            weight: 127,
          },
          request_ids: [],
          id: 123,
          timestamp: endTime - startTime,
        },
      ]
    })
}
