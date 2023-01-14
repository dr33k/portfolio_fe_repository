import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/interfaces/icon';
import { Skill } from 'src/interfaces/skill';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'portfolio-fe';
  skills!:Skill[];
  skill!:Skill;
  secondary_skill_tuples!:[string, string][];
 
  sliding_cards:HTMLCollectionOf<Element>|undefined;

  constructor(private appService: AppService){
    this.appService = appService;

    //Fetch both primary and secondary skill data
    this.skills = this.fetch_skills();
    this.secondary_skill_tuples = this.fetch_secondary_skills();

      }

  ngOnInit(){
    const skills_length:number = this.skills.length;
    var counter: number = -1;
    setInterval(()=>{
      this.skill = this.skills[++counter < skills_length ? counter: counter=0];
    },3000);
  }

  fetch_skills(): Skill[]{
    return this.appService.get_skills()
  }
  fetch_secondary_skills():[string,string][]{
    return this.appService.get_secondary_skills()
  }

  // pause_interval_1(): void{
  //   this.pause_skills_animation = true;
  // }
  // play_interval_1(): void{
  //   this.pause_skills_animation = false;
  // }
}
