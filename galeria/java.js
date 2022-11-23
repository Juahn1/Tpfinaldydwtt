window.onload =  () => {
    let range = document.getElementById("range")
    range.addEventListener("input", function (event) {
      let col_size = event.target.value;
      document.querySelectorAll(".row .col").forEach(col => {
        var size, size_as_text;
        switch (Number(col_size)) {
          case 1:
            size = 2;
            size_as_text = "XS";
            break;
          case 2:
            size = 3;
            size_as_text = "S";
            break;
          case 3:
            size = 4;
            size_as_text = "M";
            break;
          case 4:
            size = 6;
            size_as_text = "L";
            break;
          case 5:
            size = 11;
            size_as_text = "XL";
        }
        col.className = "col col-" + size;
        document.getElementById("size").innerText = size_as_text
      })
    })
  }