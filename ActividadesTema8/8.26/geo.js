let geo = {
  askPermissions: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((permissionStatus) => {
            resolve(permissionStatus.state);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error("Geolocation is not supported"));
      }
    });
  },

  //obtener la  longitud
  getLongitude: function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords.longitude);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  //obtener la latitud
  getLatitude: function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords.latitude);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  //obtener la altitud
  getAltitude: function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords.altitude);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
};

export default geo;
