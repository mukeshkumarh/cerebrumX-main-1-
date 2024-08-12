import { Component,  ElementRef, HostListener, Renderer2} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-device',
  templateUrl: './manage-device.component.html',
  styleUrls: ['./manage-device.component.css'],
})
export class ManageDeviceComponent  {
  private dropdownMenu!: HTMLElement;
  private dropdownMenu2!: HTMLElement;
  private currentlyOpenDropdown: string | null = null;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.dropdownMenu = this.elRef.nativeElement.querySelector('#dropdownMenu');
    this.dropdownMenu2 = this.elRef.nativeElement.querySelector('#dropdownMenu2');
  }
  allChecked: boolean = false;

  headers: string[] = [
    'VIN',
    'Dongle Id',
    'Device Id',
    'Manufacturing Date',
    'Shipment Date',
    'Activation Date',
    'Country',
    'Status'
  ];

  data: any[] = [
    {
        "id": 100004,
        "deviceId": "123456789999111",
        "dongleNumber": "VA3105240001123456789999111",
        "connectedStatus": "MAPPED",
        "pluggedInStatus": "NOT_CONNECTED",
        "firmwareVersion": "010102",
        "manufacturedDate": "2024-05-31",
        "shipmentDate": null,
        "imeiNo": "123789987321111222",
        "createdBy": "nishant.chauhan@cerebrumx.ai",
        "creationDate": "2024-07-30T12:12:16.764365",
        "updatedBy": null,
        "modifiedDate": "2024-07-30T12:12:16.764365"
    },
    {
        "id": 100005,
        "deviceId": "123456789999992",
        "dongleNumber": "VA3105240001123456789999992",
        "connectedStatus": "SHIPPED",
        "pluggedInStatus": "NOT_CONNECTED",
        "firmwareVersion": "010102",
        "manufacturedDate": "2024-05-31",
        "shipmentDate": null,
        "imeiNo": "891234567899999991",
        "createdBy": "nishant.chauhan@cerebrumx.ai",
        "creationDate": "2024-08-06T10:02:40.075589",
        "updatedBy": null,
        "modifiedDate": "2024-08-06T10:02:40.075668"
    },
    {
      "id": 100005,
      "deviceId": "123456789999992",
      "dongleNumber": "VA3105240001123456789999992",
      "connectedStatus": "SHIPPED",
      "pluggedInStatus": "NOT_CONNECTED",
      "firmwareVersion": "010102",
      "manufacturedDate": "2024-05-31",
      "shipmentDate": null,
      "imeiNo": "891234567899999991",
      "createdBy": "nishant.chauhan@cerebrumx.ai",
      "creationDate": "2024-08-06T10:02:40.075589",
      "updatedBy": null,
      "modifiedDate": "2024-08-06T10:02:40.075668"
  },
  {
    "id": 100005,
    "deviceId": "123456789999992",
    "dongleNumber": "VA3105240001123456789999992",
    "connectedStatus": "SHIPPED",
    "pluggedInStatus": "NOT_CONNECTED",
    "firmwareVersion": "010102",
    "manufacturedDate": "2024-05-31",
    "shipmentDate": null,
    "imeiNo": "891234567899999991",
    "createdBy": "nishant.chauhan@cerebrumx.ai",
    "creationDate": "2024-08-06T10:02:40.075589",
    "updatedBy": null,
    "modifiedDate": "2024-08-06T10:02:40.075668"
}
  ];

  toggleAllCheckboxes() {
    this.data.forEach(item => {
      item.checked = this.allChecked;
    });
  }

  checkIfAllSelected() {
    this.allChecked = this.data.every(item => item.checked);
  }


  toggleDropdown(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (target.tagName === 'IMG') {
      const headerRect = target.getBoundingClientRect();
      this.dropdownMenu.style.top = `${headerRect.bottom + window.scrollY}px`;
      this.dropdownMenu.style.left = `${headerRect.left - 90}px`;

      this.dropdownMenu.style.display = this.dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }
  }
  toggleDropdown2(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (target.tagName === 'DIV') {
      const headerRect = target.getBoundingClientRect();
      this.dropdownMenu2.style.top = `${headerRect.bottom + window.scrollY +5}px`;
      this.dropdownMenu2.style.left = `${headerRect.left-5}px`;

      this.dropdownMenu2.style.display = this.dropdownMenu2.style.display === 'block' ? 'none' : 'block';
    }
  }

  selectOption(option: string) {
    console.log(`Selected option: ${option}`);
    // Handle the selected option
    this.dropdownMenu.style.display = 'none'; // Hide dropdown after selection
    this.dropdownMenu2.style.display = 'none';
  }

  

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    // Close dropdowns if the click is outside of them
    if (
      !this.dropdownMenu.contains(target) &&
      !this.dropdownMenu2.contains(target) &&
      !this.elRef.nativeElement.querySelector('.filter_button')?.contains(target) &&
      !this.elRef.nativeElement.querySelector('.add_dongle')?.contains(target)
    ) {
      this.renderer.setStyle(this.dropdownMenu, 'display', 'none');
    this.renderer.setStyle(this.dropdownMenu2, 'display', 'none');
    }
  }

  
}
