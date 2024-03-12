/*-----------colorCode Array For Categories------------------- */
const colorCode = [
  {
    cate: ["Automation"],
    color: "#8049f5",
    bg: "#c9b1fa",
  },

  {
    cate: ["E-commerce"],
    color: "#f58c33",
    bg: "#f5decb",
  },

  {
    cate: ["B2B", "Transportation"],
    color: "#f0c02b",
    bg: "#f5eeda",
  },

  {
    cate: ["SAAS", "Marketplace"],
    color: "#05eb78",
    bg: "#dff5e9",
  },
  {
    cate: ["Mobile", "Finance"],
    color: "#c4b702",
    bg: "#fdffde",
  },
  {
    cate: ["B2C", "Technology"],
    color: "#fa7602",
    bg: "#f7dec8",
  },
  {
    cate: ["Webservice"],
    color: "#05c0f5",
    bg: "#c6ebf5",
  },

  {
    cate: ["Publishing"],
    color: "#de28b1",
    bg: "#f7cded",
  },
];
let arrayOfData = [...data];
/*----------------------- Function To Show Data--------------------*/
let tableBody = document.querySelector("tbody");

function showTableData(dataArr) {
  tableBody.innerHTML = "";

  // Show no data found if query is not available
  if (dataArr.length == 0) {
    tableBody.innerHTML = `<tr class="error">   
    <td colspan="6">No data found</td>
    </tr>`;
    return 0;
  }

  // Loop through dataArr to create element and show data
  dataArr.map((ele) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="brandNames">
        <div>
            <input onclick=checkboxHandler(${ele.id})
            ${ele.isChecked ? "checked" : null} 
            type="checkbox" name="" id="">
            <img src=${ele.logo} alt="">
            <p>${ele.companyName}</p>
        </div>
    </td>
    <td class="description">${ele.desc}</td>
    <td class="members">
    <div>
${ele.members
  .map((imgLink, idx) => {
    return `<img style="left:-${idx * 10}px" src=${imgLink} alt=""></img>`;
  })
  .join("")}
          
  
</div>
    
    </td>
   <td class="category">
   <div>
  ${ele.category
    .map((e) => {
      return `<span style="${
        colorCode.some((obj) => obj.cate.includes(e))
          ? `background-color: ${
              colorCode.find((obj) => obj.cate.includes(e)).bg
            }; color: ${colorCode.find((obj) => obj.cate.includes(e)).color}`
          : "color: black"
      }">
        ${e}
      </span>`;
    })
    .join("")}</div>
    </td>

    <td class="tags">
    <div>
     ${ele.tags.map((e) => `<span>${e}</span>`).join("")}
     </div>
     </td>

    <td>${ele.meeting}</td>
                  
    `;
    tableBody.appendChild(tr);
  });
}

showTableData(data); // Onload function Calling with Default Data

/* --Function to Manipulate data in Array of Data when checkBox clicked */
function checkboxHandler(id) {
  // console.log(id);
  console.log(arrayOfData);
  let modifiedData = arrayOfData.map((ele) => {
    if (ele.id == id)
      ele.isChecked ? (ele.isChecked = false) : (ele.isChecked = true);

    return ele;
  });

  countOfSelection(modifiedData);
  arrayOfData = [...modifiedData];
}

/*---------------- Function to Show Count Of Selection----------- */
let count = 0;
function countOfSelection(modifiedData) {
  count = 0;
  modifiedData.forEach((ele) => {
    if (ele.isChecked == true) count++;
  });
  console.log(count);
  document.querySelector(".selected").innerText = count;
}

countOfSelection(data);

/* --------------------Search Functionality --------------------- */

document.querySelector(".searchbar input").addEventListener("input", (e) => {
  let filteredData = data.filter((ele) => {
    return ele.companyName
      .toLowerCase()
      .startsWith(e.target.value.toLowerCase());
  });
  showTableData(filteredData);
  arrayOfData = [...filteredData];
});

/*---------------------Sort By Brand Name---------------------------- */
document.querySelector(".sort").addEventListener("click", () => {
  let tempArr = [...data];
  tempArr.sort((a, b) => a.companyName.localeCompare(b.companyName));
  showTableData(tempArr);
  arrayOfData = [...tempArr];
});

/*--------Function To Get all Tags and Append in Select Tag------ */
let tags = document.getElementById("tags");
function getAllTags() {
  let tagArr = [];
  data.forEach((ele) => {
    ele.tags.forEach((tag) => {
      if (!tagArr.includes(tag)) {
        tagArr.push(tag);
      }
    });
  });
  tagArr.forEach((ele) => {
    let opt = document.createElement("option");
    opt.setAttribute("value", ele);
    opt.innerText = ele;
    tags.appendChild(opt);
  });
}
getAllTags();

/*-------------Event On Tags DropDown Menu--------------- */
tags.addEventListener("click", (e) => {
  if (!e.target.value == "") {
    let filteredByTags = arrayOfData.filter((ele) =>
      ele.tags.includes(e.target.value)
    );
    showTableData(filteredByTags);
    countOfSelection(filteredByTags);
  } else {
    showTableData(arrayOfData);
  }
});

/* Get All Brands */
let brand = document.getElementById("brand");

/*--------Function To Get all Brand Name and Append in Select Tag------ */
function getAllBrands() {
  data.forEach((ele) => {
    let opt = document.createElement("option");
    opt.setAttribute("value", ele.companyName);
    opt.innerText = ele.companyName;
    brand.appendChild(opt);
  });
}
getAllBrands();

/*-------------Event On AllBrand DropDown Menu--------------- */

brand.addEventListener("click", (e) => {
  if (e.target.value != "") {
    let filteredByBrand = arrayOfData.filter(
      (ele) => ele.companyName.toLowerCase() == e.target.value.toLowerCase()
    );
    showTableData(filteredByBrand);
    // arrayOfData = [...filteredByBrand];
    countOfSelection(filteredByBrand);
  } else {
    showTableData(arrayOfData);
    countOfSelection(data);
  }
});


/*-----------------Toggle Show Sub - Folder-------------------------*/
const subFolders = document.querySelectorAll(".subFolders");
document.querySelectorAll(".downUpArrow").forEach((ele, idx) => {
  ele.addEventListener("click", (e) => {
    if (e.target.classList[1] == "fa-caret-down") {
      e.target.parentElement.children[1].style.display = "block";
      e.target.parentElement.children[0].style.display = "none";
      subFolders[idx].style.display = "block";
    } else {
      e.target.parentElement.children[1].style.display = "none";
      e.target.parentElement.children[0].style.display = "block";
      subFolders[idx].style.display = "none";
    }
  });
});

/* -----function To Delete selected Data -------------------------- */
document.querySelector(".delete").addEventListener("click", () => {
  if (count == 0) {
    alert("Please select to delete");
    return 0;
  }
  console.log(arrayOfData);
  let filteredData = arrayOfData.filter((ele) => {
    return !ele.isChecked;
  });
  console.log(filteredData);
  showTableData(filteredData);
  countOfSelection(filteredData);
  arrayOfData = [...filteredData];
});

/*----------------close delete selected archieve -----------*/
let selectedAndDeleteCotainer = document.querySelector(".selectedAndDelete");
let settings = document.querySelector(".fa-gear");
// selectedAndDeleteCotainer.style.display = "flex";
document.querySelector(".fa-xmark").addEventListener("click", () => {
  selectedAndDeleteCotainer.style.display = "none";
  settings.classList.add("animate__heartBeat");
});

settings.addEventListener("click", () => {
  // console.log(selectedAndDeleteCotainer.style.display );
  if (selectedAndDeleteCotainer.style.display == "flex") {
    selectedAndDeleteCotainer.style.display = "none";
  } else {
    selectedAndDeleteCotainer.style.display = "flex";
  }
  settings.classList.remove("animate__heartBeat");
});
