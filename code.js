// UI
const form = document.querySelector(".form-create-nft");

// file.addEventListener("change", function () {
//   console.log(this.files);
//   const reader = new FileReader();
//   let data = reader.addEventListener("load", () => {
//     return reader.result;
//   });
//   reader.readAsDataURL(this.files[0]);
//   console.log(data);
// });
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = document.querySelector("#upload");

  const nameNFT = document.querySelector("#name").value;
  const externallink = document.querySelector("#externallink").value;
  const desc = document.querySelector("#desc").value;
  const collectible = document.querySelector("#collectible").value;
  const switchcheck = document.querySelector("#switch").value;
  const supply = document.querySelector("#supply").value;
  const blockchain = document.querySelector("#blockchain").value;

  const reader = new FileReader();
  let data = reader.addEventListener("load", () => {
    return reader.result;
  });
  reader.readAsDataURL(this.files[0]);
  console.log(data);
  // console.log(imgdata);
  const nftData = {
    filepath: data,
    nameofnft: nameNFT,
    eLink: externallink,
    desctext: desc,
    colect: collectible,
    togggle: switchcheck,
    howmuch: supply,
    chain: blockchain,
  };
  console.log(file);
  // window.localStorage.setItem("nftdata", JSON.stringify(nftData));
  //   console.log(file);
  //   console.log(nameNFT);
  //   console.log(externallink);
  //   console.log(desc);
  //   console.log(collectible);
  //   console.log(switchcheck);
  //   console.log(supply);
  //   console.log(blockchain);
});

// function getLocalStorageData() {
//   const nftrecivedata = window.localStorage.getItem("nftdata");
//   const acutaldta = JSON.parse(nftrecivedata);
//   console.log(acutaldta);
// }

// const file = document.querySelector("#upload");
// function dataUrlImage() {
//   //   let dataIOutput = "";

//   const fob = file.addEventListener("change", function () {
//     console.log(this.files);
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//       let dataIOutput = reader.result;
//     });
//     // return dataIOutput;
//     // console.log("Ad, ", dataIOutput);

//     reader.readAsDataURL(this.files[0]);
//   });
//   return fob;
//   // console.log(dataIOutput);
// }

// dataUrlImage();
