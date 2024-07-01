
var i=0,j=0,k=0,l=0;


var experienceDetDiv= document.getElementById("ExpDetails");
var addexperienceBtn= document.getElementById("addExperienceBtn");

var skillsInput=document.getElementById("skillsInput");
var addSkillsBtn=document.getElementById("addSkillsBtn");

var langTxtOb=document.getElementById("langTxt");
var addLangBtn=document.getElementById("addLangBtn");



function addEducationButton(){
    var eduDetDiv= document.getElementById("EduDetails");
    var addEduBtn= document.getElementById("addEduBtn");
    var clone=eduDetDiv.cloneNode(true);
    clone.id="eduDetDiv" + ++i;
    addEduBtn.before(clone);
}
function addExperienceButton(){
    var clone=experienceDetDiv.cloneNode(true);
    clone.id="experienceDetDiv" + ++j;
    addexperienceBtn.before(clone);
}

function addSkill(){
    var clone=skillsInput.cloneNode(true);
    clone.setAttribute("placeholder"," add Another Skill");
    clone.id="skillsInput" + ++k;
    addSkillsBtn.before(clone);
}
function addLang(){

    let clone=langTxtOb.cloneNode(true);
    clone.setAttribute("placeholder"," add Another Language");
    clone.id="addLangOb" + ++l;
    addLangBtn.before(clone);
}


function generateCv(){
    document.getElementById('nameT').innerHTML=document.getElementById('nameF').value;

    document.getElementById('proffesionT').innerHTML=document.getElementById('proffesionF').value;



    document.getElementById('addressT').innerHTML=document.getElementById('addressF').value;
    
    document.getElementById('phoneT').innerHTML=document.getElementById('phoneF').value;
    
    document.getElementById('emailT').innerHTML=document.getElementById('emailF').value;
    
    

    document.getElementById('summaryT').innerHTML=document.getElementById('summaryF').value;


    
    document.getElementById('schoolNameT').innerHTML=document.getElementById('schoolNameF').value;
    
    document.getElementById('schoolLocationT').innerHTML=document.getElementById('schoolLocationF').value;

    document.getElementById('eduDescT').innerHTML=document.getElementById('eduDescF').value;

    document.getElementById('gradDateT').innerHTML=document.getElementById('gradDateF').value;



    document.getElementById('jobTitleT').innerHTML=document.getElementById('jobTitleF').value;

    document.getElementById('companyT').innerHTML=document.getElementById('companyF').value;

    document.getElementById('startDateT').innerHTML=document.getElementById('startDateF').value;

    document.getElementById('endDateT').innerHTML=document.getElementById('endDateF').value;



    document.getElementById('skillsInputT').innerHTML=document.getElementById('skillsInputF').value;



    document.getElementById('langTxtT').textContent=document.getElementById('langTxtF').value;

    document.getElementById('nav-bar').style.display='none';
    document.getElementById('cTemplate').style.display='none';
    document.getElementById('form-cv').style.display='none';
    document.getElementById('template').style.display='block';
    document.getElementById('printBtn').style.visibility='visible';
    document.getElementById('generateBtn').style.visibility='hidden';
}

function printCv(){

    window.print();
    
}