import { Component,OnInit } from '@angular/core';
import { RoofstockService } from '../Service/roofstock.service';
import { ObjInformation } from "../Interface/properties";
import { PropertyDB } from '../Interface/PropertyDB';
import Swal from 'sweetalert2'
import { MyDBService } from '../Service/MyDB.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit   {

  information: ObjInformation
  cargando: Boolean

  informationMyDB: PropertyDB[]
  cargandoMyDB: Boolean

  constructor( public roofstockService: RoofstockService, public myDBService: MyDBService) { 


  }


  ngOnInit() {



    // API
    this.cargando=true;
      this.roofstockService.getInfo().subscribe(resp => {
        this.information = resp;
        console.log(this.information);
        this.cargando=false;
      });

    //MY DB
    this.LoadMyDBTable();



  }

  LoadMyDBTable(){
    this.cargandoMyDB=true;
    this.myDBService.getProperties().subscribe(resp => {
      console.log('mydb',resp)
      this.informationMyDB = resp;
      this.cargandoMyDB=false;
    });
  }

  ValidateId(id){
    if(this.informationMyDB === undefined)
    return true;


    return this.informationMyDB.filter(e => e.id === id).length > 0
  }

  SaveInformation(id){
   
    const info = this.information.properties.find(element => element.id === id);
   
    const Property : PropertyDB= {
      id:info.id,
      address:  `${info.address.address1}, ${info.address.city}` ,
      yearBuilt: info.physical === null  ? null : info.physical.yearBuilt ,
      listPrice: info.financial === null  ? null :  info.financial.listPrice,
      monthlyRent:info.financial === null  ? null :  info.financial.monthlyRent
    };

    
    this.myDBService.addProperty(Property).subscribe(resp => {
     
      if(resp){
        Swal.fire('Saved!', '', 'success').then(()=>{
          this.LoadMyDBTable();
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    });

    
  
  }



}

