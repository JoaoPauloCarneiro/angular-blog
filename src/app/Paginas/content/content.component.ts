import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contenttitle: string = "Em Construção"
  contenconteudo: string = "Ainda haverá melhoras no blog Futuramente"
  fotoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcd3xBx0ZvWNUXXE0CRtxacUgrs3GD6dyNjHuZwwLXpw&s"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
      )
  }
  setValuesToComponent(id:string | null){
      const result = dataFake.filter(
                              article => article.id == id) [0]


        this.contenttitle = result.title
        this.contenconteudo = result.descricao
        this.fotoCover = result.fotoCover


  }

}
