import moment from 'moment';
//Mock test data from the API
export default [{
  zip: '94122',
  fetchedAt: moment().subtract(5, 'minutes'),
  location: {
    name: 'San Francisco',
    region: 'California',
    country: 'USA',
    lat: 37.76,
    lon: -122.48,
    tz_id: 'America/Los_Angeles',
    localtime_epoch: 1547095270,
    localtime: '2019-01-09 20:41'
  },
  current: {
    last_updated_epoch: 1547094609,
    last_updated: '2019-01-09 20:30',
    temp_c: 15,
    temp_f: 59,
    is_day: 0,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.apixu.com/weather/64x64/night/116.png',
      code: 1003
    },
    wind_mph: 3.8,
    wind_kph: 6.1,
    wind_degree: 220,
    wind_dir: 'SW',
    pressure_mb: 1020,
    pressure_in: 30.6,
    precip_mm: 1.1,
    precip_in: 0.04,
    humidity: 64,
    cloud: 25,
    feelslike_c: 15.2,
    feelslike_f: 59.4,
    vis_km: 16,
    vis_miles: 9,
    uv: 0
  },
  forecast: {
    forecastday: [
      {
        date: '2019-01-09',
        date_epoch: 1546992000,
        day: {
          maxtemp_c: 13.2,
          maxtemp_f: 55.8,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 11.1,
          avgtemp_f: 51.9,
          maxwind_mph: 19,
          maxwind_kph: 30.6,
          totalprecip_mm: 8.1,
          totalprecip_in: 0.32,
          avgvis_km: 13.2,
          avgvis_miles: 8,
          avghumidity: 83,
          uv: 1.7,
          condition: {
            text: 'Partly cloudy',
            icon: '//cdn.apixu.com/weather/64x64/night/116.png',
            code: 1003
          }
        },
        astro: {
          sunrise: '07:26 AM',
          sunset: '05:09 PM',
          moonrise: '09:50 AM',
          moonset: '08:40 PM'
        }
      },
      {
        date: '2019-01-10',
        date_epoch: 1547078400,
        day: {
          maxtemp_c: 13.7,
          maxtemp_f: 56.7,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 10.6,
          avgtemp_f: 51.1,
          maxwind_mph: 4.9,
          maxwind_kph: 7.9,
          totalprecip_mm: 0.2,
          totalprecip_in: 0.01,
          avgvis_km: 19.3,
          avgvis_miles: 11,
          avghumidity: 88,
          uv: 2.4,
          condition: {
            text: 'Patchy rain possible',
            icon: '//cdn.apixu.com/weather/64x64/day/176.png',
            code: 1063
          }
        },
        astro: {
          sunrise: '07:26 AM',
          sunset: '05:10 PM',
          moonrise: '10:21 AM',
          moonset: '09:37 PM'
        }
      },
      {
        date: '2019-01-11',
        date_epoch: 1547164800,
        day: {
          maxtemp_c: 12.2,
          maxtemp_f: 54,
          mintemp_c: 8.2,
          mintemp_f: 46.8,
          avgtemp_c: 10.2,
          avgtemp_f: 50.4,
          maxwind_mph: 11.9,
          maxwind_kph: 19.1,
          totalprecip_mm: 15.6,
          totalprecip_in: 0.61,
          avgvis_km: 15.9,
          avgvis_miles: 9,
          avghumidity: 78,
          uv: 1.9,
          condition: {
            text: 'Moderate or heavy rain shower',
            icon: '//cdn.apixu.com/weather/64x64/night/356.png',
            code: 1243
          }
        },
        astro: {
          sunrise: '07:25 AM',
          sunset: '05:11 PM',
          moonrise: '10:50 AM',
          moonset: '10:33 PM'
        }
      },
      {
        date: '2019-01-12',
        date_epoch: 1547251200,
        day: {
          maxtemp_c: 12.2,
          maxtemp_f: 54,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 10.3,
          avgtemp_f: 50.6,
          maxwind_mph: 13,
          maxwind_kph: 20.9,
          totalprecip_mm: 5.3,
          totalprecip_in: 0.21,
          avgvis_km: 15.7,
          avgvis_miles: 9,
          avghumidity: 80,
          uv: 2,
          condition: {
            text: 'Moderate or heavy rain shower',
            icon: '//cdn.apixu.com/weather/64x64/night/356.png',
            code: 1243
          }
        },
        astro: {
          sunrise: '07:25 AM',
          sunset: '05:12 PM',
          moonrise: '11:18 AM',
          moonset: '11:30 PM'
        }
      },
      {
        date: '2019-01-13',
        date_epoch: 1547337600,
        day: {
          maxtemp_c: 12.2,
          maxtemp_f: 54,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 10.5,
          avgtemp_f: 50.9,
          maxwind_mph: 15.9,
          maxwind_kph: 25.6,
          totalprecip_mm: 7.6,
          totalprecip_in: 0.3,
          avgvis_km: 14.6,
          avgvis_miles: 9,
          avghumidity: 79,

          uv: 0.7,
          condition: {
            text: 'Light rain',
            icon: '//cdn.apixu.com/weather/64x64/night/296.png',
            code: 1183
          }
        },
        astro: {
          sunrise: '07:25 AM',
          sunset: '05:13 PM',
          moonrise: '11:46 AM',
          moonset: 'No moonset'
        }
      }
    ]
  }
},
{
  zip: '94121',
  fetchedAt: moment(),
  location: {
    name: 'San Francisco',
    region: 'California',
    country: 'USA',
    lat: 37.76,
    lon: -122.48,
    tz_id: 'America/Los_Angeles',
    localtime_epoch: 1547095270,
    localtime: '2019-01-09 20:41'
  },
  current: {
    last_updated_epoch: 1547094609,
    last_updated: '2019-01-09 20:30',
    temp_c: 15,
    temp_f: 59,
    is_day: 0,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.apixu.com/weather/64x64/night/116.png',
      code: 1003
    },
    wind_mph: 3.8,
    wind_kph: 6.1,
    wind_degree: 220,
    wind_dir: 'SW',
    pressure_mb: 1020,
    pressure_in: 30.6,
    precip_mm: 1.1,
    precip_in: 0.04,
    humidity: 64,
    cloud: 25,
    feelslike_c: 15.2,
    feelslike_f: 59.4,
    vis_km: 16,
    vis_miles: 9,
    uv: 0
  },
  forecast: {
    forecastday: [
      {
        date: '2019-01-09',
        date_epoch: 1546992000,
        day: {
          maxtemp_c: 13.2,
          maxtemp_f: 55.8,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 11.1,
          avgtemp_f: 51.9,
          maxwind_mph: 19,
          maxwind_kph: 30.6,
          totalprecip_mm: 8.1,
          totalprecip_in: 0.32,
          avgvis_km: 13.2,
          avgvis_miles: 8,
          avghumidity: 83,
          uv: 1.7,
          condition: {
            text: 'Partly cloudy',
            icon: '//cdn.apixu.com/weather/64x64/night/116.png',
            code: 1003
          }
        },
        astro: {
          sunrise: '07:26 AM',
          sunset: '05:09 PM',
          moonrise: '09:50 AM',
          moonset: '08:40 PM'
        }
      },
      {
        date: '2019-01-10',
        date_epoch: 1547078400,
        day: {
          maxtemp_c: 13.7,
          maxtemp_f: 56.7,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 10.6,
          avgtemp_f: 51.1,
          maxwind_mph: 4.9,
          maxwind_kph: 7.9,
          totalprecip_mm: 0.2,
          totalprecip_in: 0.01,
          avgvis_km: 19.3,
          avgvis_miles: 11,
          avghumidity: 88,
          uv: 2.4,
          condition: {
            text: 'Patchy rain possible',
            icon: '//cdn.apixu.com/weather/64x64/day/176.png',
            code: 1063
          }
        },
        astro: {
          sunrise: '07:26 AM',
          sunset: '05:10 PM',
          moonrise: '10:21 AM',
          moonset: '09:37 PM'
        }
      },
      {
        date: '2019-01-11',
        date_epoch: 1547164800,
        day: {
          maxtemp_c: 12.2,
          maxtemp_f: 54,
          mintemp_c: 8.2,
          mintemp_f: 46.8,
          avgtemp_c: 10.2,
          avgtemp_f: 50.4,
          maxwind_mph: 11.9,
          maxwind_kph: 19.1,
          totalprecip_mm: 15.6,
          totalprecip_in: 0.61,
          avgvis_km: 15.9,
          avgvis_miles: 9,
          avghumidity: 78,
          uv: 1.9,
          condition: {
            text: 'Moderate or heavy rain shower',
            icon: '//cdn.apixu.com/weather/64x64/night/356.png',
            code: 1243
          }
        },
        astro: {
          sunrise: '07:25 AM',
          sunset: '05:11 PM',
          moonrise: '10:50 AM',
          moonset: '10:33 PM'
        }
      },
      {
        date: '2019-01-12',
        date_epoch: 1547251200,
        day: {
          maxtemp_c: 12.2,
          maxtemp_f: 54,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 10.3,
          avgtemp_f: 50.6,
          maxwind_mph: 13,
          maxwind_kph: 20.9,
          totalprecip_mm: 5.3,
          totalprecip_in: 0.21,
          avgvis_km: 15.7,
          avgvis_miles: 9,
          avghumidity: 80,
          uv: 2,
          condition: {
            text: 'Moderate or heavy rain shower',
            icon: '//cdn.apixu.com/weather/64x64/night/356.png',
            code: 1243
          }
        },
        astro: {
          sunrise: '07:25 AM',
          sunset: '05:12 PM',
          moonrise: '11:18 AM',
          moonset: '11:30 PM'
        }
      },
      {
        date: '2019-01-13',
        date_epoch: 1547337600,
        day: {
          maxtemp_c: 12.2,
          maxtemp_f: 54,
          mintemp_c: 9.2,
          mintemp_f: 48.6,
          avgtemp_c: 10.5,
          avgtemp_f: 50.9,
          maxwind_mph: 15.9,
          maxwind_kph: 25.6,
          totalprecip_mm: 7.6,
          totalprecip_in: 0.3,
          avgvis_km: 14.6,
          avgvis_miles: 9,
          avghumidity: 79,

          uv: 0.7,
          condition: {
            text: 'Light rain',
            icon: '//cdn.apixu.com/weather/64x64/night/296.png',
            code: 1183
          }
        },
        astro: {
          sunrise: '07:25 AM',
          sunset: '05:13 PM',
          moonrise: '11:46 AM',
          moonset: 'No moonset'
        }
      }
    ]
  }
}
];
