
const  generarLetra = () =>{
  let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
  let numero = (Math.random()*15).toFixed(0);
    return letras[numero];
  }

    
  export const colorHEX = () =>{
    let coolor = "";
    for(let i=0;i<6;i++){
      coolor = coolor + generarLetra() ;
    }
    return "#" + coolor;
  }
  


  export const randomNumber = (number) => {
    return Math.floor(Math.random() * number)
}