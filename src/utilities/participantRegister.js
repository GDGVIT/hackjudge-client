import axios from "axios";

const participantRegister = (userEmail, userPassword) => {
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: false,
  };

  const config = {
    method: "post",
    url: "{{URL}}/auth/signup",
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });


};

export default participantRegister;
