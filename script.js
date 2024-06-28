
var i=0,j=0,k=0,l=0;

var eduDetDiv= document.getElementById("EduDetails");
var addEduBtn= document.getElementById("addEduBtn");


var experienceDetDiv= document.getElementById("ExpDetails");
var addexperienceBtn= document.getElementById("addExperienceBtn");

var skillsInput=document.getElementById("skillsInput");
var addSkillsBtn=document.getElementById("addSkillsBtn");

var langTxtOb=document.getElementById("langTxt");
var addLangBtn=document.getElementById("addLangBtn");



function addEducationButton(){
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
    clone.id="skillsInput" + ++k;
    addSkillsBtn.before(clone);
}
function addLang(){
    let clone=langTxtOb.cloneNode(true);
    clone.id="addLangOb" + ++l;
    addLangBtn.before(clone);
}