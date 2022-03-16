var data = [];
var index = 0;

const getData = async () => {
  await fetch("https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5")
    .then((response) => {
      return response.json();
    })
    .then((actualData) => {
      data = actualData;
      console.log(actualData);
      displayData(actualData);
    })
    .catch((error) => {
      console.log(error);
    });
};

const displayData = (userData) => {
  console.log(userData);

  displayDetails(data[0]);

  for (let i = 0; i < userData.length; i++) {
    let first_name = userData[i]?.first_name;
    let last_name = userData[i]?.last_name;
    let username = userData[i]?.username;
    let employment_Title = userData[i]?.employment.title;
    let location = userData[i]?.address.country;

    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("id", userData[i].id);
    card.addEventListener("click", function () {
      index = i;
      displayDetails(data[index]);
    });

    let section1 = document.createElement("div");
    section1.className = "section-1";

    let section2 = document.createElement("div");
    section2.className = "section-2";

    let fullname = document.createElement("div");
    fullname.className = "name";

    let firstName = document.createElement("h4");
    firstName.id = "firstName";
    firstName.innerHTML = first_name;
    let lastName = document.createElement("h4");
    lastName.id = "lastName";
    lastName.innerHTML = last_name;

    fullname.appendChild(firstName);
    fullname.appendChild(lastName);

    section1.appendChild(fullname);
    card.appendChild(section1);

    let x = document.createElement("i");
    x.className = "fa fa-trash-o";
    x.id = "icon-id";
    x.setAttribute("aria-hidden", "true");
    x.addEventListener("click", function (e) {
      let id = card.getAttribute("id");

      deleteUser(id);
    });

    section2.appendChild(x);

    card.appendChild(section2);

    let userDetails = document.createElement("div");
    userDetails.className = "user-details";

    let userName = document.createElement("p");
    userName.id = "username";
    userName.innerHTML = username;

    let employmentTitle = document.createElement("p");
    employmentTitle.id = "employment-title";
    employmentTitle.innerHTML = employment_Title;

    let country = document.createElement("p");
    country.id = "country";
    country.innerHTML = location;

    userDetails.appendChild(userName);
    userDetails.appendChild(employmentTitle);
    userDetails.appendChild(country);

    section1.appendChild(userDetails);

    document.getElementById("data-list").appendChild(card);
  }
};

const displayDetails = (userData) => {
  let greetMessage = document.getElementById("greet-message");

  currentTime = new Date();

  currentTime.getHours() < 12
    ? (greetMessage.innerHTML = `<b>Good Morning ${userData.first_name} !</b>`)
    : currentTime.getHours() < 17
    ? (greetMessage.innerHTML = `<b>Good Afternoon ${userData.first_name} !</b>`)
    : (greetMessage.innerHTML = `<b>Good Evening ${userData.first_name} !</b>`);

  document.getElementById("myImg").src = userData.avatar;
  document.getElementById("id").innerHTML = userData.id;
  document.getElementById("uid").innerHTML = userData.uid;
  document.getElementById("password").innerHTML = userData.password;
  document.getElementById("first_name").innerHTML = userData.first_name;
  document.getElementById("last_name").innerHTML = userData.last_name;
  document.getElementById("username").innerHTML = userData.username;
  document.getElementById("email").innerHTML = userData.email;
  document.getElementById("gender").innerHTML = userData.gender;
  document.getElementById("phone-number").innerHTML = userData.phone_number;
  document.getElementById("social-insaurance-number").innerHTML =
    userData.social_insurance_number;
  document.getElementById("dob").innerHTML = userData.date_of_birth;
  document.getElementById("employment-title").innerHTML =
    userData.employment.title;
  document.getElementById("city").innerHTML = userData.address.city;
  document.getElementById("state").innerHTML = userData.address.state;
  document.getElementById("country").innerHTML = userData.address.country;
  document.getElementById("credit-card").innerHTML =
    userData.credit_card.cc_number;
  document.getElementById("subscription-plan").innerHTML =
    userData.subscription.plan;

  if (document.documentElement.clientWidth <= 1400) {
    scrollToDetails();
  }
};

const scrollToDetails = () => {
  let current_position = document.getElementById("details");
  let newPostion = current_position.getBoundingClientRect();
  console.log(newPostion);
  window.scrollTo(0, newPostion.bottom);
};

const deleteUser = (id) => {
  let text = `Are you sure you want to delete this user?`;
  if (confirm(text) == true) {
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].id == id) {
    //     alert(data[i].first_name + " Details Deleted");
    //     data.splice(i, 1); 
    //     console.log(data);
    //   }
    // }

    // let newDataArray = data.filter(function(user){
    //   return user.id != id
    // })

    // console.log(newDataArray);
    document.getElementById(id).remove();

    //  displayData(newDataArray);
  } else {
    alert("Operation Cancelled!");
  }
};
