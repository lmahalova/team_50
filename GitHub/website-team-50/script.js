document.addEventListener('DOMContentLoaded',function (){
    const memHeadings=document.querySelectorAll('h3');
    const memDetails=document.querySelectorAll('tr:nth-child(3) ul');

    memDetails.forEach(function (detail){
        detail.style.display='none';
    });
    //click event listeners to team member headings
    memHeadings.forEach(function (heading,index){
        heading.addEventListener('click',function (){
            // hide team member details when team member is clicked
            memDetails.forEach(function(detail){
                detail.style.display='none';
            });

            // clicked-display details
        memDetails[index].style.display='block';
        });
    });

   
    var links=document.querySelectorAll('section ul li a');
    links.forEach(function(link){
        link.addEventListener('click',function (event){
            event.preventDefault();

            var linkText=link.innerText;
            openLink(link.getAttribute('href'),linkText);
        });
    });
});

//project.html-in a new page or same page?
function openLink(link,linkText){
    var option=prompt('Do you want to open '+linkText+"'s profile in a new page? (yes/no)");
    if (option && option.toLowerCase()==='yes'){
        window.open(link,'_blank');
    }if (option && option.toLowerCase()==='no'){
        window.location.href = link;
    }
}
