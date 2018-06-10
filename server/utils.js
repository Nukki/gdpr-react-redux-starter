module.exports = {

  // checks if the country code belongs to European Union
  // and returns true if it does, false otherwise
  isEuropeanUnion: function(country) {
  /*   Countries of the EU:
       Austria              = 'AT'
       Belgium              = 'BE'
       Bulgaria             = 'BG'
       Croatia              = 'HR'
       Republic of Cyprus   = 'CY'
       Czech Republic       = 'CZ'
       Denmark              = 'DK'
       Estonia              = 'EE'
       Finland              = 'FI'
       France               = 'FR'
       Germany              = 'DE'
       Greece               = 'GR'
       Hungary              = 'HU'
       Ireland              = 'IE'
       Italy                = 'IT'
       Latvia               = 'LV'
       Lithuania            = 'LT'
       Luxembourg           = 'LU'
       Malta                = 'MT'
       Netherlands          = 'NL'
       Poland               = 'PL'
       Portugal             = 'PT'
       Romania              = 'RO'
       Slovakia             = 'SK'
       Slovenia             = 'SI'
       Spain                = 'ES'
       Sweden               = 'SE'
       United Kingdom       = 'GB'
    */
    return (  country === 'AT' || country === 'BE' ||
              country === 'BG' || country === 'HR' ||
              country === 'CY' || country === 'CZ' ||
              country === 'DK' || country === 'EE' ||
              country === 'FI' || country === 'FR' ||
              country === 'DE' || country === 'GR' ||
              country === 'HU' || country === 'IE' ||
              country === 'IT' || country === 'LV' ||
              country === 'LT' || country === 'LU' ||
              country === 'MT' || country === 'NL' ||
              country === 'PL' || country === 'PT' ||
              country === 'RO' || country === 'SK' ||
              country === 'SI' || country === 'ES' ||
              country === 'SE' || country === 'GB'
            ) ? true : false;
  }
};
