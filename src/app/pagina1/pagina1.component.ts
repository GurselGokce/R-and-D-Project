import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {


  data : any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            //label: 'Wind energie gemeten',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        // {
        //     label: 'Wind energie voorspelt',
        //     data: [28, 48, 40, 19, 86, 27, 90],
        //     fill: false,
        //     borderColor: '#565656'
        // }
    ]
}

options : any ={
    legend: {
        position: 'bottom'
    }
};

  constructor() { 

   
}


  ngOnInit() {
  }

}
