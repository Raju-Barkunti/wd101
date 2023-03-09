let namuse=document.getElementById("user-form");
const sanjan1234 =() => {
    let asdfghj= localStorage.getItem("user-entries");
    if(asdfghj){
        asdfghj=JSON.parse(asdfghj);

    }else{
        asdfghj=[];
    }
    return asdfghj;
}

let entryres =sanjan1234();
const sannn1 =() =>{
    const entries=sanjan1234();
    const tableEntries=entries.map((entry) => {
        
        const nameCell= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const row= `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries} </table>`;
    let details=document.getElementById("user-entries");
    details.innerHTML = table;
}
const sannn123 = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    entryres.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(entryres));
    sannn1();
}
namuse.addEventListener("submit",sannn123);
sannn1();    
  function corsan()
  {   let element= document.getElementById("dob");
      const dob = document.getElementById("dob").value;
      let rap=new Date(dob);
      var month = rap.getMonth();
      var day=rap.getDate();
      var sameday = new Date(); 
      var age=parseInt(sameday.getFullYear()) - parseInt(rap.getFullYear());
      if (sameday.getMonth() < month || (sameday.getMonth() === month && sameday.getDate() < day))
      {
          age--;
      }
      let db= age>18 && age <55;
      if(db===false)
      {
          element.setCustomValidity("age should between 18 and 55");
          element.reportValidity("");
      }
      else{
      element.setCustomValidity("");
      }
  }
