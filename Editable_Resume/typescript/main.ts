const Form = document.getElementById("resume")as HTMLFormElement;
const cvShowcaseElement = document.getElementById("Curriculum-Vitae")as HTMLDivElement;

Form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById("name")as HTMLInputElement).value
    const email = (document.getElementById("email")as HTMLInputElement).value
    const school = (document.getElementById("school")as HTMLInputElement).value
    const degree = (document.getElementById("degree")as HTMLInputElement).value
    const job = (document.getElementById("job")as HTMLInputElement).value
    const company = (document.getElementById("company")as HTMLInputElement).value
    const skills = (document.getElementById("skills")as HTMLInputElement).value


    const profileHTML = `
    <h2><b>Elite Resume</b></h2>
    <br/>
    <h3>Personal Information</h3>
    <p>Name: <span contenteditable = "true">${name}</span></p>
    <p>Email: <span contenteditable = "true">${email}</span></p>


    <h3>Education</h3>
    <p>School:<contenteditable = "true"> ${school}</p>
    <p>Degree:<contenteditable = "true">${degree}</p>




    <h3>Experience</h3>
    <p>Job-Title: <contenteditable = "true">${job}</p>
    <p>Company: <contenteditable = "true">${company}</p>


     <h3>Skills</h3>
    <p>Skills: <contenteditable = "true">${skills}</p>

    `;

    if(cvShowcaseElement){
        cvShowcaseElement.innerHTML = profileHTML
    }



})
