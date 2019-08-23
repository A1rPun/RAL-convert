import codes from './codes.json';

function getMetaFromRal(ral) {
  const code = codes.find(x => x.ral === ral);
  if (!code) throw Error(`RAL code ${ral} not found.`);
  return code;
}

function ralToString(ral, locale = 'en') {
  return getMetaFromRal(ral)[locale];
}

function ralToHex(ral) {
  return getMetaFromRal(ral).hex;
}

function hexToRal(hex) {
  const theHex = hex.toUpperCase();
  const code = codes.find(x => x.hex === theHex);
  if (!code) throw Error(`No RAL code matches hex ${hex}.`);
  return code.ral;
}

function stringToRal(string, locale = 'en') {
  const code = codes.find(x => x[locale] === string);
  if (!code) throw Error(`No RAL code matches "${string}" in ${locale} locale.`);
  return code.ral;
}

export {
  getMetaFromRal,
  hexToRal,
  ralToHex,
  ralToString,
  stringToRal,
};
