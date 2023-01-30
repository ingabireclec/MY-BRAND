window.onload = () => {
  const contactStoreKey = "queries";
  const storedContacts = localStorage.getItem(contactStoreKey);
  let contacts = [];

  if (storedContacts) {
    contacts = JSON.parse(storedContacts);
  }
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
    for (const contact of contacts) {
      //
      const con = document.createElement("li");
      con.textContent = contact[section]; //
      ul.appendChild(con); // at it to dome
    }
    //
    const contactsContainer = document.querySelector(".sales-details");
    //
    if (contactsContainer) {
      // null | undefined
      contactsContainer.appendChild(ul);
    }
  }
};
