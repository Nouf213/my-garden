'use strict';

let flowers=['tulip.jpeg','sunflower.jpeg','roses.jpeg','peonies.jpeg','orchids.jpeg','gardenias.jpeg','alstroemerias.jpeg'];
let ArrFlowers=[];
let Table=document.getElementById( 'Ftable' );
let Elements=document.getElementById( 'table' );

Table.appendChild( Elements );

function Flowers( name,category,season ){
  this.name=name;
  this.category=category;
  this.season=season;
  ArrFlowers.push( this );
}

function handleSubmit( event ){
  event.preventDefault();

  let name=event.target.name.value;
  let category=event.target.category.value;
  let season=event.target.season.value;

  new Flowers( name,category,season );

  localStorage.setItem( 'Flowers', JSON.stringify( ArrFlowers ) );

  render();

}
// console.log( handleSubmit );
function render(){

  Elements=document.createElement( 'table' );
  Table.appendChild( Elements );

  for( let i=0;i<flowers.length;i++ ){
    let flower=document.createElement( 'tr' );
    Elements.appendChild( 'flower' );

    let td=document.createElement( 'td' );
    let image=document.createElement( 'image' );
    image.setAttribute( 'src',ArrFlowers[i].category );

    td.appendChild( image );
    flower.appendChild( td );

    let td1=document.createElement( 'td' );
    flower.appendChild( td1 );
    td1.textContent='Flower Name: ' + ArrFlowers[i].name +ArrFlowers[i].category;
  }

}
handleSubmit();
