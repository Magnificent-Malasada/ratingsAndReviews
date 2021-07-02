module.exports.formatData = (reviewsArr, characteristicsArr) => {
  let metaObj = {
    product_id: reviewsArr[0].product_id,
    ratings: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    },
    recommended: {
      0: 0
    },
    characteristics: {},
    total_reviews: 0
  }

  let formattedReviewArr = [];

  reviewsArr.forEach(data => {
    if (data.recommend === 'true') {
      metaObj.recommended[0] += 1;
    }

    metaObj.ratings[data.rating] += 1;
    metaObj.total_reviews += 1;
    let reviewObj = data;
    reviewObj.photo_url = [data.photo_url];

    formattedReviewArr.push(reviewObj);
  })

  characteristicsArr.forEach(data => {
    let cleanChar = data.characteristic.split('');
    let formatChar = cleanChar.slice(1, cleanChar.length - 1);
    let char = formatChar.join('');

    if (metaObj.characteristics[char] === undefined) {
      metaObj.characteristics[char] = {
        total_score: 0,
        total_characteristic_reviews: 0,
        value: 0
      }
    } else {
      metaObj.characteristics[char].total_score += data.characteristic_value;
      metaObj.characteristics[char].total_characteristic_reviews += 1;
      metaObj.characteristics[char].value = metaObj.characteristics[char].total_score / metaObj.characteristics[char].total_characteristic_reviews;
      metaObj.characteristics[char].id = data.characteristic_id;
    }
  })

  return [formattedReviewArr, metaObj];
}
// {
//   "product_id": "2",
//   "ratings": {
//     2: 1,
//     3: 1,
//     4: 2,
//     // ...
//   },
//   "recommended": {
//     0: 5
//     // ...
//   },
//   "characteristics": {
//     "Size": {
//       "id": 14,
//       "value": "4.0000"
//     },
//     "Width": {
//       "id": 15,
//       "value": "3.5000"
//     },
//     "Comfort": {
//       "id": 16,
//       "value": "4.0000"
//     }
//   }
// }
