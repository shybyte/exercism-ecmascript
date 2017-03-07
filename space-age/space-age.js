const EARTH_YEAR_IN_SECONDS = 31557600;

const roundTo2DecimalPlaces = x => Math.round(x * 100) / 100;

export default (seconds) => {
  const createGetter = (planetYearInEarthYears) => {
    return () => roundTo2DecimalPlaces(seconds / (EARTH_YEAR_IN_SECONDS * planetYearInEarthYears));
  };
  return {
    seconds: seconds,
    onEarth: createGetter(1),
    onMercury: createGetter(0.2408467),
    onVenus: createGetter(0.61519726),
    onMars: createGetter(1.8808158),
    onJupiter: createGetter(11.862615),
    onSaturn: createGetter(29.447498),
    onUranus: createGetter(84.016846),
    onNeptune: createGetter(164.79132)
  };
}