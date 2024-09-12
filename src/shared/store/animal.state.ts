import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AnimalGet } from "../api-models/animal-get.model";
import { inject, Injectable } from "@angular/core";
import { GetAnimal } from "./animal.action";
import { ZooService } from "../Services/zoo.service";
import { tap } from "rxjs";


export interface ZooStateModel {
  GetAnimal : AnimalGet[];
}

@State<ZooStateModel>({
    name : 'Zoo',
    defaults : {
      GetAnimal : []
    }
})

@Injectable()

export class ZooState {

  constructor(private zooService : ZooService){}
   @Selector()
   static getAnimalSelector(state :  ZooStateModel){
      return state.GetAnimal;
   }

   @Action(GetAnimal)
   getAnimalStateAction(ctx : StateContext<ZooStateModel>){
      return this.zooService.getAnimalService().pipe(
        tap((res : any) => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            GetAnimal : res
          })
        }))
   }
}