
// verify we're at correct page
// TODO support english version

console.log('Running extension');

if ( document.getElementsByClassName('textTitle')[0].innerText == "Studijní výsledky" ){

  const tbody = document.getElementsByClassName('table')[0].children[0];
  Array.from(tbody.children).forEach((item, i) => {

    if ( item.classList.contains('tableRow1') || item.classList.contains('tableRow2') ) {
      console.log(item, item.children[10]);
      // hardcoded column index

      let imgSrc = null;
      switch(item.children[10].innerText){
        case 'A': imgSrc = "media/A_vagner.png"; break;
        case 'B': imgSrc = "media/B.png"; break;
        case 'C': imgSrc = "media/C_guth.png"; break;
        case 'D': imgSrc = "media/D_harold.png"; break;
        case 'E': imgSrc = "media/E_vagner.png"; break;
        case 'F': imgSrc = "media/F_noguth.png"; break;
      }
      if (imgSrc){
        console.log(imgSrc,browser.extension.getURL(imgSrc));
        const html = "<img class=\"CustomGrade\" src=\"" + browser.extension.getURL(imgSrc) + "\">";
        console.log(html);
        item.children[10].innerHTML = html;
      }

      //tbody.children[11].children[10].innerText

    }
  });

}
