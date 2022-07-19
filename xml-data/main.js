



function getAddress(x) {
  const items = x.getElementsByTagName('Firm');
  const Strt1 = x.getElementsByTagName('MainAddr')[0].getAttribute('Strt1');
  const Strt2 = x.getElementsByTagName('MainAddr')[0].getAttribute('Strt2');
  const City = x.getElementsByTagName('MainAddr')[0].getAttribute('City');
  const State = x.getElementsByTagName('MainAddr')[0].getAttribute('State');
  const Cntry = x.getElementsByTagName('MainAddr')[0].getAttribute('Cntry');
  const PostlCd = x.getElementsByTagName('MainAddr')[0].getAttribute('PostlCd');
  const PhNb = x.getElementsByTagName('MainAddr')[0].getAttribute('PhNb');
  const FaxNb = x.getElementsByTagName('MainAddr')[0].getAttribute('FaxNb');

  let addressArr = [Strt1, Strt2, City, State, Cntry, PostlCd, PhNb, FaxNb];

  for (let i = 0; i< addressArr.length; i++) {
    let $p = document.createElement('p');
    $p.textContent = addressArr[i];
    document.querySelector('#address').appendChild($p);
  }
}

function getInfo(x) {
  const items = x.getElementsByTagName('Firm');
  const FirmCrdNb = x.getElementsByTagName('Info')[0].getAttribute('FirmCrdNb');
  const BusNm= x.getElementsByTagName('Info')[0].getAttribute('BusNm');
  const LegalNm = x.getElementsByTagName('Info')[0].getAttribute('LegalNm');
  const UmbrRgstn = x.getElementsByTagName('Info')[0].getAttribute('UmbrRgstn');

  let infoArr = [FirmCrdNb, BusNm, LegalNm, UmbrRgstn];

  for (let i = 0; i < infoArr.length; i++) {
    let $p = document.createElement('p');
    $p.textContent = infoArr[i];
    document.querySelector('#info').appendChild($p);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let file = './xmldata.xml';
  fetch(file)
  .then(response => response.text())
  .then(data => {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, 'application/xml');
    getInfo(xml)
    getAddress(xml)
  });
});
