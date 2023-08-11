function myfunction(){
    let x = document.getElementById('projects')
    let y = document.getElementById('about')
    if(x.style.display === 'flex'){
      x.style.display = "none";
    }

    else{
      x.style.display = "flex"
      y.style.display = "none"
    }

    if(x.style.display === 'none'){
      y.style.display = "contents"
    }
  }