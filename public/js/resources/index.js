
var viewAllButton = document.getElementById("view-all-button");
var caseStudiesContent = document.getElementById("case-studies-content");
var eachCaseStudy = document.querySelectorAll(".each-case-study-wrapper");
var caseStudyMargin;
var caseStudyWidth;

var firstElementsMarginRight;
var sumOfCaseStudyWidths;

var numOfElementsVisible = 0;

function adjustResponsiveDesign () {

    sumOfCaseStudyWidths = 0;
    caseStudyMargin = 0;
    caseStudyWidth = 0;
    const caseStudiesContentWidth = caseStudiesContent.offsetWidth;

    caseStudiesContent = document.getElementById("case-studies-content");
    eachCaseStudy = document.querySelectorAll(".each-case-study-wrapper");

    eachCaseStudy.forEach(caseStudy => {
        caseStudy.style.marginRight = "auto";
    })

    for (let k = 0; k < caseStudiesContent.childNodes.length; k++) {
        
        caseStudyMargin = window.getComputedStyle(caseStudiesContent.childNodes[k]).marginRight;
        caseStudyWidth = window.getComputedStyle(caseStudiesContent.childNodes[k]).width;

        sumOfCaseStudyWidths += parseInt(caseStudyWidth) + parseInt(caseStudyMargin);

        if (Math.abs(parseInt(caseStudiesContentWidth) - parseInt(sumOfCaseStudyWidths)) < 100) {
            numOfElementsVisible = k + 1;
            
            for (i = 0; i < eachCaseStudy.length; i++) {
                const caseStudy = eachCaseStudy[i];
        
                if ((i+1) % numOfElementsVisible == 0) {
                    caseStudy.style.marginRight = 0;
                    firstElementsMarginRight = window.getComputedStyle(eachCaseStudy[0]).marginRight;
                }
        
                else if ((i+1) > (numOfElementsVisible - 1)) {
                    caseStudy.style.marginRight = firstElementsMarginRight;
                } else {
                    caseStudy.style.marginRight = "auto";
                }
            }
        
            if (numOfElementsVisible === caseStudiesContent.childNodes.length) {
                eachCaseStudy.forEach(caseStudy => {
                    caseStudy.style.marginRight = "60px";
                })
            }
        }
    }
}

window.onload = () => {
    headerListener();
    caseStudiesContent = document.getElementById("case-studies-content");
    eachCaseStudy = document.querySelectorAll(".each-case-study-wrapper");
    viewAllButton = document.getElementById("view-all-button");
    const initialHeightOfCaseStudyContent = caseStudiesContent.offsetHeight;

    if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        ;
    } else {
        adjustResponsiveDesign();
    }

    function expandCaseStudies () {
        if (caseStudiesContent.offsetHeight === initialHeightOfCaseStudyContent) {
            if (caseStudiesContent.classList.contains("revert-height-animation")) {
                caseStudiesContent.classList.remove("revert-height-animation");
            }

            caseStudiesContent.classList.add("increase-height-animation");
            viewAllButton.innerHTML = "View less";

        } else {
            viewAllButton.innerHTML = "View all";
            
            if (caseStudiesContent.classList.contains("increase-height-animation")) {
                caseStudiesContent.classList.remove("increase-height-animation");         
            }
            caseStudiesContent.classList.add("revert-height-animation");
        }
    }

    viewAllButton.addEventListener("click", expandCaseStudies);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/resources/getAll");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const caseStudiesArray = JSON.parse(xhr.response);
                
                document.addEventListener("click" , () => {
                    if (event.target.classList[0] == "each-case-study-wrapper") {
                        const caseStudyName = event.target.childNodes[2].innerHTML
                        caseStudiesArray.forEach(caseStudy => {
                            if (caseStudy.company_name === caseStudyName) {
                                location.href = `/resources/case_studies?id=${caseStudy._id}`;
                            }
                        })
                    }
                    else if (event.target.classList[0] == "case-study-company-industry") {
                        const caseStudyName = event.target.parentNode.childNodes[2].innerHTML
                        caseStudiesArray.forEach(caseStudy => {
                            if (caseStudy.company_name === caseStudyName) {
                                location.href = `/resources/case_studies?id=${caseStudy._id}`;
                            }
                        })
                    }
                    else if (event.target.classList[0] == "case-study-company-name") {
                        const caseStudyName = event.target.innerHTML
                        caseStudiesArray.forEach(caseStudy => {
                            if (caseStudy.company_name === caseStudyName) {
                                location.href = `/resources/case_studies?id=${caseStudy._id}`;
                            }
                        })
                    }
                    else if (event.target.classList[0] == "case-study-image") {
                        const caseStudyName = event.target.parentNode.childNodes[2].innerHTML
                        caseStudiesArray.forEach(caseStudy => {
                            if (caseStudy.company_name === caseStudyName) {
                                location.href = `/resources/case_studies?id=${caseStudy._id}`;
                            }
                        })
                    }
                })
            } else {
                alert("An error occured please try again.")
            }
        }
    }
    xhr.send();
}

if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
    ;
} else {
    window.onresize = adjustResponsiveDesign;
}