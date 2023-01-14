import { Injectable } from '@angular/core';
import { Skill } from 'src/interfaces/skill';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  ALT: string = 'Icon by Iconify';

  constructor() { }

  get_skills(): Skill[]{
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
        ['./assets/icon/nodejs-icon.svg', this.ALT]
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
      },
      { language: 'nosql',
      name_tuple:['No','SQL'],
      language_logo_tuple:['./assets/icon/sql-icon.svg',this.ALT],
      framework_logo_tuples: [
        ['./assets/icon/mongodb-icon.svg', this.ALT]
      ]
      }
    ]
  }

  get_secondary_skills(): [string, string][]{
    return [
      ['./assets/icon/docker-icon.svg', this.ALT],
      ['./assets/icon/git-icon.svg', this.ALT],
      ['./assets/icon/flyway-icon.svg', this.ALT],
      ['./assets/icon/jira-icon.svg', this.ALT],
      ['./assets/icon/junit5-icon.svg', this.ALT]

    ]
  }

}
