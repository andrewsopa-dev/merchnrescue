const https = require('https');

function checkURL(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({url, statusCode: res.statusCode});
      res.resume();
    }).on('error', (e) => {
      resolve({url, error: e.message});
    });
  });
}

const urls = [
  "https://www.sanmar.com/computer_images/S658/White/S658_White_Model_Front.jpg",
  "https://www.sanmar.com/computer_images/SP14/Black/SP14_Black_Model_Front.jpg",
  "https://www.sanmar.com/computer_images/K500/Navy/K500_Navy_Model_Front.jpg",
  "https://cdn.sanmar.com/medias/sys_master/images/h2f/h51/30952037646366/624Wx724H_6522_White-0-S658WhiteModelFront3/624Wx724H-6522-White-0-S658WhiteModelFront3.jpg",
  "https://cdnp.sanmar.com/medias/sys_master/images/ha2/h95/30951924932638/624Wx724H_5838_LtGray-0-SP14LtGrayModelFront3/624Wx724H-5838-LtGray-0-SP14LtGrayModelFront3.jpg",
  "https://cdnp.sanmar.com/medias/sys_master/images/hb0/h4d/19699938959390/624Wx724H_267_Navy-0-K500NavyModelFront/624Wx724H-267-Navy-0-K500NavyModelFront.jpg"
];

async function run() {
  for (let u of urls) {
    let r = await checkURL(u);
    console.log(r);
  }
}
run();
