// import { Client } from "@notionhq/client";
const element = document.getElementById("btn")

element.addEventListener("click", teste);

async function teste() {
    console.log("teste");
    return {};
    // const notion = new Client({
    //     auth: "secret_6OXHw329hzdNQYl1Gb1fjbLgo9KwUNzsrP3ApElp1bA"
    //   });
    
    //   const response = await notion.databases.query({
    //     database_id: "309633b9f084452c85631116486578ef",
    //   });
    
    //   let chartValues = {
    //     label: [],
    //     data: [],
    //   }
    
    //   let items = response.results
  
    //   console.log(items)
      
    //   items.forEach((element, index) => {
    
    //     chartValues.label[index] = element.properties.Pilar.title[0].plain_text
    //     chartValues.data[index] = element.properties.Nível.number
        
    //   });
    
    //   return chartValues;
}