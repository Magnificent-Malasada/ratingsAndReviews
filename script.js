import http from 'k6/http';
import { sleep } from 'k6';

//get reviews and meta
export default function () {
  http.get('http://localhost:3002/reviews/product_id=25178');
  sleep(1);
}

//mark review as helpful
// export default function () {
//   http.patch('http://localhost:3002/reviews/145044/helpful');
//   sleep(1);
// }

//report review
// export default function () {
//   http.put('http://localhost:3002/reviews/145045/report');
//   sleep(1);
// }

//post review
// export default function () {
//   var url = 'http://localhost:3002/reviews/product_id=25178';
//   var payload = JSON.stringify({
//     product_id: 25178,
//     rating: 5,
//     summary: 'Best product ever!',
//     body: 'The lasers went pew pew and were super fast to reload! It made my job protecting the galaxy as the leader of the Guardians of the Galaxy way easier! P.S. I\'m the leader, not Thor.',
//     recommend: true,
//     name: 'StarLord',
//     email: 'starlord@bestever.com',
//     photos: [],
//     characteristics: {
//       84272: 5
//     }
//   });

//   var params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   http.post(url, payload, params);
//   sleep(1);
// }