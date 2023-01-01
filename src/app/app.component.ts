import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/interfaces/icon';
import { Skill } from 'src/interfaces/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-fe';

  skills!:Skill[];
  skill!:Skill;

  secondary_skill_tuples!:[string, string][];

  width: number = 100;
  height: number = 100;

  ALT: string = 'Icon by Iconify';

  constructor(){
    this.skills = this.fetch_skills();
    this.secondary_skill_tuples = this.fetch_secondary_skills()
  }

  ngOnInit(){
    const skills_length:number = this.skills.length;
    var counter: number = -1;
    setInterval(()=>{
      this.skill = this.skills[++counter < skills_length ? counter: counter=0];
    },2000);
  }

  fetch_skills(): Skill[]{
    return [
      {language: 'java',
      name_tuple:['Java',''],
      language_logo_tuple:['./assets/icon/java-icon.svg',this.ALT],
      framework_logo_tuples: [
        ['./assets/icon/spring-boot-icon.svg', 'Icon by Icon8'],
        ['./assets/icon/quarkus-icon.svg', this.ALT]
      ]
    },
      { language: 'javascript',
      name_tuple:['Java','Script'],
      language_logo_tuple:['./assets/icon/javascript-icon.svg',this.ALT],
      framework_logo_tuples: [
        ['./assets/icon/javascript-icon.svg', this.ALT]
      ]
      },
      { language: 'typescript',
      name_tuple:['Type','Script'],
      language_logo_tuple:['./assets/icon/typescript-icon.svg',this.ALT],
      framework_logo_tuples: [
        ['./assets/icon/angular-icon.svg', this.ALT]
      ]
      },
      { language: 'sql',
      name_tuple:['SQL',''],
      language_logo_tuple:['./assets/icon/sql-icon.svg',this.ALT],
      framework_logo_tuples: [
        ['./assets/icon/postgresql-icon.svg', this.ALT]
      ]
      }
    ]
  }
  fetch_secondary_skills():[string,string][]{
    return [
      ['./assets/icon/docker-icon.svg', this.ALT],
      ['./assets/icon/git-icon.svg', this.ALT],
      ['./assets/icon/flyway-icon.svg', this.ALT]
    ]
  }

}
