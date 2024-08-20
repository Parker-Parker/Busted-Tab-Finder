console.log("YEETO_BURRITO_2")
let currenttab = null;


const url = document.URL
let h1s = document.getElementsByTagName("h1")

const makeMDLink = (title, url) => {

  const md_link = "\n[" + title +"]"+"("+url+")";
  navigator.clipboard.writeText(md_link); //this requires clipboard permission

}

if (h1s.length > 0) {
  makeMDLink(h1s[0].innerText, url)
}
