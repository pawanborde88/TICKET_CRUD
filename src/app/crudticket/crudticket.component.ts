import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crudticket',
  templateUrl: './crudticket.component.html',
  styleUrl: './crudticket.component.css'
})
export class CrudticketComponent {
  visible: boolean = false;
  AllTickets: any[] = [];
  TicketObj: any = {
    id: 0,
    name: " ",
    email: " ",
    mobile: " ",
    TicketName: " ",
    TicketNo: " ",
    NoOfTickets: " ",
    Ticket_date: " ",
    Ticket_type: " "

  }
  constructor(private http:HttpClient ,private service: CommonService, private messageService: MessageService, private confirmationService: ConfirmationService,) {
    this.GetAllTickets();
  }
  submit_Ticket() {
    this.service.submitTicket(this.TicketObj).subscribe((res: any) => {
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Done', detail: 'Ticket Added ' });
      this.TicketObj = " ";
      this.GetAllTickets();
    })
  }
  GetAllTickets() {
    this.service.Get_All_Ticket().subscribe((res: any) => {
      this.AllTickets = res;
     })
  }
  Delte_ticket(id: any) {
    this.confirmationService.confirm({
      message: 'Are you sure ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.Delte_ticket(id).subscribe((res: any) => {
          this.GetAllTickets();
          this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Done', detail: 'Delete Ticket' });
        })
      },
    })
  }
  edit_ticket(item: any) {
    this.service.Edit_ticket(item).subscribe((Res: any) => {
      this.Addnew();
      this.GetAllTickets();
      this.TicketObj = Res;
    })
  }
  Update_Ticket() {
    this.service.Update_ticket(this.TicketObj.id, this.TicketObj).subscribe((res: any) => {
      this.GetAllTickets();

      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Done', detail: 'Update Ticket' });
    })
  }
  Addnew() {
    this.visible = true;
  }
  opentickets() {
    this.visible = false;
  }
  reset_field() {
    this.TicketObj = " ";
  }
}
