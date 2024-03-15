import { Component, OnInit } from '@angular/core';
import { StatesBrazilService } from '../../sevices/states-brazil.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { StateBrazil } from '../../types/state.type';
import { BrazilService } from '../../sevices/brazil.service';
import { brazilType } from '../../types/brazil.type';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ChartModule
  ],
  providers: [
    StatesBrazilService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public states: Array<{ uid: number, uf: string, state: string, cases: number, deaths: number, suspects: number, refuses: number }> = []

  public brazilData: brazilType = {
    data: {
      country: "", cases: 0, confirmed: 0, deaths: 0, recovered: 0, updated_at: ""
    }
  }

  public dataChart: any;
  public chartOptions: any;

  constructor(private service: StatesBrazilService, private dataBrazil: BrazilService) {}

  ngOnInit(): void {
    this.getStatesBrazil()
    this.getBrazilData()

    this.dataChart = {
      labels: ["Casos Positivos", "Mortes"],
      datasets: [
        {
          data: [this.brazilData.data.confirmed, this.brazilData.data.deaths],
          backgroundColor: [
            '#609af8',
            '#4ffa7b'
          ]
        }
      ]
    }
  }

  getStatesBrazil() {
    this.service.getStatesBrazil().subscribe({
      next: (data) => {
        this.states = data.data
        console.log(this.states)
      }
    })
  }

  getBrazilData() {
    this.dataBrazil.getBrazil().subscribe({
      next: (dataBrazil) => {
        this.brazilData.data = dataBrazil.data
        console.log(this.brazilData.data)
      }
    })
  }

}
