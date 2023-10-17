// Challange 1
window.onload = function () {
  document.getElementById('user').innerHTML = 'Nasir';
};

// Challenge 2
document.getElementById('btn-click').addEventListener('click', function colorchange() {
    document.getElementById('btn-click').style.backgroundColor = 'green';
  });

  // Challange 3
  
  function makeSentence() {
    var x = document.getElementById("noun").value
    var y = document.getElementById("verb").value
    var z = document.getElementById("adverb").value
    document.getElementById("statement").innerHTML = x+" "+y+" "+z;
  }
  document.getElementById("build-button").addEventListener('click', makeSentence)

  // Challange 4
  document.getElementById("grandparent").addEventListener("click", e =>{
    console.log("Granparent clicked")
  }, {capture: true})
  document.getElementById("parent").addEventListener("click", e =>{
    console.log("Parent clicked")
  }, {capture: true})
  document.getElementById("child").addEventListener("click", e =>{
    console.log("Child clicked")
  }, {capture: true})

  // Challenge 5
  document.getElementById("category").addEventListener("click", (e) => {
    console.log(e.target.id)
  })