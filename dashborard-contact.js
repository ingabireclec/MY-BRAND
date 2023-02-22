// window.onload = () => {
//   const contactStoreKey = "queries";
//   const storedContacts = localStorage.getItem(contactStoreKey);
//   let contacts = [];

//   if (storedContacts) {
//     contacts = JSON.parse(storedContacts);
//   }
//   const sections = ["name", "email", "message"];

//   for (const section of sections) {
//     const ul = document.createElement("ul");
//     ul.setAttribute("class", "details");
//     //
//     const topic = document.createElement("li");
//     topic.setAttribute("class", "topic");
//     topic.setAttribute("style", "text-transform:capitalize;");
//     topic.textContent = section;
//     ul.appendChild(topic); // at it to dome
//     // find the corresponding contacts
//     for (const contact of contacts) {
//       //
//       const con = document.createElement("li");
//       con.textContent = contact[section]; //
//       ul.appendChild(con); // at it to dome
//     }
//     //
//     const contactsContainer = document.querySelector(".sales-details");
//     //
//     if (contactsContainer) {
//       // null | undefined
//       contactsContainer.appendChild(ul);
//     }
//   }
// };

window.onload = () => {
  const contactStoreKey = "queries";
  const token = localStorage.getItem("access_token");

  fetch("https://mybrand-backend-war7.onrender.com/api/messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const contacts = data;
      // save contacts array to local storage
      localStorage.setItem(contactStoreKey, JSON.stringify(contacts));

      const sections = ["name", "email", "message"];

      for (const section of sections) {
        const ul = document.createElement("ul");
        ul.setAttribute("class", "details");
        //
        const topic = document.createElement("li");
        topic.setAttribute("class", "topic");
        topic.setAttribute("style", "text-transform:capitalize;");
        topic.textContent = section;
        ul.appendChild(topic); // at it to dome
        // find the corresponding contacts
        if (Array.isArray(contacts)) {
          for (const contact of contacts) {
            //
            const con = document.createElement("li");
            con.textContent = contact[section]; //
            ul.appendChild(con); // at it to dome
          }
        }
        //
        const contactsContainer = document.querySelector(".sales-details");
        //
        if (contactsContainer) {
          // null | undefined
          contactsContainer.appendChild(ul);
        }
      }
    })
    .catch((error) => console.error(error));
};
