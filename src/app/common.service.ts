import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private Https:HttpClient) { }

  submitTicket(Obj:any){
  return  this.Https.post("http://localhost:3000/TicketSystem",Obj)
  }
  Get_All_Ticket(){
    return this.Https.get("http://localhost:3000/TicketSystem")
  }
  Delte_ticket(Id:any){
    return this.Https.delete("http://localhost:3000/TicketSystem/"+Id)
  }

  Edit_ticket(Id:any){
    return this.Https.get("http://localhost:3000/TicketSystem/"+Id)
  }
  Update_ticket(id:any, Obj:any){
    return this.Https.put("http://localhost:3000/TicketSystem/"+id,Obj)
  }
}
