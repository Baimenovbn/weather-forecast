export const rests = {
  get_coords: `/geo/1.0/direct?limit=1`,
  weather: {
    get_hourly: `/data/2.5/onecall?exclude=current,minutely,daily,alerts`,
    get_daily: `/data/2.5/onecall?exclude=current,minutely,hourly,alerts`,
  }
}
