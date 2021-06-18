//Input: address = "255.100.50.0"
//Output: "255[.]100[.]50[.]0"

const defangIPaddr = str => {
    let new_address = "";
     for (let i of address) {
         new_address += ((i === ".") ? '[.]' : i)

     }
     return new_address
}
