import { Component,OnInit } from '@angular/core';
import { GetAnimal } from '../../shared/store/animal.action';
import { Select, Store } from '@ngxs/store';
import { ZooState } from '../../shared/store/animal.state';
import { Observable } from 'rxjs';
import { AnimalGet } from '../../shared/api-models/animal-get.model';
@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrl: './zoo.component.scss'
})
export class ZooComponent implements OnInit {
  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.getAnimal();
  }

  @Select(ZooState.getAnimalSelector) getAnimalOb$ : Observable<AnimalGet[]> | undefined;
  getAnimal(){
    this.store.dispatch(new GetAnimal());
    this.getAnimalOb$?.subscribe((res:any)=>{
      console.log(res);
   
    })
  }


}
