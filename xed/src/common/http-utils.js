import axios from 'axios';

export const $http = axios.create({
  withCredentials: true
});

export const get = (url, callback) => {
  return $http.get(url)
    .then(result => {
      var res = result.data;
      if (res.code >= 0) {
        var data = res.data || true;
        callback(data);
      } else {
        // chua authen thi da ra trang login
        callback(null);
      }
    }).catch(e => {
      callback(null);
    });
}

export const post = (url, params, callback) => {
  $http.post(url + "&" + jQuery.param(params)).then(result => {
    var res = result.data;
    if (res.code >= 0) {
      var data = res.data || true;
      callback(data);
    } else {
      // chua authen thi da ra trang login
      callback(null);
    }
  }).catch(e => {
    callback(null);
  });
}
